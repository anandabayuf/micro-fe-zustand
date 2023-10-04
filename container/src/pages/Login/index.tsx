import React from 'react';
import AppFooter from 'submodule/AppFooter';
import AppHeader from 'submodule/AppHeader';
import Login from '../../features/Login';

const LoginPage: React.FC = () => {
	return (
		<div>
			<AppHeader />
			<Login />
			<AppFooter />
		</div>
	);
};

export default LoginPage;
