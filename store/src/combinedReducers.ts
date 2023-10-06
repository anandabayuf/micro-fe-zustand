import { combineReducers } from 'redux';
import authReducers from '@/services/authService/slice';
import baseApiSlice from './services/secured.api';
import publicKeySlice from './services/public.api';

const reducer = combineReducers({
	auth: authReducers,
	[baseApiSlice.reducerPath]: baseApiSlice.reducer,
	[publicKeySlice.reducerPath]: publicKeySlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
