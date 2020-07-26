<template>
  <div class="login">
    <router-view></router-view>
    <!-- 导航栏 -->
    <MMNavBar @onClickLeft="onClickLeft"></MMNavBar>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    onClickLeft () {
      console.log('onClickLeft')
    }
  }
}
</script>

<style lang="less">
.login{
  height: 100px;
  background:@white-color;
}
  </style>
