const merge = require('webpack-merge');
// 引入dev配置， prod配置中 runtimeChunk: 'single' 会导致watch模式无效
const devConf = require('./webpack.dev.conf');
const prodConf = require('./webpack.prod.conf');

const path = require('path');

module.exports = merge(devConf, {
  module: {
    rules: [
      // 使用babel
      {
        test: /\.(js|ts)/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        include: path.resolve(__dirname, '../src/')
      },
    ],
  },
  devtool: 'inline-cheap-module-source-map',
  externals: [require('webpack-node-externals')()],
});
