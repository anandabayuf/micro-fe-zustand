import apiSlice from '@/services/secured.api';
import { TUserManagementUserApi, TUserManagementUserParams } from './types';

const userMangementUserApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
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
