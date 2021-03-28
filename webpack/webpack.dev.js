const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const PATHS = require('./paths')

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': Object.assign(
        {},
        {
          NODE_ENV: JSON.stringify('development')
        },
        PATHS.EXTERNAL_PATHS
      )
    })
  ],

  devServer: {
    contentBase: PATHS.OUTPUT,
    historyApiFallback: true,
    compress: true,
    port: 3000,
    stats: {
      modules: false,
      children: false
    }
  }
})
