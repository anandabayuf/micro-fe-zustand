import React from 'react';
import { getParsedCookie } from '@/utils/cookieUtils';
import { useGetUserListQuery } from './api';
import { Table, Typography } from 'antd';
import { useSelectAuth } from 'store/authSlice';

const Home: React.FC = () => {
	const { data } = useGetUserListQuery({
		page: 0,
		size: 10,
	});
	const { accessToken, userInfo } = useSelectAuth();
	return (
		<div>
			<div>HOME</div>
			<div>
				<strong>Access Token:</strong>{' '}
				<Typography.Text>{accessToken}</Typography.Text>
			</div>
			<div>
				<strong>userInfo:</strong>{' '}
				<Typography.Text>{JSON.stringify(userInfo)}</Typography.Text>
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
