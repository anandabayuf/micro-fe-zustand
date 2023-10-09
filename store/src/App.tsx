import React from 'react';
import './App.css';
import { useSelectAuth } from './services/authService/slice';

const App: React.FC = () => {
	const { accessToken } = useSelectAuth();
	return (
		// <BrowserRouter>
		// 	<AppRoutes />
		// </BrowserRouter>
		<div>
			STORE APP
			<div>access token: {accessToken}</div>
		</div>
	);
};

export default App;
