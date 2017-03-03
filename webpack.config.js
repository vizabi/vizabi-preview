const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const __PROD__ = process.env.NODE_ENV === 'production';
const sep = '\\' + path.sep;

const extractSCSS = new ExtractTextPlugin('preview/assets/css/main.css');

module.exports = {
  devtool: 'source-map',

  entry: {
    preview: path.resolve('src', 'index'),
  },

  output: {
    path: path.resolve(__dirname, 'preview'),
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },

  module: {
    loaders: [

      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'file-loader',
        query: {
          name: 'preview/assets/vendor/js/[1]/[name].[ext]',
          regExp: new RegExp(`${sep}node_modules${sep}([^${sep}]+?)${sep}`)
        }
      },

      {
        test: /\.pug$/,
        include: [
          path.resolve(__dirname, 'src', 'tools')
        ],
        loaders: [
          'file-loader?name=[name].html',
          'pug-html-loader?exports=false'
        ],
      },

      {
        test: /\.scss$/,
        // include: [
        //   path.resolve(__dirname, 'src', 'assets', 'css'),
        // ],
        loader: extractSCSS.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: __PROD__,
              sourceMap: true,
            },
          },
          // {
          //   loader: 'postcss-loader',
          // },
          {
            loader: 'sass-loader',
            options: {
              // TODO: check that it doesn't conflict with css source maps
              sourceMap: true
            },
          }
        ]),
      },

      {
        test: /\.(otf|eot|svg|ttf|woff2?)$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        query: {
          name: 'preview/assets/vendor/fonts/[name].[ext]'
        }
      },

      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        query: {
          name: 'preview/assets/vendor/css/[name].[ext]'
        }
      },

    ],
  },

  plugins: [
    extractSCSS,
  ],

};