import { combineReducers } from 'redux';
import authReducers from '@/services/authService/slice';
import baseApiSlice from './services/secured.api';
import publicKeySlice from './services/public.api';
import subModuleReducers from 'submodule/moduleReducers';

const reducer = combineReducers({
	auth: authReducers,
	[baseApiSlice.reducerPath]: baseApiSlice.reducer,
	[publicKeySlice.reducerPath]: publicKeySlice.reducer,
	...subModuleReducers,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
