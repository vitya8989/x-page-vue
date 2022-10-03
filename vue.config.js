const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      filename: 'index.html',
    },
    detail: {
      entry: 'src/detail.js',
      filename: 'detail.html',
    }
  }
})
