const path = require('path');

module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill", './js/index.js'],
  output: {
    path: path.resolve(__dirname + '/webpack_dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "corejs": "3",
                  useBuiltIns: 'usage'
                }
              ]
            ]
          }
        }
      }
    ]
  }
};