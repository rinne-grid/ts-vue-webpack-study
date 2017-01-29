### 設定時メモ

#### セットアップ

```js
npm init -y
```
#### 必要なパッケージのインストール

|パッケージ名|バージョン|
|:---|:---|
|typescript|2.1.5|
|vue|2.1.10|
|vue-loader|10.1.2|
|vue-ts-loader|0.0.3|
|vue-template-compiler|2.1.10|
|css-loader|0.26.1|
|webpack|1.14.0|
|vue-cli|2.8.0|


```bash
$ npm install --save-dev typescript vue vue-loader vue-ts-loader vue-template-compiler css-loader
$ npm -g install webpack
```


#### webpack.config.jsを作成

```js
module.exports = {
    entry: { app: './app.ts'},

    output: { filename: 'app.js' },

    resolve: {
        extensions: ['', '.ts', '.vue', '.js']
    },

    module:{
        loaders: [
            { test: /\.vue$/, loader:'vue'},
            { test: /\.ts$/, loader:'vue-ts'}
        ],
    },
    vue: {
        loaders: { js: 'vue-ts-loader', },
        esModule: true
    },

}
```


#### tsconfig.jsonを作成

```js
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6", // es5... Cannot find name 'Promise'
        "experimentalDecorators": true
    }
}
```


#### app.tsを作成

```ts
declare var require: any

import Vue = require('vue')
var App = require('./app.vue').default

new Vue({
    el: '#app',
    components: { App },
    render: h => h('App')
})
```


#### app.vueを作成

```vue
<template>
<h1 @click="hello">hello world</h1>
</template>

<script>
export default {
    methods: {
        hello(): void {
            alert('hello world')
        }
    }
}
</script>
```

#### index.htmlを作成
```html
<div id="app"></div>
<script src="./app.js"></script>

```

#### webpack実行

```sh
webpack -w
```