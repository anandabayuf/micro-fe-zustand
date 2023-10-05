import { TBaseQuery, TBaseQueryArgs, TFetchResponse } from '@/services/types';
import {
	removeAccessToken,
	setAccessToken,
	setPublicKey,
} from '@/services/authService/slice';
import apiSlice from '../secured.api';
import { RootState } from '@/combinedReducers';
import { DEFAULT_IAM_URL } from '@/services/constants';
import { HTTPMethod } from '@/services/enums';
import {
	TPublicKeyApi,
	TUserInfoJwtPayload,
	TUserData,
} from '@/services/authService/types';
import { encryptAuth } from '@/utils/encryptUtils';

export const getPublicKey = async (
	baseQuery: (arg: TBaseQueryArgs) => TBaseQuery<TPublicKeyApi>
) => {
	const response = await baseQuery({
		url: `${DEFAULT_IAM_URL}/public/publickey`,
		method: HTTPMethod.GET,
	});

	if (!response.data) return { error: response.error };
	return { data: response.data };
};

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			queryFn: async (
				payload: TUserData,
				api,
				_,
				baseQuery: (
					arg: TBaseQueryArgs
				) => TBaseQuery<TUserInfoJwtPayload | any>
			) => {
				const { auth } = api.getState() as RootState;
				let publicKey = auth.publicKey;

				if (!publicKey) {
					publicKey = (await getPublicKey(baseQuery)).data.content
						.publicKey;
					if (!publicKey) return { error: 'Fail to get public key' };
					api.dispatch(setPublicKey(publicKey || null));
				}

				const encryptedAuth = await encryptAuth(
					{ username: payload.username, password: payload.password },
					publicKey as string
				);

				const response = await baseQuery({
					url: '/login',
					method: 'POST',
					headers: {
						Authorization: `basic ${encryptedAuth}`,
					},
				});

				if (!response.data) return { error: response.error };

				const accessToken = response.meta.response?.headers.get(
					'access_token'
				) as string;

				api.dispatch(setAccessToken(accessToken));
				return {
					data: { accessToken },
				};
			},
		}),
		logout: builder.mutation({
			queryFn: async (
				params,
				api,
				_,
				baseQuery: (
					arg: TBaseQueryArgs
				) => TBaseQuery<TFetchResponse<null>>
			) => {
				const response = await baseQuery({
					url: '/secured/logout',
					method: 'POST',
				});

				if (!response.data) return { error: response.error };

				api.dispatch(removeAccessToken());
				return { data: response.data };
			},
		}),
	}),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
