const base = require("./webpack.config");
module.exports = Object.assign({}, base, {
  mode: "production", //设置为生产模式，development是开发模式
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
});
