# 准备工作

1. Node 6.x
2. 先安装本项目内的npm依赖
3. 全局npm依赖：`npm i -g grunt grunt-cli gulpjs/gulp#4.0 browser-sync uglify-js@2.x.x`
4.使用淘宝镜像安装依赖 https://npm.taobao.org/  
npm install -g cnpm --registry=https://registry.npm.taobao.org

#启动

开发环境 gulp 
生产环境 gulp --pro


# 流程概要

1. 静态稿处理完毕，需求方过审
2. 交付后端人员处理，前后联调
3. 测试人员线下环境测试、预发环境测试


## 样式

样式采用`scss`组织，采用`gulp`编译输出
