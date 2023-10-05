import authReducers from '@/services/authService/slice';
import baseApiSlice from '@/services/secured.api';
import publicKeySlice from '@/services/public.api';

export default {
	auth: authReducers,
	[baseApiSlice.reducerPath]: baseApiSlice.reducer,
	[publicKeySlice.reducerPath]: publicKeySlice.reducer,
};
