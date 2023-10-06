import getSearchInquiryResponse from './getSearchInquiry.json';
import getSearchInquiryResponse2 from './getSearchInquiry2.json';
import getSearchInquiryResponse3 from './getSearchInquiry3.json';
import notFoundSearchInquiryResponse from './notFoundSearchInquiry.json';

const getDummySearchInquiryResponse = (payload: any): any => {
  const body = {
    noCif: payload.body.noCif,
  };

  if (body.noCif === 'Amazon01') return getSearchInquiryResponse;
  if (body.noCif === '8188171771921') return getSearchInquiryResponse2;
  if (body.noCif === 'CIF006') return getSearchInquiryResponse3;

  return notFoundSearchInquiryResponse;
};

export default getDummySearchInquiryResponse;
