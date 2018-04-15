const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: { inline: true },
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve('./public/dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
