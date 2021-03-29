const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = Object.assign({}, base, {
  mode: "production", //设置为生产模式，development是开发模式
  entry: {
    ...base.entry,
    example: './example.tsx', //入口是 index.tsx
  },
  output: {
    path: path.resolve(__dirname, 'doc'), //输出的目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "WR-UI",
      template: "example.html",
      filename: "index.html"
    }),
  ],
});
