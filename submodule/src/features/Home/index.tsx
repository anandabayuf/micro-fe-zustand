import React from 'react';
import { getParsedCookie, setCookie } from './utils';

const Home: React.FC = () => {
	return (
		<div>
			<div>HOME</div>
			<div>User: {getParsedCookie('user')}</div>
			<div>token: {getParsedCookie('token')}</div>

			<button onClick={() => setCookie('token', 'MICRONTOLLL')}>
				Change Token
			</button>
		</div>
	);
};

export default Home;
