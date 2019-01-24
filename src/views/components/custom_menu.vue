<style lang="less">

</style>
<template>
  <div>
    <template v-if="menu.children && menu.children.length">
      <Submenu :name="menu.id" >
        <template slot="title">
          <Icon type="md-paper" />{{menu.title}}
        </template>
        <customMenu v-for="(item, key) in menu.children" :menu="item" :key="key" @menu-click="handleMenuClick"></customMenu>
      </Submenu>
    </template>
    <template v-else>
      <router-link :to="menu.route_link">
      <MenuItem :name="menu.id" @on-select="handleMenuClick">
          <Icon type="md-paper" />{{menu.title}}
      </MenuItem>
      </router-link>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'customMenu',
    props: ['menu'],
    methods: {
      handleMenuClick (menu) {
        this.$emit('menu-click', menu)
      }
    }
  }
</script>
