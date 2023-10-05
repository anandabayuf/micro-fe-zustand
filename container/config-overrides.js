/* config-overrides.js */
const { ModuleFederationPlugin } = require('webpack').container;
const fs = require('fs');
const path = require('path');

module.exports = function override(config, env) {
	//do stuff with the webpack config...
	/**
	 * @returns {string}
	 */
	function getPublicPath() {
		let publicPath = 'auto';
		const providedPath = process.env.PUBLIC_URL;
		if (
			providedPath &&
			providedPath.length >= 0 &&
			providedPath.startsWith('http')
		) {
			publicPath = providedPath.endsWith('/')
				? providedPath
				: providedPath + '/';
		}
		return publicPath;
	}

	const projectDir = path.resolve(fs.realpathSync(process.cwd()));
	const mfConfigPath = path.resolve(projectDir, 'moduleFederation.config.js');
	if (fs.existsSync(mfConfigPath)) {
		const mfConfig = require(mfConfigPath);
		config.plugins.push(new ModuleFederationPlugin(mfConfig));
		config.output.publicPath = getPublicPath();
	}

	return config;
};
