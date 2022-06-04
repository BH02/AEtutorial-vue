module.exports = {
    serve: {
        proxyTable: {
            '/api': {
                target: 'http://localhost:8081/',  // 目标接口域名
                ws:true,
                changeOrigin: true,  // 是否跨域
                pathRewrite: {
                  '^/api': ''   // 重写接口
                }
            }
        }
    }
}