

module.exports = {
  entry: ['babel-polyfill', './src/entry.js'],
  output: 'bundle.js',
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
       { 
         test: /\.css$/, 
         loader: "style!css",
      },
       {
          test: /\.scss$/,
          loader:"style!css!sass" //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
        }
    ],
    postLoaders: [
      {
        test: /\.js$/,
        loaders: ['es3ify-loader'],
      },
    ]
  },
};
  