<template>
  <van-cell class="mm-cell" @click="clickCell" :title="title" :value="value">
    <!-- 给插槽传递内容 名字叫 icon -->
    <template #icon>
      <!-- iconfont 这个类始终都在 动态拼接icon上去 -->
      <i class="iconfont" :class="icon"></i>
    </template>
    <!-- 给名字叫做 right-icon的插槽传递内容 -->
    <template #right-icon>
      <i class="iconfont iconicon_more"></i>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: 'MMCell',
  props: ['title', 'value', 'icon'],
  methods: {
    clickCell () {
      // 触发父组件的事件
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
.mm-cell {
  height: 55px;
  // 设置上下居中
  align-items: center;
  .iconfont {
    font-size: 21px;
  }
  .van-cell_title {
    margin-left: 13px;
  }
  .iconfont_more {
    font-style: 14px;
    margin-left: 9px;
  }
  &::after {
    // 设置线段的颜色为透明
    border-color: transparent;
  }
}
</style>
