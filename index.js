const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('./webpack.config');

const app = express();

const compiler = webpack(webpackConfig);

process.env.NODE_ENV = 'development';

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  quiet: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  },
}));

app.use(express.static(path.resolve('./public')));
app.get('*', (request, response) => {
  response.sendFile(path.resolve('./public/index.html'));
});

app.listen('8888', () =>
  console.log('Now browse to localhost:8888') // eslint-disable-line
);
