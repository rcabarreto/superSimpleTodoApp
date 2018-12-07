const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {
  console.log('Error loading env file!');
}

const config = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    './src/app.jsx'
  ],
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/template/index.html',
      title: 'TodoApp'
    }),
    new CleanWebpackPlugin(['public']),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    modules: [
      'node_modules',
      './src/components',
      './src'
    ],
    alias: {
      app: 'src',
      applicationStyles: path.resolve(__dirname, 'src/styles/app.scss')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'env', 'stage-2']
            }
          }
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'images/'
          }
        },{
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  }
};

module.exports = config;