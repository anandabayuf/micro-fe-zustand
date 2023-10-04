import React from 'react';
import { useAuth } from './store';
import { Button } from 'antd';

const Home: React.FC = () => {
	const { token, user, logOut } = useAuth();

	return (
		<div>
			<div>HOME</div>
			<div>User: {JSON.stringify(user)}</div>
			<div>token: {token}</div>

			<Button
				danger
				onClick={() => logOut()}
			>
				Logout
			</Button>
		</div>
	);
};

export default Home;
