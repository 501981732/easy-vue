# easy-vue

> 多功能vue搬砖器

## Build Setup

``` bash
# install dependencies
npm install or yarn install

# 生成骨架屏（仅需要运行一次！）
npm run skeleton

# 生成开发环境下dll
npm run dll:dev

# 生成生产环境下dll
npm run dll:build

# eslint 代码检测
npm run eslint

# eslint 代码修复
npm run eslint:fix

# 代码格式化 (多人写作不建议使用，git commit 自动美化 eslint:fix代码)
npm run prettier

#生成代码文档（jsdoc格式注释代码）
npm run jsdoc

# serve with hot reload at localhost:8080(自动 dll开发环境代码，并insert到html模板)
npm run dev or npm run start

#  rebuild钩子生成盛传环境dll 并eslint 代码
npm run prebuild

# build for production with minification(自动 dll生成环境代码，并insert到html模板已配置好publicPath)
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 功能
1. 支持可选reset.css normalize.css
2. 支持可选 rem布局 or vw布局
3. 等比例宽高容器 一像素边框等移动端解决方案
4. 支持可选less sass css预处理器
5. 动态加载路由，以及自动注入组件
6. 预渲染骨架屏
7. 按需(按照指定的浏览器环境所需)引入polyfill
8. 提供vue 插件alert demo写法
9. axios init配置
10. vuex init配置
11. vue-router两种模式 history 上线配置base url 填坑
12. 上线build 自动压缩图片
13. 重写image publicPath
14. 跨域反向代理案例
15. 单元测试和e2e todo
16. npm/yarn/bower...

0.1.4 增加多页面应用
0.1.8 增加一键生成多页面应用
0.2.0 增加jsdoc配置 自动生成说明文档 增加对.vue文件的文档解析 jsdoc jsdoc-vue
0.2.1 增加代码检测工作流 prettier统一代码格式 precommit自动美化格式以及修复代码 lint-staged 多人写作避免代码冲突，渐进式lint代码
如果想要启用官方推荐的standard 可在.eslintrc.js中开启
0.2.2 开启可配置dns预解析
0.2.3 开启动态链接库dll并自动插入到模板中新增插件 DllPlugin,DllReferencePlugin,html-webpack-include-assets-plugin,cross-env
动态链接库修改在config/dll.lib.dependencies.js 默认只用了vue，vue-router

ps: 非常棒的preload prefetch and prepack 相关插件不支持webpack3.X   sad💔...

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
