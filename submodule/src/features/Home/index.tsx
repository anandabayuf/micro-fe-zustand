import React from 'react';
import { getParsedCookie, setCookie } from './utils';
import { useGetUserListQuery } from './api';
import { Table, Typography } from 'antd';
import { useSelectAuth } from '@/services/authService/slice';

const Home: React.FC = () => {
	const { data } = useGetUserListQuery({
		page: 0,
		size: 10,
	});
	const { accessToken } = useSelectAuth();
	return (
		<div>
			<div>HOME</div>
			<div>{accessToken}</div>
			<div>
				<strong>Access Token:</strong>{' '}
				<Typography.Text>
					{getParsedCookie('accessToken')}
				</Typography.Text>
			</div>
			<div>
				<strong>publicKey:</strong>{' '}
				<Typography.Text>
					{getParsedCookie('publicKey')}
				</Typography.Text>
			</div>

			<Table
				columns={[{ dataIndex: 'userId', title: 'User ID' }]}
				dataSource={data?.content?.map((item, index) => {
					return {
						...item,
						key: index,
					};
				})}
			/>

			{/* <button onClick={() => setCookie('token', 'MICRONTOLLL')}>
				Change Token
			</button> */}
		</div>
	);
};

export default Home;
