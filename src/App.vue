<template>
  <div id="app">
    App.vue
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="less">
#app {
  height: 200px;
  // 使用主体颜色
  background-color: @main-color;
  // 使用成功颜色设置字体颜色
  color: @success-color;
}
</style>
