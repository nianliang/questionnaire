<style lang="less">
  @import '../my-theme/index.less';
.index-body{
  background: @body-background;
  font-size: @font-size-base;
  .index-head{
    display: block;
    /*height: 50px;*/
    padding: 16px 32px;
    font-size: @font-size-large;
    .top-text{
      text-align: center;
      a{
        color: @title-color;
      }
      a:active, a:hover{
        color: @link-hover-color;
      }
    }
  }
  .ivu-affix{
    background: @body-background;
  }
}
.main-body{
  text-align: center;
  height: 1000px;
}
</style>
<template>
<div class="index-body p-lr-32">
  <!--顶部条-->
  <div>
    <Affix :offset-top="0">
      <div class="index-head flex">
        <div>
          <img src="static/images/logo.png"/>
        </div>
        <div class="flex-1 top-text">
          <a class="m-l-32"><span>首页</span></a>
          <a class="m-l-32">帮助中心</a>
          <a class="m-l-32">关于我们</a>
        </div>
        <div class="top-text">
          <a class="m-r-32">登录</a>
          <a class="m-r-32">注册</a>
        </div>
      </div>
    </Affix>
  </div>
  <!--中间主体部分，包括左侧菜单和右侧界面-->
  <div class="main-body text-center">
      <Login></Login>
    <Split v-model="panelPer" v-if="false">
      <div slot="left" class="demo-split-pane">
        Left Pane
      </div>
      <div slot="right" class="demo-split-pane">
        Right Pane
      </div>
    </Split>
  </div>
  <div>
    xxx.com © 2017-2019 文思海辉技术有限公司版权所有 京ICP备17009400号-6
  </div>
</div>
</template>
<script>
import Login from './login/login.vue'
export default {
  components: {
    Login
  },
  data () {
    return {
      panelPer: 0.5
    }
  }
}
</script>
