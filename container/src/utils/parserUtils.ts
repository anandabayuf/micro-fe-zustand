import { UploadFile } from 'antd';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { v4 as uuid4 } from 'uuid';

export const parseFileObj = async (
	file: Blob
): Promise<string | ArrayBuffer | null | undefined> => {
	return new Promise((resolve, reject) => {
		const reader: FileReader = new FileReader();
		let base64: string | ArrayBuffer | null | undefined;

		reader.onload = (fileLoadedEvent) => {
			base64 = fileLoadedEvent?.target?.result;
			resolve(base64);
		};

		reader.onerror = () => reject('Something wrong with the file');
		if (file) reader.readAsDataURL(file);
	});
};

export const capitalize = (word = '', eachWord = false): string | undefined => {
	word = word.toLocaleLowerCase();

	if (!eachWord) {
		const firstLetter: string = word[0].toUpperCase();
		const rest: string = word.slice(1);
		return `${firstLetter}${rest}`;
	}

	return word;
};

export function parseAccessToken(token: string): null | JwtPayload {
	return jwt.decode(token) as JwtPayload | null;
}

export const limitWord = (word = '', limit = 10): string => {
	if (word.length > 10) return `${word.slice(0, limit)}...`;

	return word;
};

export function parseFileList(
	fileList: string[] | UploadFile<any>[]
): UploadFile<any>[] {
	return fileList.map((file) => {
		const uid = uuid4();
		if (typeof file === 'string') {
			return {
				uid: uid,
				name: uid,
				preview: file,
			};
		}

		return file;
	});
}
