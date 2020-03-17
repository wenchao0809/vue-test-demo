const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const config = require('../config')

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		clientLogLevel: 'warning',
		contentBase: false,
		quiet: true, // for
		disableHostCheck: true,
		overlay: {
			errors: true
		},
		// proxy: config.dev.proxyTable,
		hot: true,
		port: 8090
	},
	plugins: [
	// 	new webpack.DefinePlugin({
    //   'process.env': require('../config/dev.env')
    // }),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', 'src/index.html')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new FriendlyErrorsWebpackPlugin()
	]
})
