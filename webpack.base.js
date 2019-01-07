module.exports = {
	//tell babel to run babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						['@babel/preset-env',{targets:{browsers:['last 2 versions']}}],
					],
					plugins: ['@babel/plugin-proposal-object-rest-spread']
				}
			}
		]
	}
};