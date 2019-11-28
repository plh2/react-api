import webpack from 'webpack'
import middleware from 'webpack-dev-middleware'
import config from './webpack.config'
const compiler = webpack(config);
const express = require('express');
const app = express();

app.use(
  middleware(compiler)
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));