# lowkey-web

## description

```
基于uniapp构建的基础前端应用
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run server
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 异常处理

### TypeError

### 异常描述

```
ERROR  TypeError: Cannot convert undefined or null to object
TypeError: Cannot convert undefined or null to object
at Function.assign (<anonymous>)
at D:\WorkSpace\FrontWorkSpace\lowkey-web\node_modules\@dcloudio\vue-cli-plugin-uni\lib\chain-webpack.js:53:34
```

### 异常解决方案

```
uni-cli官方文档不严谨导致的。

由于执行npm install -g @vue/cli 默认安装的是最新版本，刚好当前vue-cli版本为5.x

但uni-cli仅支持vue-cli 4.x版本，将版本降级就行了。

解决方案如下：

移除原vue-cli

npm remove -g @vue/cli

重新安装vue-cli 4.x版本

npm install -g @vue/cli@4.5.14

如果还报错，可能某个依赖版本不对，需要详细排查

```