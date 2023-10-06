import {
	removeAccessToken,
	setAccessToken,
} from '@/services/authService/slice';
import { RootState } from '@/combinedReducers';
import { TBaseQueryFn, TQueryReturnValue } from '@/services/types';
import { removeLocalStorageObjectValue } from '@/utils/localStorageUtils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_BASE_URL } from '@/services/constants';
import { TAGS } from '@/constants';
import { getParsedCookie, setCookie } from '@/utils/cookieUtils';

const baseQuery = fetchBaseQuery({
	baseUrl: API_BASE_URL,
	prepareHeaders: (headers, api) => {
		const state = api.getState() as RootState;
		if (api.endpoint !== 'login') {
			const accessToken =
				//@ts-ignore
				state.auth.accessToken || getParsedCookie('accessToken');
			headers.set('Authorization', `Bearer ${accessToken}`);
		}
		return headers;
	},
});

const baseQueryWithAuth: TBaseQueryFn = async (args, api, extraOptions) => {
	const result = (await baseQuery(
		args,
		api,
		extraOptions
	)) as TQueryReturnValue;

	if (result.error?.data) {
		if (result.error?.data?.business === false) {
			// parseErrorMessage2('error.business.false');
			return result;
		}

		// parseErrorMessage2(result.error?.data.message);
		const errMessage = result.error.data.message;
		if (errMessage === 'jwtverification.exception.001') {
			api.dispatch(removeAccessToken());
			removeLocalStorageObjectValue('accessToken');
		}
	}

	const newAccessToken = result.meta?.response?.headers.get('access_token');
	if (newAccessToken) {
		api.dispatch(setAccessToken(newAccessToken));
		setCookie('accessToken', newAccessToken);
	}

	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithAuth,
	tagTypes: TAGS,
	endpoints: () => ({}),
});

export default apiSlice;
