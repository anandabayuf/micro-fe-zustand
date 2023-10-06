const { dependencies } = require('./package.json');

const MODULE_URL = process.env.REACT_APP_MODULE_URL;

module.exports = {
	name: 'submodule',
	filename: 'remoteEntry.js',
	exposes: {
		'./AppFooter': './src/general-components/AppFooter',
		'./AppHeader': './src/general-components/AppHeader',
		'./HomePage': './src/pages/Home',
	},
	remotes: {
		container: `container@${MODULE_URL}:3001/remoteEntry.js`,
		store: `store@${MODULE_URL}:3000/remoteEntry.js`,
	},
	shared: {
		...dependencies,
		react: {
			singleton: true,
			import: 'react',
			shareScope: 'default',
			requiredVersion: dependencies.react,
		},
		'react-dom': {
			singleton: true,
			requiredVersion: dependencies['react-dom'],
		},
	},
};
