const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
var path = require('path')
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
  output: {
    path: path.resolve(__dirname, '../../priv/static/')
  }
})
