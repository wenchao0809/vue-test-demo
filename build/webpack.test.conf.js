const merge = require('webpack-merge')
const prodConf = require('./webpack.prod.conf')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { assetsPath, resolve } = require('./utils')
// module.exports = merge(prodConf, {
//     module: {
//         rules: [
//             {
//                 test: /\.(js|ts)/,
//                 use: {
//                     loader: 'istanbul-instrumenter-loader',
//                     options: { esModules: true }
//                 },
//                 include: path.resolve(__dirname, '../src/')
//             },
//         ],
//     },
//     devtool: 'eval',
//     externals: [require('webpack-node-externals')()]
// });
module.exports = merge({}, {
    // output: {
    //   // use absolute paths in sourcemaps (important for debugging via IDE)
    //   devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    //   devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    // },
    mode: 'production',
    entry: [resolve('/src/main.js')],
    output: {
		path: resolve('/dist'),
		filename: '[name].[hash].js',
		publicPath: '/'
    },
    resolve: {
		modules: [ resolve('/src'), resolve('/node_modules/') ], // 优化模块查找路径
		extensions: ['.ts', '.tsx', '.vue', '.json', '.js' ],
		alias: {
			'@': resolve('/src')
		}
    },
    module: {
      rules: [].concat(
         {
            test: /\.(js|ts)/,
            use: {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            }
        },
        {
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
        },
        {
            test: /\.ts$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'ts-loader'
        }
      ),
      // ...
    },
    plugins: [ 
		new VueLoaderPlugin()
	],
    externals: [require('webpack-node-externals')()], // in order to ignore all modules in node_modules folder
    devtool: "inline-cheap-module-source-map"
  });