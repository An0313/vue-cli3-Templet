const px2rem = require('postcss-pxtorem')

module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({
                        rootValue: 75,
                        propList: ['*'],
                    }),
                ]
            }
        }
    },
    lintOnSave: false
}
