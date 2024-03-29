module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:20001', // 配置访问的服务器地址
          changeOrigin: true, // 用于控制请求头中的 host 值, 默认是 ture
          pathRewrite: { '^/api': '' }  // 用于将请求中的 /api 字符串替换为空, 然后访问地址就能正确访问，若不添加此行配置，那么访问地址就变成了： http://localhost:5000/api/request_url，这样的请求就会出现 404 操作

        }
      }
    }
  }