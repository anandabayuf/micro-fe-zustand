import { TFetchResponse, TPublicKeyResponse } from '@/services/types';
import { DEFAULT_IAM_URL } from '@/services/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const publicKeySlice = createApi({
  reducerPath: 'publicKeySlice',
  baseQuery: fetchBaseQuery({
    baseUrl: DEFAULT_IAM_URL,
  }),
  endpoints: (builder) => ({
    getPublicKey: builder.query<TFetchResponse<TPublicKeyResponse>, any>({
      query: () => '/public/publickey',
    }),
  }),
});

export const { useGetPublicKeyQuery } = publicKeySlice;
export default publicKeySlice;
