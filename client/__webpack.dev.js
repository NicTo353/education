module.exports = merge(common, {
  mode: "development",
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000/api",
        secure: false,
      },
    },
  },
  devtool: "inline-source-maps",
});
