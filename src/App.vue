<template>
  <div>
    <h1>黑马头条</h1>
    <i class="toutiao toutiao-dianzan"></i>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="less" scoped>
h1 {
  font-size: 40px;
}
</style>
