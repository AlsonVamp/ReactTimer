var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main$: path.join(__dirname, 'app/components/Main.jsx'),
      Nav$: path.join(__dirname, 'app/components/Nav.jsx'),
      Timer$: path.join(__dirname, 'app/components/Timer.jsx'),
      Countdown$: path.join(__dirname, 'app/components/Countdown.jsx'),
      Clock$: path.join(__dirname, 'app/components/Clock.jsx'),
      applicationStyles$: path.join(__dirname, 'app/styles/app.scss'),
      CountdownForm$: path.join(__dirname, 'app/components/CountdownForm.jsx'),
      Controls$: path.join(__dirname, 'app/components/Controls.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: "sass-loader",
        test: /\.scss$/,
        options: {
          includePaths: [path.resolve(__dirname, 'node_modules/foundation-sites/scss/')]
        }
      }

    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
