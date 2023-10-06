import apiSlice from 'store/securedApi';

import { TUserManagementUserApi, TUserManagementUserParams } from './types';

const userMangementUserApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//@ts-ignore
		getUserList: builder.query<
			TUserManagementUserApi,
			TUserManagementUserParams
		>({
			query: (params: TUserManagementUserParams) => ({
				url: '/secured/userview',
				method: 'GET',
				params,
			}),
		}),
	}),
});

export const { useGetUserListQuery } = userMangementUserApi;
