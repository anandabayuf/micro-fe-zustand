import React from 'react';
import AppFooter from '../../general-components/AppFooter';
import AppHeader from '../../general-components/AppHeader';
import Home from '../../features/Home';

const HomePage: React.FC = () => {
	return (
		<div>
			<AppHeader />
			<Home />
			<AppFooter />
		</div>
	);
};

export default HomePage;
