import { TFetchResponse, TSearchInquiry } from '../../types';
import apiSlice from '../../secured.api';

export type TSearchInquiryParamApi = {
  url: string;
  body: {
    noCif: string;
  };
};

export const searchInquiryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchInquiry: builder.mutation<TFetchResponse<TSearchInquiry>, TSearchInquiryParamApi>({
      query: (payload: TSearchInquiryParamApi) => ({
        url: payload.url,
        method: 'POST',
        body: payload.body,
      }),
    }),
  }),
});

export const { useSearchInquiryMutation } = searchInquiryApi;
