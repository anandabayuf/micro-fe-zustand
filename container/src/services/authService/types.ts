import { JwtPayload } from 'jsonwebtoken';
import { TFetchResponse } from '../types';

export type EmptyType = null | undefined;

export type TAuthInitialState = {
	accessToken: string | EmptyType;
	userInfo: JwtPayload | EmptyType;
	publicKey: string | EmptyType;
};

type TMenuItem = {
	features: unknown;
	viewOnly: boolean;
	hasAccess: boolean;
	name: null | any;
	id: string;
	subHeader: null;
};
type CustomJwtPayload = {
	unique_id: string;
	permissions: string[];
	additionalInfo: {
		userGroupId: string;
		menuList: TMenuItem[];
		role: string;
		loginType: string;
		admin: boolean;
		applicationId: string;
		corporateId: null;
	};
	userName: string;
	userId: string;
};

export type TPublicKeyResponse = {
	publicKey: string;
};

export type TPublicKeyApi = TFetchResponse<TPublicKeyResponse>;

export type TUserInfoJwtPayload = JwtPayload & CustomJwtPayload;

export type TMenuCodeList =
	| '_'
	| 'MNU_CUST_HUB_BO_PENDING_TASK'
	| 'MNU_CUST_HUB_BO_USER'
	| 'MNU_CUST_HUB_BO_USERGROUP'
	| 'MNU_CUST_HUB_CALENDAR'
	| 'MNU_CUST_HUB_CIF_TREE'
	| 'MNU_CUST_HUB_CONTENT_MANAGEMENT'
	| 'MNU_CUST_HUB_CORPORATE'
	| 'MNU_CUST_HUB_ONLINE_REGISTRATION'
	| 'MNU_CUST_HUB_BO_ERROR_SCHEDULER'
	| 'MNU_CUST_HUB_EXCHANGE_RATE_DASHBOARD'
	| 'MNU_CUST_HUB_BANK_REGISTRATION';

export type TMenuList = {
	features: string | null;
	viewOnly: boolean;
	hasAccess: boolean;
	name: string | null;
	id: TMenuCodeList;
	subHeader: string | null;
};

export type TUserJWT = {
	sub: string;
	unique_id: string;
	permissions: TMenuCodeList[];
	iss: string;
	additionalInfo: {
		userGroupId: string;
		menuList: TMenuList[];
		role: string;
		loginType: string;
		admin: boolean;
		applicationId: string;
		corporateId: string | null;
	};
	exp: number;
	userName: string;
	userId: string;
};

export interface IMenuList {
	features?: null;
	viewOnly: boolean;
	hasAccess?: boolean;
	name?: null;
	id: string;
	subHeader?: null;
}

export type TUserData = {
	username: string;
	password: string;
};
