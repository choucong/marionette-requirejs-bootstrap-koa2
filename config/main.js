"use strict";

let env = process.env.NODE_ENV || 'development';
let port = process.env.PORT || 3000;

module.exports = {
  // 扩展配置文件
  extend: '../koa-grace-app/config/main.js',
  
  // proxy timeout时间
  proxy: {
    timeout: 15000
  },
  
  // controller中请求各类数据前缀和域名的键值对
  api: {
    github_api:'https://api.github.com/',
    github:'https://github.com/'
  },

  // mock server配置
  mock: {
    prefix: '/__MOCK__/'
  },

  // 站点相关的配置
  site: {
    env: env,
    port: port
  },

  // 路径相关的配置
  path: {
    // app
    app: './app/',
    // project
    project: './app/',
    default_path:{
      blog:'/home'
    }
  },

  // vhost配置
  vhost: {
    'test.mlsfe.biz':'blog',
    '127.0.0.1':'api',
    'localhost':'shop',
    '0.0.0.0':'reactjs-boilerplate'
  },

  // mongo配置
  mongo: {
    options:{
      // mongoose 配置
    },
    api:{
      'blog': 'mongodb://localhost:27017/blog',
      'api': 'mongodb://localhost:27017/api'
    }
  },

  // 模板引擎配置
  template: 'swig',

  // 上传下载配置
  xload: {
    path: 'files/',
    upload: {
      encoding: 'utf-8',
      maxFieldsSize: 2 * 1024 * 1024,
      maxFields: 1000,
      keepExtensions: true
    },
    download: {}
  }
}