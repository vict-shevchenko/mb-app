const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/entry.tsx',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/dist/"
	},
	devServer: {
		historyApiFallback: {
			rewrites: [
				{ from: /./, to: '/index.html' }
			]
		}
	},
	devtool: 'source-map',
	resolve: {
		modules: [path.resolve(__dirname, "app"), path.resolve(__dirname, "node_modules")],
		extensions: [".js", ".ts", ".json", ".jsx", ".tsx", ".css", ".scss"]
	},

	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				include: [
					path.resolve(__dirname, "src")
				],
				loader: 'ts-loader'
			}, {
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("bundle.css")
	]
};