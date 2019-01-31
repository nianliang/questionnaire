<style lang="less">
  .customer{
    padding: 8px;
    .operate-area{
      .ivu-select-dropdown-list{
        max-height: 150px;
      }
    }
  }
</style>
<template>
  <div class="customer">
    <div class="operate-area flex">
      <div class="flex-1 f-s-22"><Icon type="md-add" class="m-r-8" /><Icon type="md-trash" /></div>
      <div>
        <AutoComplete v-model="condition.company" :data="_.map(companyList, 'company')" placeholder="请输入客户公司名称" style="width:200px" icon="md-search" :filter-method="filterCompany" @on-change="handleCompanyChange">
        </AutoComplete>
        <Input v-model="condition.phone" placeholder="请输入联系人电话" class="m-l-8 m-r-8" style="width: 150px" @on-change="handlePhone" @on-blur="handlePhone"/>
        <Input v-model="condition.contacts" placeholder="请输入联系人名称" style="width: 150px" @on-change="handleContacts" @on-blur="handleContacts"/>
      </div>
    </div>
    <UrlTable ref="table" :url="url" :columns="columns" :params="condition"></UrlTable>
  </div>
</template>
<script>
  import DataTable from '@/components/data_table.vue'
  import UrlTable from '@/components/url_table.vue'
  import demoData from '../../data/demo_data.js'
  export default {
    components: {
      DataTable, UrlTable
    },
    data () {
      return {
        url: this.routeMap.customerList,
        condition: {
          company: '',
          contacts: '',
          phone: ''
        },
        companyList: [],
        list: [],
        loading: false,
        columns: [
          {
            type: 'selection',
            title: '选择',
            minWidth: 60,
            tooltip: true
          },
          {
            title: '编号',
            key: 'id',
            minWidth: 60,
            tooltip: true
          },
          {
            title: '公司名称',
            key: 'company',
            minWidth: 150,
            tooltip: true
          },
          {
            title: '部门名称',
            key: 'department',
            minWidth: 100,
            tooltip: true
          },
          {
            title: '联系人姓名',
            key: 'contacts',
            minWidth: 100,
            tooltip: true
          },
          {
            title: '联系人电话',
            key: 'phone',
            minWidth: 100,
            tooltip: true
          }
        ],
        timer: null
      }
    },
    mounted () {
      setTimeout(() => {
        for (let i = 0; i < 22; i++) {
          demoData.customer.push({
            id: 10 + i,
            company: '百度' + i,
            department: '',
            contacts: '李广利',
            phone: '13233474068',
            pwd: ''
          })
          this.companyList = demoData.customer
          // this.list = this.companyList.slice(0, 10)
          this.$refs['table'].list()
        }
      }, 2000)
    },
    methods: {
      filterCompany (value, option) {
        return option.indexOf(value) !== -1
      },
      handleCompanyChange (value) {
        this.condition.company = value
        this.getList()
      },
      handlePhone () {
        this.getList()
      },
      handleContacts () {
        this.getList()
      },
      getList () {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$refs['table'].list()
        }, 1000)
      }
    }
  }
</script>
