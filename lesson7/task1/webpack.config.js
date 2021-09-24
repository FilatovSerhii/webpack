const HtmlWebpackPlugin = require('html-webpack-plugin');// подключение webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//подключение mini-css-extract-plugin

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images',
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // указываем какой взять html и скопировать в итоговый bundel
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',  // берет весь css, упаковывает файл и подключает его в css файл
    }),
  ],
};
