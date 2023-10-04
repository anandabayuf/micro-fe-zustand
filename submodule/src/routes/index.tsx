import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeList } from './routeList';

const AppRoutes: React.FC = () => {
	return (
		<React.Suspense fallback="Loading...">
			<Routes>
				{routeList.map((route) => (
					<Route
						{...route}
						key={route.path as string}
					/>
				))}
			</Routes>
		</React.Suspense>
	);
};

export default AppRoutes;
