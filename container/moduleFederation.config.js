const { dependencies } = require('./package.json');

const MODULE_URL = process.env.REACT_APP_MODULE_URL;

module.exports = {
	name: 'container',
	filename: 'remoteEntry.js',
	exposes: {},
	remotes: {
		store: `store@${MODULE_URL}:3000/remoteEntry.js`,
		submodule: `submodule@${MODULE_URL}:3002/remoteEntry.js`,
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
