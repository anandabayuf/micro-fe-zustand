import { AuthStore, AuthStoreVariable } from './types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState: AuthStoreVariable = {
	token: undefined,
	user: undefined,
};

export const useAuth = create<AuthStore>()(
	persist(
		(set) => ({
			token: undefined,
			user: undefined,
			setToken: (token) => set({ token }),
			setUser: (user) => set({ user }),
			logOut: () => set({ ...initialState }),
		}),
		{ name: 'auth' }
	)
);
