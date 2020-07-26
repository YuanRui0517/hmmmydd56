<template>
  <div class="my">
    <div class="top">
      <!-- 用户盒子 -->
      <div class="user-box">
        <!-- 左侧 -->
        <div class="left">
          <h3 class="title">续命咖啡</h3>
          <p class="desc">面试不求人，我有面试宝典</p>
        </div>
        <!-- 右侧头像 -->
        <div class="right">
          <img class="avatar" src="../../assets/logo.png" alt="" />
        </div>
      </div>
      <!-- 统计信息 -->
      <ul>
        <li>
          <p>555</p>
          <p>累计答题</p>
        </li>
        <li>
          <p>555</p>
          <p>收藏题目</p>
        </li>
        <li>
          <p>555</p>
          <p>我的错题</p>
        </li>
        <li>
          <p>0 <span>%</span></p>
          <p>正确率</p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <!-- 使用cell -group包裹 -->

      <MMCell
        title="我的岗位"
        icon="iconicon_mine_gangwei"
        value="产品经理"
        @click="cellClick"
        class="top-cell"
      ></MMCell>
      <!-- 数据盒子 -->
      <div class="data-box">
        <div class="title">
          面经数据
        </div>
        <ul>
          <li>
            <p>昨日阅读 <span>+100</span></p>
            <p>17</p>
            <p>阅读总数</p>
          </li>
          <li>
            <p>昨日获赞 <span>+100</span></p>
            <p>17</p>
            <p>获赞总数</p>
          </li>
          <li>
            <p>昨日新增 <span>+100</span></p>
            <p>187</p>
            <p>评论总数</p>
          </li>
        </ul>
      </div>
      <van-cell-group>
        <MMCell
          title="我的面经分享"
          icon="iconicon_mine_mianjing"
          value="21"
        ></MMCell>
        <MMCell
          title="我的消息"
          icon="iconicon_mine_xiaoxi"
          value="21"
        ></MMCell>
        <MMCell
          title="收藏的题库"
          icon="iconicon_mine_tikushoucang"
          value="21"
        ></MMCell>
        <MMCell
          title="收藏的企业"
          icon="iconicon_mine_qiyeshoucang"
          value="21"
        ></MMCell>
        <MMCell title="我的错题" icon="iconicon_mine_cuoti" value="21"></MMCell>
        <MMCell
          title="收藏的面试经验"
          icon="iconbtn_shoucang_sel"
          value="21"
        ></MMCell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import MMCell from './MMCell'
export default {
  name: 'my',
  components: {
    MMCell // MMCell:MMCell
  },
  methods: {
    cellClick () {
      console.log('我真的点了一下哦哦哦！')
    }
  }
}
</script>

<style lang="less">
// 为样式添加了一个作用域
.my {
  padding: 31px 15px;
  background-color: orange;
  .top {
    height: 260px;
    background: linear-gradient(45deg, #ce0031, #b8002c);
    margin: -31px -15px 0;
    padding: 31px 15px 0;
    .user-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
      .left {
        .title {
          font-size: 21px;
          color: @white-color;
        }
        .desc {
          opacity: 0.7;
          font-size: 12px;
          color: @white-color;
        }
      }
      .right {
        .avatar {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 255, 255, 0.38);
          border-radius: 50%;
        }
      }
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      li {
        p {
          text-align: center;
          margin: 0;
          // 第一个子元素
          // & 去除生成的空格
          &:first-child {
            font-size: 21px;
            color: @white-color;
            margin-bottom: 4px;
          }
          // 最后一个子元素
          &:last-child {
            opacity: 0.7;
            font-size: 12px;
            color: @white-color;
          }
          span {
            font-size: 12px;
            color: @white-color;
          }
        }
      }
    }
  }
  .bottom {
    position: relative;
    padding-top: 27px;
    .top-cell {
      position: absolute;
      min-height: 55px;
      top: -40px;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    .data-box {
      border-radius: 8px;
      background-color: @white-color;
      padding: 19px 15px;
      margin-bottom: 10px;
      .title {
        font-size: 14px;
        margin-bottom: 18px;
      }
      ul {
        display: flex;
        justify-content: space-around;
        li {
          p {
            font-size: 21px;
            margin: 0;
            text-align: center;
            &:first-child {
              font-size: 10px;
              color: @minor-font-color;
              margin-bottom: 17px;
              span {
                color: @assist-color;
              }
            }
            &:last-child {
              margin-top: 6px;
              font-size: 12px;
            }
          }
        }
      }
    }
    // 设置圆角
    .van-cell-group {
      border-radius: 8px;
      margin-bottom: 10px;
      overflow: hidden;
    }
  }
}
</style>
