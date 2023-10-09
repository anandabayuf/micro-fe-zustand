const { dependencies } = require('./package.json');

const MODULE_URL = process.env.REACT_APP_MODULE_URL;

module.exports = {
	name: 'store',
	filename: 'remoteEntry.js',
	exposes: {
		'./ProviderWrapper': './src/services/components/ProviderWrapper',
		'./authApi': './src/services/authService/auth.api.ts',
		'./securedApi': './src/services/secured.api.ts',
		'./authSlice': './src/services/authService/slice.ts',
	},
	remotes: {},
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
