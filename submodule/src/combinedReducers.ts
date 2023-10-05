import { combineReducers } from 'redux';
import moduleReducers from '@/redux/moduleReducer';

const reducer = combineReducers(moduleReducers);

export type RootState = ReturnType<typeof reducer>;

export default reducer;
