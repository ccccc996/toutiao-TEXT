module.exports = {
  // 配置使用 autoprefixer 插件
  // 作用：生成浏览器 CSS 样式规则前缀
  // VueCLI 内部已经配置了 autoprefixer 插件
  // 所以又配置了一次，所以产生冲突了
  // 'autoprefixer': { // autoprefixer 插件的配置
  //   // 配置要兼容到的环境信息
  //   browsers: ['Android >= 4.0', 'iOS >= 8']
  // },

  // 配置使用 postcss-pxtorem 插件
  // 作用：把 px 转为 rem
  'postcss-pxtorem': {
    rootValue({ file }) {
      // file => 要编译的样式的路径

      // indexOf() 找不到 vant 则返回 -1, -1 !== -1 为 false 所以不是vant组件的则是75
      // return file.indexOf('vant') !== -1 ? 37.5 : 75

      // includes 返回的直接是布尔值
      return file.includes('vant') ? 37.5 : 75
    },
    propList: ['*']
  }
}
