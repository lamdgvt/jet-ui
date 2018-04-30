const path = require('path');

module.exports = {
  entry: './module/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};