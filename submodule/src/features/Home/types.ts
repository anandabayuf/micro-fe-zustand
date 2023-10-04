export type TUser = {
	username: string;
	password: string;
};

export type AuthStoreVariable = {
	token?: string;
	user?: TUser;
};

export type AuthStore = AuthStoreVariable & {
	setToken: (token: string) => void;
	setUser: (user: TUser) => void;
	logOut: () => void;
};
