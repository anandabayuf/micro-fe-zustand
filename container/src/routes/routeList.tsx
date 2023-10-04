import { PathRouteProps } from 'react-router-dom';
import React from 'react';

const LoginPage = React.lazy(() => import('../pages/Login'));
const HomePage = React.lazy(() => import('submodule/HomePage'));

export const routeList: PathRouteProps[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
];
