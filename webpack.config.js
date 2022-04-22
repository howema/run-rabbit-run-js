const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/js/index.js', styles: './src/css/styles.css' },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    // hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/notes.html',
      filename: "notes.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/html/notes-of-tag.html',
      filename: "notes-of-tag.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/html/tags.html',
      filename: "tags.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/html/show.html',
      filename: "show.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/html/create.html',
      filename: "create.html"
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
