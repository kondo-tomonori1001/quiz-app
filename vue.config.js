const path = require('path');
const options = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
}
module.exports = {
  devServer: {
    open: true
  },
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production'){
      config.optimization.delete('splitChunks');
      config.output.filename('quizApp.js')
      // config.plugin('html').tap(options => {
      //   options[0].minify = { 
      //     removeComments: false,
      //     collapseWhitespace: false,
      //     removeAttributeQuotes: false,
      //     collapseBooleanAttributes: false,
      //     removeScriptTypeAttributes: true
      //   }
      //   return options;
      // });
    }
  }
}