export type TPagination = {
	totalRecord: number;
	offset: number;
	page: number;
	size: number;
	sort: string[];
};

export type TResponse = {
	status: string;
	message: null;
	business: false;
	error: false;
	totalRecord?: number;
};

export type TContent<T> = {
	content: T;
};

export type TFetchResponse<T extends null | any> = T extends null
	? TResponse
	: TResponse & TContent<T>;

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

export type TUserManagementUserGroup = {
	id: string;
	name: string;
};

export type TUserManagementUser = {
	id: string;
	version: number;
	createdDate: Date;
	createdBy: string;
	updatedDate: Date;
	updatedBy: string;
	status: string;
	details: string | null;
	userId: string;
	email: string;
	nik: string;
	mobilePhone: string;
	name: string;
	role: string | undefined;
	userGroup?: TUserManagementUserGroup;
	delete: boolean;
	key?: number;
	userGroupId?: string;
	userGroupName?: string;
};

export type TUserManagementUserApi = TFetchResponse<TUserManagementUser[]> &
	TPagination;

export type TUserManagementUserParams = {
	page: number;
	size: number;
	searchValue?: string;
};
