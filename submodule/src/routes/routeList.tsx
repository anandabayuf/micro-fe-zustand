import { PathRouteProps } from 'react-router-dom';
import React from 'react';

const HomePage = React.lazy(() => import('../pages/Home'));

export const routeList: PathRouteProps[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '*',
		element: <HomePage />,
	},
];
