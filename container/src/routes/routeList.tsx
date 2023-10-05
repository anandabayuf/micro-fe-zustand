import { Navigate, PathRouteProps } from 'react-router-dom';
import React from 'react';

const LoginPage = React.lazy(() => import('../pages/Login'));
const HomePage = React.lazy(() => import('submodule/HomePage'));

export const PUBLIC_ROUTES: PathRouteProps[] = [
	{
		path: '/',
		element: (
			<Navigate
				to="/login"
				replace
			/>
		),
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '*',
		element: (
			<Navigate
				to="/login"
				replace
			/>
		),
	},
];

export const SECURED_ROUTES: PathRouteProps[] = [
	{
		path: '/home',
		element: <HomePage />,
	},
];
