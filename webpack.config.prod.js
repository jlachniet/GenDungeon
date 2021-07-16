const path = require('path');

module.exports = {
	mode: 'production',
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
						presets: [
							[
								'@babel/preset-env',
								{
									targets: ['supports es5'],
									corejs: 3,
									useBuiltIns: 'usage',
								},
							],
							'@babel/preset-typescript',
						],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
	},
	target: ['web', 'es5'],
};
