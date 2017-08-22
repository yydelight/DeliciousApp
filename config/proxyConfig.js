module.exports = {
  proxyList: {
    '/v2': {
        target: 'http://api.douban.com',
        changeOrigin : true,
        pathRewrite: {
          '^/v2': '/v2'
        }
    }
  }
}