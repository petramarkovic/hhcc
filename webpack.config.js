const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const IconfontPlugin = require('iconfont-plugin-webpack')

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		clean: true,
		assetModuleFilename: '[name][ext]',
	},
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/i,
				type: 'asset/resource',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack app',
			filename: path.join(__dirname, "dist", "index.html"),
			template: path.join(__dirname, "src/html", "index.html")
		}),
		new IconfontPlugin({
			src: 'src/assets/svg',
			dest: {
				font: 'src/assets/fonts/[family].[type]',
				css: 'src/assets/fonts/_iconfont_[family].scss'
			},
			watch: {
				pattern: 'src/assets/svg/**/*.svg',
				cwd: undefined
			},
		}),
		new MiniCssExtractPlugin({
			filename: "css/styles.css",
		}),
		new OptimizeCSSAssetsPlugin({}),
	]
}