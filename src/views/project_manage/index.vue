<style lang="less">

</style>
<template>
  <div class="customer">
    这里是项目管理
  </div>
</template>
<script>
  export default {
    created () {
      this.$emit('updateActive', '5')
    },
    data () {
      return {

      }
    }
  }
</script>
