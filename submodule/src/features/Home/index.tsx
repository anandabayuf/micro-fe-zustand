import React from 'react';
import { useAuth } from './store';
import { Button } from 'antd';

const Home: React.FC = () => {
	return (
		<div>
			<div>HOME</div>
			{document.cookie}
			{/* <div>User: {JSON.stringify(parseCookie()?.user)}</div>
			<div>token: {parseCookie()?.token}</div> */}

			{/* <Button
				danger
				onClick={() => logOut()}
			>
				Logout
			</Button> */}
		</div>
	);
};

export default Home;
