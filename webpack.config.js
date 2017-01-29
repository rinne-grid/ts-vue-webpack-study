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