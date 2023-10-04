import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAuth } from '../../store';
import { useNavigate } from 'react-router-dom';

const MODULE_URL = process.env.REACT_APP_MODULE_URL;

const LoginForm: React.FC = () => {
	const { setToken, setUser } = useAuth();
	const navigate = useNavigate();

	const handleLogin = (value: any) => {
		if (!value) return;

		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

		const domain = MODULE_URL?.split('http://')[1];

		document.cookie = `token=${token};domain=${domain}`;
		document.cookie = `user=${JSON.stringify(value)};domain=${domain}`;

		setUser(value);
		setToken(token);

		navigate('/', { replace: true });
	};

	return (
		<Form
			layout="vertical"
			onFinish={handleLogin}
		>
			{}
			<Form.Item
				name="username"
				label="Username"
			>
				<Input placeholder="input your username" />
			</Form.Item>

			<Form.Item
				name="password"
				label="Password"
			>
				<Input.Password placeholder="input your password" />
			</Form.Item>

			<Button
				htmlType="submit"
				type="primary"
			>
				Login
			</Button>
		</Form>
	);
};

export default LoginForm;
