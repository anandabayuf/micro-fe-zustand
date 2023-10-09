import { useSelectAuth } from 'store/authSlice';
import { parseAccessToken } from '@/utils/parserUtils';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AppRequireAuth: React.FC = () => {
	const navigate = useNavigate();
	const { accessToken } = useSelectAuth();

	React.useEffect(() => {
		const validateAccessToken = () => {
			const parsedAccessToken = parseAccessToken(accessToken as string);
			if (!accessToken || !parsedAccessToken) {
				return navigate('/login');
			}

			return true;
		};

		validateAccessToken();
	}, [accessToken]);

	if (!accessToken) {
		return <></>;
	}

	return (
		<React.Suspense fallback={'Loading...'}>
			<Outlet />
		</React.Suspense>
	);
};

export default AppRequireAuth;
