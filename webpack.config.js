const path = require("path");
module.exports = {
  mode: "production", //设置为生产模式，development是开发模式
  entry: {
    index: "./lib/index.tsx", //入口是 index.tsx
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
};
