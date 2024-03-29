const path = require('path')
module.exports = {
  entry: {
    index: './lib/index.tsx', //入口是 index.tsx
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'), //输出的目录
    library: 'wr-ui-wheel', //库的名字
    libraryTarget: 'umd', //库的格式
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, //用于匹配 tsx 格式文件
        loader: 'awesome-typescript-loader', //将 tsx 文件翻译为 js
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ],
  },
}
