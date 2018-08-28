const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [/src/, /styleguide/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.s?css$/,
        include: [/node_modules\/antd/, /src\/styles/, /styleguide/],
        loaders: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ],
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'url-loader?name=images/[name].[ext]',
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      }, {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader',
        ],
      },
    ],
  },
  plugins: [
    new SpriteLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new LodashModuleReplacementPlugin({ shorthands: true }),
  ],
};
