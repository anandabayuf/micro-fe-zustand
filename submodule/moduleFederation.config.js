const { dependencies } = require('./package.json');

module.exports = {
	name: 'submodule',
	filename: 'remoteEntry.js',
	exposes: {},
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
