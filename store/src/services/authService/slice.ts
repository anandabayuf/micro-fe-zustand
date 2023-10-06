import { useAppSelector } from '@/hooks/useRedux';
import { removeLocalStorageObjectValue } from '@/utils/localStorageUtils';
import { parseAccessToken } from '@/utils/parserUtils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';
import { TAuthInitialState } from './types';
import { getParsedCookie, setCookie } from '@/utils/cookieUtils';

const initialState: TAuthInitialState = {
	accessToken: getParsedCookie('accessToken'),
	publicKey: getParsedCookie('publicKey'),
	userInfo: parseAccessToken(getParsedCookie('accessToken')),
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAccessToken: (
			state: TAuthInitialState,
			action: PayloadAction<string>
		) => {
			setCookie('accessToken', action.payload);
			return produce(state, (draftState) => {
				draftState.accessToken = action.payload;
				draftState.userInfo = parseAccessToken(action.payload);
			});
		},
		setPublicKey: (
			state: TAuthInitialState,
			action: PayloadAction<string>
		) => {
			setCookie('publicKey', action.payload);

			return produce(state, (draftState) => {
				draftState.publicKey = action.payload;
			});
		},
		removeAccessToken: (state: TAuthInitialState) => {
			removeLocalStorageObjectValue('accessToken');
			return produce(state, (draftState) => {
				draftState.accessToken = null;
				draftState.userInfo = null;
			});
		},
	},
});

export const { setAccessToken, removeAccessToken, setPublicKey } =
	authSlice.actions;

export const useSelectAuth = () => useAppSelector((state) => state.auth);

export default authSlice.reducer;
