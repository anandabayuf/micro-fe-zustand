import { AnyAction, configureStore, Middleware, MiddlewareArray } from '@reduxjs/toolkit';
import reducer, { RootState } from './combinedReducers';
import logger from 'redux-logger';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import publicKeySlice from './services/public.api';
import baseApiSlice from './services/secured.api';

const exampleCustomMiddleware: Middleware<object, RootState> = (store) => (next) => (action) => {
  // const state = store.getState();
  next(action);
};

const customMiddleware = [exampleCustomMiddleware];
const apiMiddleware = [baseApiSlice.middleware, publicKeySlice.middleware];

const reducerProxy = (state: any, action: AnyAction) => {
  if (action.type === 'auth/removeAccessToken') {
    return reducer(undefined, action);
  }

  return reducer(state, action);
};

const store = configureStore({
  reducer: reducerProxy,
  middleware: new MiddlewareArray()
    .concat(thunk, logger)
    .concat(...apiMiddleware, ...customMiddleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

setupListeners(store.dispatch);

export default store;
