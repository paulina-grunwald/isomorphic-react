import webpack from 'webpack'
import path from 'path'

// webpavck configuration
export default {
  // list of files that babel will load automatically when assebles the package
  entry: [
    // hot reloading
    'webpack-hot-middleware/client?reload=true',
    // lets to use yield keyword
    'babel-regenerator-runtime',
    // dirname always points to the folder we are working in
    path.resolve(__dirname, 'src/')

  ],
  // location of the final compiled file
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // HotModuleReplacementPlugin allows for the view we are seeing to be updated without refresj
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // helps to define variables that will exist in the scope of the application
    new webpack.DefinePlugin({
      // if production is used hot reloading is not working
      NODE_ENV: 'development',
      WEBPACK: true

    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src')

      }
    ]
  }
}
