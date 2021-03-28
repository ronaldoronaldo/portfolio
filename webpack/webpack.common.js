const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const PATHS = require('./paths')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['babel-polyfill', path.resolve(PATHS.SRC, 'index.js')],

  output: {
    path: PATHS.OUTPUT,
    filename: 'js/[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Combo',
      template: path.resolve(PATHS.SRC, 'index.html'),
      chunksSortMode: 'none',
      inject: false
    })
  ],

  resolve: {
    modules: [
      'combo/assets/src',
      'src',
      'node_modules',
      'combo/assets/node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [PATHS.SRC],
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        include: [PATHS.SRC],
        loader: 'file-loader?name=images/[name]-[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf|jpg)$/,
        loader: 'file-loader?name=fonts/[name]-[hash].[ext]'
      }
    ]
  }
}
