const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
  mode: "development", //设置为开发模式，development是开发模式
  plugins: [
    new HtmlWebpackPlugin({
      title: "WR-UI",
      template: "index.html",
    }),
  ],
});
