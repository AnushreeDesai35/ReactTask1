var path = require('path');

var config = {
   entry: './src/index.js',

   output: {
      //path:'./',
      path: path.join( __dirname, './'),
      filename: 'bundle.js',
   },

   devServer: {
     contentBase: './src',
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
