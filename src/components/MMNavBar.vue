<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <!-- 左侧插槽 可以自定义左侧内容 -->
    <template #left>
      <i class="iconfont iconbtn_nav_back"></i>
    </template>
    <template #right>
      <slot name="right"></slot>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'MMNavBar',
  //定义属性让外部传递进来
  props: {
    title: {
      type: string
    },
    leftText: {
      type: string
    },
    rightText: {
      type: string
    }
  },
  methods: {
    // 左侧点击事件
    onClickLeft () {
      this.$emit('onClickLeft')
    },
    // 右侧点击事件
    onClickRight () {
      this.$emit('onClickRight')
    }
  }
}
</script>

<style lang="less">
.nav-nav-bar {
  .iconbtn_nav_back {
    font-style: 40px;
  }
}
</style>
