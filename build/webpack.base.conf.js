const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { assetsPath, resolve } = require('./utils');
const chalk= require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
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
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: [ path.resolve(__dirname, '../src') ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules/strip-ansi')
        ],
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [ 
          'vue-style-loader',
          {
            loader: 'css-loader', 
          } , 
          'sass-loader' 
        ]
      },
      {
        test: /\.css$/,
        use: [ 
          'vue-style-loader',
          {
            loader: 'css-loader'
          } 
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [ 
    new VueLoaderPlugin(),
    // new ProgressBarPlugin({
    //   format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',      
    //   clear: false, 
    //   width: 100
    // }),
  ]
};