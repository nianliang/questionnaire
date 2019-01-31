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
  import demoData from '../data/demo_data'
  export default {
    name: 'UrlTable',
    props: {
      url: {
        type: String,
        default: ''
      },
      params: {
        type: Object,
        default: () => Object.create(null)
      },
      columns: {
        type: Array,
        default: () => []
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
        total: 0,
        loading: false
      }
    },
    methods: {
      list (page = 1, pageSize = 10) {
        if (!this.url) {
          this.data = []
          return
        }
        this.loading = true
        this.curPage = page
        this.pageSize = pageSize
        switch (this.url) {
          case this.routeMap.customerList:
            let tempList = demoData.customer
            if (this.params.company) {
              tempList = tempList.filter(item => {
                return item.company.includes(this.params.company)
              })
            }
            if (this.params.contacts) {
              tempList = tempList.filter(item => {
                return item.contacts.includes(this.params.contacts)
              })
            }
            if (this.params.phone) {
              tempList = tempList.filter(item => {
                return item.phone.includes(this.params.phone)
              })
            }
            this.total = tempList.length
            this.data = tempList.slice((page - 1) * pageSize, page * pageSize)
            this.loading = false
            break
          default:
            break
        }
        // todo 正式api后，需放开下列代码
        /* let params = {
          page: page,
          iDisplayLength: this.pageSize
        } */
        /* this.axios.get(this.url, {params: Object.assign(params, this.params)})
          .then(data => {
            this.total = data.total
            this.data = data.data
          })
          .catch(error => {
            console.warn('error:', this.url, error)
          }) */
      },
      handlePageChange (page) {
        this.curPage = page
        this.list(this.curPage, this.pageSize)
      },
      handlePageSizeChange (pageSize) {
        this.pageSize = pageSize
        this.list(this.curPage, this.pageSize)
      },
      handleSelectChange (selection) {
        this.$emit('on-selection-change', selection)
      }
    }
  }
</script>
<style lang="less">
</style>
