const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
    //api: './src/api.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/resources/dist'),
  },
};