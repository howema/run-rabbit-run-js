const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/js', filterByTag: "./src/js/filterByTag.js", styles: './src/css/styles.css', notesAll: "./src/js/notesAll.js"},
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
      template: './src/html/notesAll.html',
      filename: "notesAll.html",
      chunks: ["notesAll", "styles"],
    }),
    new HtmlWebpackPlugin({
      template: './src/html/filterByTag.html',
      filename: "filterByTag.html", 
      chunks: ["filterByTag", "styles"],
     
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
