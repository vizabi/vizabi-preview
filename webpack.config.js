const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const customLoader = require('custom-loader');

const __PROD__ = process.env.NODE_ENV === 'production';
const sep = '\\' + path.sep;
const stats = {
  colors: true,
  hash: false,
  version: false,
  timings: true,
  assets: false,
  chunks: false,
  modules: false,
  reasons: true,
  children: false,
  source: false,
  errors: true,
  errorDetails: true,
  warnings: true,
  publicPath: false
};

const extractSCSS = new ExtractTextPlugin('assets/css/main.css');
customLoader.loaders = {
  ['tool-config-loader'](source) {
    this.cacheable && this.cacheable();

    this.value = [source];
    return `var VIZABI_MODEL = ${source};`;
  }
};

const preview = {
  devtool: 'source-map',

  entry: {
    preview: path.resolve('src', 'index'),
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
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
        test: /(d3|web|reader)\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'file-loader',
        query: {
          name: 'assets/vendor/js/[1]/[name].[ext]',
          regExp: new RegExp(`${sep}node_modules${sep}([^${sep}]+?)${sep}`),
        }
      },

      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'assets', 'js'),
        ],
        loader: 'file-loader?name=assets/js/[name].[ext]',
      },

      {
        test: /\.pug$/,
        include: [
          path.resolve(__dirname, 'src', 'tools')
        ],
        loaders: [
          'file-loader?name=[name].html',
          'pug-html-loader?exports=false&pretty=true'
        ],
      },

      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src', 'assets', 'css'),
        ],
        loader: extractSCSS.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: __PROD__,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              quiet: true,
              sourceMap: true,
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
          name: 'assets/vendor/fonts/[name].[ext]'
        }
      },

      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        query: {
          name: 'assets/vendor/css/[name].[ext]'
        }
      },

      {
        test: /\.json$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loaders: [
          'file-loader?name=assets/js/toolconfigs/[name].js',
          'custom-loader?name=tool-config-loader',
        ],
      },

    ],
  },

  plugins: [
    extractSCSS,
    new CleanWebpackPlugin(['build']),
  ],

  stats,
  devServer: {
    stats,
    contentBase: [
      // TODO: remove this when issue below is fixed
      // https://github.com/webpack/webpack-dev-server/issues/641
      path.resolve(__dirname, 'build'),
      path.resolve(__dirname, 'src'),
    ],
  },

};

const dependencies = __PROD__ ? [] : [
    'vizabi',
    'vizabi-barrankchart',
    'vizabi-bubblechart',
    'vizabi-mountainchart',
  ].map(pkg => require(`${pkg}/webpack.external`)(path.resolve(__dirname, 'build', pkg)));

module.exports = [preview, ...dependencies];