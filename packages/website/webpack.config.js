const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const DotEnvWebpack = require('dotenv-webpack')
const autoprefixer = require('autoprefixer')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: './src/index.tsx',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    proxy: {
      '/graphql': 'http://localhost:1337',
    },
    port: 3000,
  },
  mode: process.env.NODE_ENV ?? 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  cache: true,
  stats: 'minimal',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/i,
        dependency: { not: 'url' },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        exclude: /\.module\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 3,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: { javascriptEnabled: true },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif|mp4)$/i,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new DotEnvWebpack(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CleanWebpackPlugin(),
    new ESLintWebpackPlugin({
      useEslintrc: true,
      failOnWarning: false,
      emitWarning: true,
      cache: true,
      extensions: ['.ts', '.js', '.jsx', '.tsx'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin(),
    new webpack.AutomaticPrefetchPlugin(),
  ],
}

module.exports = config
