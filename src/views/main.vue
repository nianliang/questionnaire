<style lang="less">
  @import '../my-theme/index.less';
.main{
  background: @layout-body-background;
  font-size: @font-size-base;
  .main-head{
    display: block;
    height: 64px;
    padding: 0 32px 0 32px;
    background: #3f3f3f;
    font-size: @font-size-large;
    color: #ffffff;
    .top-text{
      text-align: right;
      padding: 19px;
      a{
        color: #ffffff;
      }
      a.active, a:hover{
        color: @link-hover-color;
      }
    }
  }
  .ivu-affix{
    background: @body-background;
  }
  .main-body{
    /*padding: 16px;*/
    height: 500px;
    .menu{
      a{
        color: inherit; // 屏蔽route的a标签颜色
      }
    }
    .panel{
      margin-left: 6px;
    }
  }
  .ivu-affix{
    z-index: 901; // 此处默认值是10，因menu的z-index的值为900
  }
}
</style>
<template>
  <div class="main">
    <Affix :offset-top="0" style="z-index: 910">
      <div class="main-head flex">
        <div class="flex flex-v-center">
          <img src="static/images/logo.png"/><span class="m-l-8">XXX调研系统</span>
        </div>
        <div class="flex-1 top-text">
          <Icon type="md-help-circle" class="m-r-8"/>
          <a class="m-r-8">帮助</a>
          <Icon type="md-contact" class="m-r-8"/>
          <Dropdown style="text-align: center" @on-click="handleLoginOut">
            <a>管理员
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="logout">退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </Affix>
    <div class="main-body">
      <Split v-model="panelPer">
        <div slot="left" class="menu p-l-16 p-tb-16">
          <Menu ref="menu" theme="light" width="auto" :active-name="activeMenu" @on-select="handleMenuClick">
            <template v-for="(menu,key) in menuData">
              <customMenu :menu="menu" :key="key"></customMenu>
            </template>
          </Menu>
        </div>
        <div slot="right" class="panel p-16">
          <router-view @updateActive="updateActive"></router-view>
          <!--<keep-alive>-->
            <!--<router-view  v-if="$route.meta.keepAlive"></router-view>&lt;!&ndash;@updateActive="updateActive" :showBread="showBread" :maxWidth="maxWidth"&ndash;&gt;-->
          <!--</keep-alive>-->
          <!--<router-view  v-if="!$route.meta.keepAlive"></router-view>-->
        </div>
      </Split>
    </div>
  </div>
</template>
<script>
  import demoData from '../data/demo_data.js'
  import customMenu from './components/custom_menu.vue'
  export default {
    components: {
      customMenu
    },
    data () {
      return {
        panelPer: 0.2,
        active: {},
        menuData: demoData.menuData,
        activeMenu: '1'
      }
    },
    methods: {
      handleMenuClick (menu) {
        this.activeMenu = menu
      },
      handleLoginOut (dropdownItem) {
        if (dropdownItem === 'logout') {
          this.$store.commit('setToken', '')
          this.$store.commit('setUser', null)
          this.$router.push('/')
        }
      },
      updateActive (menuName) {
        this.activeMenu = menuName
        this.$refs['menu'].updateActiveName()
      }
    }
  }
</script>
