const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: ['babel-polyfill', './src/index.js'],

  output: {
    path: __dirname,
    filename: 'js/[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Combo',
      template: './src/index.js',
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
        include: ['./src/index.js'],
        loader: 'babel-loader'
      },
      {
        test: /\.png$/,
        include: ['./src/index.js'],
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
