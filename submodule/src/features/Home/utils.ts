const MODULE_URL = process.env.REACT_APP_MODULE_URL;

export const getParsedCookie = (key: string) => {
	const cookie = document.cookie.split(';');

	for (let i = 0; i < cookie.length; i++) {
		const parsedCookie = cookie[i].split('=');
		console.log(parsedCookie);

		if (parsedCookie[0].trim() === key) return parsedCookie[1];
	}

	return undefined;
};

export const setCookie = (key: string, value: string) => {
	const domain = MODULE_URL?.split('http://')[1];

	document.cookie = `${key}=${value};domain=${domain}`;
};
