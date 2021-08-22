/*
 * @*      ____       _             :  ******************************
 * @*     / __ )___  (_)___  __  __ :  Author:Beipy
 * @*    / __  / _ \/ / __ \/ / / / :  WebURL:http://www.beipy.com
 * @*   / /_/ /  __/ / /_/ / /_/ /  :  Github:http://github.com/beipy
 * @*  /_____/\___/_/ .___/\__, /   :  别有梓人传，精艺夺天工。便使玉人雕琢，妙手略相同。
 * @*              /_/    /____/    :  ******************************
 * @Descripttion:
 * @version:
 * @Date: 2021-08-09 17:32:09
 * @LastEditors: Beipy
 * @FilePath: /Beipy-Video-player/webpack.config.js
 * @LastEditTime: 2021-08-22 18:02:44
 */
// resolve用来拼接绝对路径的方法
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
let styleVariables = require("./src/css/variables.js");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // output: {

  // },
  module: {
    rules: [
      {
        // 匹配哪些文件
        test: /\.s[ac]ss$/i,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上，依次执行(先执行css-loader)
          // style-loader：创建style标签，将js中的样式资源插入进去，添加到head中生效
          "style-loader",
          // css-loader：将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          "css-loader",
          // scss-loader：将scss文件编译成css文件，需要下载scss-loader和scss
          // "sass-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: Object.keys(styleVariables)
                .map((k) => `\$${k}: ${styleVariables[k]};`)
                .join("\n"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.art$/,
        loader: 'art-template-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, "dist"),
    // 启动gzip压缩
    compress: true,

    // 端口号
    port: 3550,
    host: "localhost",
    // 自动打开浏览器
    open: true,
    // hot: true,
  },
};
