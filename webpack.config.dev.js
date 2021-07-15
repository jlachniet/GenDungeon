const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/_GenDungeon.ts',
	output: {
		path: path.resolve(__dirname, 'build/js'),
		filename: 'GenDungeon.js',
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-typescript'],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts'],
	},
};
