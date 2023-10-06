import { ENV_API_URL_LOCATION, ENV_IAM_URL } from '@/config';

export const API_BASE_URL = ENV_API_URL_LOCATION;
export const DEFAULT_IAM_URL = ENV_IAM_URL || 'http://34.101.71.39:9037';

export const API_ENV = {
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
};
