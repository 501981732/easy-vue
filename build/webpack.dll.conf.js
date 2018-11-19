
const path = require('path')
const webpack = require('webpack')
const libs = require('../config/lib.dependencies.js')
const AssetsPlugin = require('assets-webpack-plugin')
module.exports = {
  entry: {
      libs
    },
  output: {
    // 输出的文件都放到 dist 目录下
    path: path.join(__dirname, '../dist'),
    // 输出的动态链接库的文件名称，[name] 代表当前动态链接库的名称，也就是 entry 中配置的 vue 等
    filename: 'dll.[name].js',
    // 存放动态链接库的全局变量名称，例如对应 vue 来说就是 _dll_vue
    // 之所以在前面加上 _dll_ 是为了防止全局变量冲突
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window._dll_vue_library`
     */
    library: '_dll_[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 vue.manifest.json 中就有 "name": "_dll_vue"
      path: path.join(__dirname, '../dist', '[name]-manifest.json'),
      name: '_dll_[name]'
    }),
    // 插入到html中
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: './'
    })
  ]
}
