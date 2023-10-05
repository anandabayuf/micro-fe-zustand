import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PUBLIC_ROUTES, SECURED_ROUTES } from './routeList';
import AppRequireAuth from './components/AppRequireAuth';

const AppRoutes: React.FC = () => {
	return (
		<React.Suspense fallback="Loading...">
			<Routes>
				{PUBLIC_ROUTES.map((route, index) => (
					<Route
						key={index}
						{...route}
					/>
				))}

				<Route element={<AppRequireAuth />}>
					{[...SECURED_ROUTES].map((route, index) => {
						return (
							<Route
								key={index}
								path={route?.path}
								element={route?.element}
							/>
						);
					})}
				</Route>
			</Routes>
		</React.Suspense>
	);
};

export default AppRoutes;
