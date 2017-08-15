# vue-music 学习开发记录
## 项目目录的开发
```
  |-- build           //webpack的相关配置文件
  |-- config
  |-- src
    |--api            //请求后端相关数据 
      |--config.js        //公共配置脚本
      |--recommend.js       //recommend后端请求脚本
      |--singer.js        //singer后端请求数据脚本
    |--base         //基础组件
      |--listview       //listview组件
      |--scorll       //scroll组件的封装
      |--slider       //slider轮播图组件的封装
      ...
    |--common       //通用静态资源
      |--fonts        //通用的字体文件
      |--image        //通用的图片
      |--js        //通用的脚本文件
        |--dom.js       //dom常用操作的封装
        |--jsonp.js       //跨域请求的操作的封装
        |--singer.js      //歌手类的封装，面向对象的思想
        ...
      |--stylus       //通用的stylus文件
        |--base.styl        //基础的样式文件
        |--icon.styl        //字体文件的stylus的文件
        |--index.styl       //stylus文件的入口文件
        |--mixin.styl       //定义的stylus方法文件
        |--reset.styl       //重置浏览器样式文件
        |--variable.styl        //主题样式设置
        ...
    |--components       //功能组件

    |--router         //定义路由的文件
    |--store          //定义存储的文件（存放vuex的相关文件）
    |--app.vue        //页面入口文件，
    |--main.js        //项目入口文件
  |-- static          //项目静态文件
  |--babelrc          //ES6文件的转义
  |--.edlintignore         //eslint语法校验忽略文件
  |--.eslintrc        //eslint语法校验配置（配置为0，可忽略该条规则，常用'eco-last':0(最后的空行),'space-before-function-paren':0（function前的空格））
  |--.gitignore       //git忽略提交文件
  |--package.json       //项目及工具的依赖配置文件
  |--package-lock.json        //package.json模块发生更改，自动生成，有利于下次安装
  |--index.html         //入口html文件
  |--README.md          //说明

```
## webpack的基本配置
1、首先是全局目录的配置alias
    build--webpack.base.conf.js中resolve的alias是配置路径的别名

2、
## 页面路由的配置
  - router的初始化
    + import Router from 'vue-router'
    + Vue.use(Router) vue-router的注册
    + 引入所需组件 
    + router 的配置
    ```
    export default new Router({
      routes: [
        {
          path: '/',
          redirect: '/search'  //根路径的重定向
        },
        {
          path: '/',     /*path 一定加 '/',血的教训 */
          component: ..
        },
        ...
      ]
    })
    ```
    + 引入main.js中 
    ```
    import router from './router'   //引入router配置，默认省略index.js
    new Vue({
      el: '#app',
      router,        //传入vue实例中
      render: h => h(App)
    })
    ```
    + 组件中写入 router-link文件
    + index.html 中引入 router-view 标签
## 工程常用模块简介
- babel-runtime es6转义
- fastclick    移动端点击300ms延迟
  + fastclick文件引入
  + fastclick.attch(document.body) 应用完成
- babel-polyfill   开发依赖，es6的补丁，加载到main.js最开始
- jsonp               跨域请求jsonp的封装
- [better-scroll](https://github.com/ustbhuangyi/better-scroll)     原生js实现的滚动条以及轮播图的模块



 


