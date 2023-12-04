## 介绍

前端开发中，经常在对接后端API前需要Mock数据进行自测调试。虽然很多框架已经集成了Mock数据测试的功能，但是为了往全栈方向发展，了解后端开发思路，还是决定起一个JavaScript+express框架的后端服务来练手。

## 配置

#### Nodejs

v18.17.1

#### MySQL

v8


#### nodemon

可以使 express 框架实现热更新

1. 安装 nodemon
```
npm install nodemon -g --save-dev
```

2. package.json 中修改启动命令
```
  "scripts": {
    "start": "node ./bin/www"
  },
```
修改为
```
  "scripts": {
    "start": "nodemon ./bin/www"
  },
```

