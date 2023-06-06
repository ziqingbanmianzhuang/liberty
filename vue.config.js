// const webpack = require('webpack');
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            // template: 'public/index.html',
            // 在 dist/index.html 的输出
            // filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },

    },
    devServer: {
        // 前端启动端口号
        port: 8080,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy: {
            //这里监听一个别名，下面替换掉,随便定义一个代理转发开头
            '/api': {
                target: 'https://4a8179z637.uicp.fun',//后端接口域名,凡是以api开头的都请求这个域名
                pathRewrite: {
                    '^/api': '',//替换成
                },
                ws: false,//如果代理websocket则需要配置这个参数
                secure: true,//如果是https接口，需要配置这个参数
                changeOrigin: true,//是否跨域
            },
        },
        disableHostCheck: true,//跳过Host检查，从而不会出现hot-reload失效
        hot: true,//热加载
        open: true,
    },
    // configureWebpack: {
    //     plugins: [
    //         new webpack.ProvidePlugin({
    //             $: "jquery",
    //             jQuery: "jquery",
    //             "window.jQuery": "jquery"
    //         })
    //     ]
    // },



    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'

    lintOnSave: false,//关闭语法检查



}