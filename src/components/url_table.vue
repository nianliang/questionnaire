<template>
  <div class="m-tb-8">
    <Table :data="data" :columns="columns" stripe :loading="loading" @on-selection-change="handleSelectChange">
    </Table>
    <div v-if="showPage" class="text-right m-t-8">
      <Page :total="total" :page-size="pageSize" show-sizer show-elevator show-total @on-change="handlePageChange" @on-page-size-change="handlePageSizeChange"></Page>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'UrlTable',
    props: {
      url: {
        type: String,
        default: ''
      },
      columns: {
        type: Array,
        default: () => []
      },
      loading: {
        type: Boolean,
        default: true
      },
      showPage: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        data: [],
        curPage: 1,
        pageSize: 10,
        total: 0
      }
    },
    methods: {
      handlePageChange (page) {
        this.curPage = page
        this.$emit('page-change', page, this.pageSize)
      },
      handlePageSizeChange (pageSize) {
        this.pageSize = pageSize
        this.$emit('page-change', this.curPage, pageSize)
      },
      handleSelectChange (selection) {
        this.$emit('on-selection-change', selection)
      }
    },
    watch: {
      url (curVal, oldVal) {
        console.log('url变啦：', curVal, oldVal)
      }
    }
  }
</script>
<style lang="less">
</style>
