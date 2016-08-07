const webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./virtual/js/main.js",
  output: {
    path: __dirname,
    filename: "./virtual/js/build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ["es2015"]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png)$/, loaders: "url-loader" }
    ]
  },
  resolve: {
    modulesDirectories: ["web_modules", "node_modules", "bower_components", "alias"],
    alias: { "matter-js": "matter-js/build/matter.min" }
  },
  plugins: [new webpack.ResolverPlugin(
    new webpack.ResolverPlugin
      .DirectoryDescriptionFilePlugin("package.json", ["main"])
  )]
};
