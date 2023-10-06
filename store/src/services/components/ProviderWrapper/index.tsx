import store from '@/store';
import React from 'react';
import { Provider } from 'react-redux';

type ProviderWrapperProps = {
	children?: React.ReactNode;
};

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
