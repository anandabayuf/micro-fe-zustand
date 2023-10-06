import {
	FetchArgs,
	FetchBaseQueryError,
	FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import {
	BaseQueryFn,
	QueryReturnValue,
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export type TMeta = FetchBaseQueryMeta | undefined;

export type TCustomFetchBaseQueryError = {
	data: {
		error: string | 'Unauthorized';
		business?: boolean;
		message: string;
		path: string;
		requestId: string;
		status: number | 400 | 401 | 402 | 403 | 404;
		timestamp: string;
	};
};

export type TQueryReturnValue = QueryReturnValue<
	unknown,
	FetchBaseQueryError & TCustomFetchBaseQueryError,
	FetchBaseQueryMeta
>;

export type TBaseQueryFn = BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError | TCustomFetchBaseQueryError
>;

export type TBaseQuerySuccess<X> = {
	data: X;
	error?: any;
	meta: TMeta;
};

export type TBaseQueryError = {
	error: {
		status: number;
		data: TCustomFetchBaseQueryError;
	};
	data?: undefined;
	meta: TMeta;
};

export type TBaseQueryArgs = string | FetchArgs;

export type TBaseQuery<X> = Promise<TBaseQuerySuccess<X> | TBaseQueryError>;

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

export type TPublicKeyResponse = {
	publicKey: string;
};

export type TBannerCarouselResponse = string[];

export type TBannerCarouselApi = TFetchResponse<TBannerCarouselResponse>;

export type TSubmitBannerCarouselResponse = {
	orderId: string;
};

export type TSearchCifRelationManagementDetails = {
	requestorName: string;
	picName: string;
	picPhone: string;
	picEmail: string;
	picPosition: string;
};

export type TSearchCifRelationManagementResponse = {
	id: string;
	name: string;
	status: string;
	customerType: string | 'R';
	segmentType: string | 'F';
	npwp: string;
	details: TSearchCifRelationManagementDetails | null;
	cif: string;
};

export type TSearchCifRelationManagementApi = TFetchResponse<
	TSearchCifRelationManagementResponse[]
> &
	TPagination;

export type TGetCifTree = {
	id: string;
	cifName: string;
	parentCIF: string | null;
	ownerCorporateId: string | null;
	accessible: boolean;
	child: TGetCifTree | null;
};

export type TGetCifTreeApi = TFetchResponse<TGetCifTree>;

export type TSearchRegisteredCorporate = {
	id: string;
	name: string;
	status: string;
	customerType: string;
	segmentType: string;
	npwp: string | null;
	details: {
		requestorName: string;
		picName: string;
		picPhone: string;
		picEmail: string;
		picPosition: string;
	};
	cif: string;
	key: number;
};

export type TSearchRegisteredCorporateApi = TFetchResponse<
	TSearchRegisteredCorporate[]
>;

export type TSearchInquiry = {
	noCif: string;
	name: string;
};

export type TSearchInquiryApi = TFetchResponse<TSearchInquiry>;

export type TUpdateCifTree = {
	orderId: string;
};

export type TUpdateCifTreeBody = {
	cifTree: TGetCifTree;
};

export type TUpdateCifTreeApi = TFetchResponse<TUpdateCifTree>;

export type TRequestListResponse = {
	id: string;
	createdBy: string;
	createdByUsername: string;
	createdDate: string;
	menuCode: string;
	moduleName: string;
	orderId: string;
	status: string;
};

export type TRequestListResponseDetailResponse = {
	moduleName?: string;
	[x: string]: any;
};

export type TRequestListResponseApi = TFetchResponse<TRequestListResponse[]>;
export type TRequestListResponseDetailApi =
	TFetchResponse<TRequestListResponseDetailResponse>;

export type TRequestApprovalActionsPayload = {
	id: string;
	reason?: string;
};

export type TSubmitUserManagementResponse = {
	orderId: string;
};

export type TSearchOnlineRegistrationResponse = {
	id: string;
	corporateId: string;
	corporateName: string;
	userId: string;
	channelId: string;
	cif: string;
	customerType: string;
	segmentType: string;
	npwp: string;
	requestorName: string;
	picName: string;
	picPhone: string;
	picEmail: string;
	picPosition: string;
	status: string;
	details: {
		sysadmin1Name: string;
		sysadmin1Nik: string;
		sysadmin1UserId: string;
		sysadmin1Email: string;
		sysadmin1Phone: string;
		sysadmin2Name: string;
		sysadmin2Nik: string;
		sysadmin2UserId: string;
		sysadmin2Email: string;
		sysadmin2Phone: string;
		// multiCifList: TMultiCifList[];
	};
};

export type TSearchOnlineRegistrationApi = TFetchResponse<
	TSearchOnlineRegistrationResponse[]
>;

export type TSearchOnlineRegistrationParams = {
	page: number;
	size: number;
};

export type TGetCifListResponse = {
	cif: string;
	cifName: string;
	cifNo: string;
	message: string;
};

export type TGetCifListApi = TFetchResponse<TGetCifListResponse[]>;

export type TRejectOnlineRegistrationPayload = {
	id: string;
	rejectReason: string;
};

export type TGetCifListPayload = {
	cif: string;
	multiCifList?: string[];
};

export type TSubmitOnlineRegistrationResponse = {
	orderId: string;
};

export type TRejectOnlineRegistrationResponse = {
	orderId: string;
};
