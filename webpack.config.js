const path = require('path');

module.exports = {
  entry: {
    index : './src/index.js',
    home: './src/home.js',
    burgers: './src/burgers.js',
    contact: './src/contact.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },
 };