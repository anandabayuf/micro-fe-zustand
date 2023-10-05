import forge from 'node-forge';

export const encryptPassword = (password: string, publicKey: string) => {
	const publicKeyBinary = forge.util.decode64(publicKey);
	const publicKeyPem = forge.pki.publicKeyToPem(
		forge.pki.publicKeyFromAsn1(forge.asn1.fromDer(publicKeyBinary))
	);

	const key = forge.pki.publicKeyFromPem(publicKeyPem);
	const encrypted = forge.util.encode64(
		key.encrypt(password, 'RSAES-PKCS1-V1_5')
	);
	return encrypted;
};

type TUserData = {
	username: string;
	password: string;
};

export const encryptAuth = (
	userData: TUserData,
	publicKey: string
): string | void => {
	try {
		const encryptedPassword = encryptPassword(userData.password, publicKey);
		const authNaked = `${userData.username}:${encryptedPassword}`;
		return btoa(authNaked);
	} catch (error) {
		console.error(error);
	}
};
