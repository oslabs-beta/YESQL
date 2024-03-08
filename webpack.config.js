const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html',
    })
  ],
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    proxy: [{
        context: ['/connect'],
        target: 'http://localhost:3000',
      }],
    // static: {
    //   directory: path.resolve(__dirname, 'build'),
    //   publicPath: '/',
    // },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  }
};