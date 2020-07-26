<template>
  <div class="app">
    <!-- 路由出口 -->
    <router-view></router-view>
    <!-- tabbar -->
    <van-tabbar
      v-show="$route.meta.showTabbar"
      route
      active-color="#e40137"
      inactive-color="#b4b4bd"
    >
      <!-- 这种用法只能使用 组件库的图标 -->
      <!-- <van-tabbar-item icon="home-o">家</van-tabbar-item> -->
      <!-- 如果要自定义 就需要使用插槽 先看如何使用今天会讲解细节 -->
      <van-tabbar-item to="/Compant">
        <span>公司</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_gs_sel"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/Question">
        <span>刷题</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_st_sel"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/Find">
        <span>发现</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_fx_nor"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/My">
        <span>我的</span>
        <template #icon>
          <i class="iconfont iconicon_footbar_wode_sel"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.app {
  // 调整字体图标的大小
  .iconfont {
    font-size: 28px;
  }
}
</style>