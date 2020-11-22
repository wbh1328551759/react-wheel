const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production", //设置为生产模式，development是开发模式
  entry: {
    index: "./lib/index.tsx", //入口是 index.tsx
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"), //输出的目录
    library: "WR-UI", //库的名字
    libraryTarget: "umd", //库的格式
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, //用于匹配 tsx 格式文件
        loader: "awesome-typescript-loader", //将 tsx 文件翻译为 js
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "WR-UI",
      template: "index.html",
    }),
  ],
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "ReactDOM",
    },
  },
};
