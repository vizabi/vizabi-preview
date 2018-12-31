const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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

const extractSCSS = new MiniCssExtractPlugin({
  filename: 'assets/css/main.css'
});
customLoader.loaders = {
  ['tool-config-loader'](source) {
    this.cacheable && this.cacheable();

    this.value = [source];
    return `var VIZABI_MODEL = ${source};`;
  }
};

const preview = {
  mode: __PROD__ ? 'production': 'development',

  performance: {
    hints: false
  },

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
    rules: [

      {
        test: /(d3|web|reader)\.js$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'file-loader',
        options: {
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
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src', 'assets', 'js', 'toolconfigs'),
        ],
        loader: 'file-loader?name=assets/js/toolconfigs/[name].[ext]',
      },

      {
        test: /\.pug$/,
        include: [
          path.resolve(__dirname, 'src', 'tools')
        ],
        use: [
          'file-loader?name=[name].html',
          'pug-html-loader?exports=false&pretty=true'
        ],
      },

      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src', 'assets', 'css'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: __PROD__,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
            options: {
              quiet: true,
              sourceMap: true,
            },
          }
        ]
      },

      {
        test: /\.(otf|eot|svg|ttf|woff2?)$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        options: {
          name: 'assets/vendor/fonts/[name].[ext]'
        }
      },

      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        options: {
          name: 'assets/vendor/css/[name].[ext]'
        }
      },

      {
        type: 'javascript/auto',
        test: /\.json$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
        ],
        use: [
          'file-loader?name=assets/js/toolconfigs/[name].js',
          'custom-loader?name=tool-config-loader',
        ],
      },

    ],
  },

  plugins: [
    extractSCSS,
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'data'),
        to: path.resolve(path.resolve(__dirname, 'build', 'data')),
      }
    ]),
  ],

  stats,
  devServer: {
    stats,
    disableHostCheck: true,
    host: "0.0.0.0",
    contentBase: [
      // TODO: remove this when issue below is fixed
      // https://github.com/webpack/webpack-dev-server/issues/641
      path.resolve(__dirname, 'build'),
    ],
  },

};

const getWebpackConfig = (pkg) => require(`${pkg}/webpack.external`)(path.resolve(__dirname, 'build', pkg));
const dependencies = !__PROD__ ? require('./packages').map(getWebpackConfig) : [];

module.exports = [preview, ...dependencies];
