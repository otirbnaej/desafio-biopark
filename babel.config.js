module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'module-resolver',
			{
				alias: {
					// '@config': './src/config',
					'@models': './src/models',
					'@controllers': './src/controllers',
					'@database': './src/database',
					'@services': './src/services',
					'@middlewares': './src/middlewares',
				},
			},
		],
	],
	ignore: ['**/*.spec.ts'],
};
