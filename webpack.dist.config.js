var webpack = require('webpack');
var path = require('path');
var module_path = path.resolve(__dirname, 'node_modules');

/*var font_version = 1;
var name_for_font = "name=/fonts/[name].[ext]?font_version=" + font_version;
var config = require('./config.js');*/

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/ReactDateSelector'
  ],
  output: {
    libraryTarget: 'umd',
    library: 'ReactDateSelector',
    path: __dirname + '/dist/',
    filename: 'ReactDateSelector.min.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: module_path,
      loader: 'babel'
    }],
/*    // loaders for bootstrap
    {
      test: /bootstrap-sass\/assets\/javascripts\//,
      loader: 'imports?jQuery=jquery',
    },
    {
      test: /bootstrap\/js\//,
      loader: 'imports?jQuery=jquery'
    },
    {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?sourceMap!sass?sourceMap&outputStyle=expanded'
      )
    },
    // fonts
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=100000&mimetype=application/font-woff&' + name_for_font,
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=100000&mimetype=application/octet-stream&' + name_for_font,
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file?' + name_for_font,
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml&' + name_for_font,
    }],
*/
    preLoaders: [{
      test: /\.jsx$/,
      exclude: module_path,
      loader: 'babel'
    }]
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'moment': {
        root: 'moment',
        commonjs2: 'moment',
        commonjs: 'moment',
        amd: 'moment',
      }
    }
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
/*  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin(config.getDefineVar()),
  ],
*/
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  }
};
