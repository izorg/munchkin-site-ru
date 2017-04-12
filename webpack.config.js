import path from 'path';

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { phenomicLoader } from 'phenomic';
import PhenomicLoaderSitemapWebpackPlugin from 'phenomic/lib/loader-sitemap-webpack-plugin';

import pkg from './package.json';

export default (config = {}) => ({
  ...config.dev && {
    devtool: 'cheap-module-eval-source-map',
  },
  module: {
    rules: [
      {
        test: /\.(md|markdown)$/,
        loader: phenomicLoader,
        query: {
          context: path.join(__dirname, config.source),
        },
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'scripts'),
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: (config.production ? '[hash:base64:5]' : '[path][name]--[local]--[hash:base64:5]'),
                modules: true,
                sourceMap: config.dev,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: config.dev,
              },
            },
          ],
        }),
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'src'),
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: config.dev,
              },
            },
          ],
        }),
      },
      {
        test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[hash].[ext]',
          context: path.join(__dirname, config.source),
        },
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
    ],
  },

  plugins: [
    new PhenomicLoaderSitemapWebpackPlugin({
      site_url: pkg.homepage,
    }),

    new ExtractTextPlugin({
      disable: config.dev,
      filename: '[name].[contenthash].css',
    }),

    ...config.production && [
      new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } },
        ),
    ],
  ],

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, config.destination),
    publicPath: config.baseUrl.pathname,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
});
