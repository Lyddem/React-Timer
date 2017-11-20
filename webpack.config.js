const path = require('path');

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');

module.exports = {
   devtool: 'source-map',
   entry: `${SRC}/index.jsx`,

   output: {
      path : DIST,
      filename: 'bundle.js',
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015']
            }
         },
      ]
   },
   resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
}
