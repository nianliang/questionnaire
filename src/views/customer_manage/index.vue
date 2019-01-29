<style lang="less">
  .customer{
    padding: 8px;
    .operate-area{

    }
  }
</style>
<template>
  <div class="customer">
    <div class="operate-area flex">
      <div class="flex-1">
        <AutoComplete v-model="condition.company" :data="companyList" @on-search="handleSearchCompany" placeholder="请输入客户公司名称" style="width:200px" icon="md-search" :filter-method="filterCompany">
          <Option v-for="item in companyList" :value="item.id" :key="item.id">{{ item.company }}</Option>
        </AutoComplete>
        <Input v-model="condition.phone" placeholder="请输入联系人电话" class="m-l-8 m-r-8" style="width: 150px"/>
        <Input v-model="condition.contacts" placeholder="请输入联系人名称" style="width: 150px"/>
      </div>
      <div class="text-right f-s-22"><Icon type="md-add" /><Icon type="md-trash" /></div>
    </div>
    <UrlTable url="" :columns="columns" @page-change="handlePageChange" @on-selection-change="handleSelectChange"></UrlTable>
    <!--<DataTable :data="list" :columns="columns" :loading="loading" @page-change="handlePageChange" :total="companyList.length" @on-selection-change="handleSelectChange"></DataTable>-->
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
        ]
      }
    },
    mounted () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        for (let i = 0; i < 22; i++) {
          demoData.customer.push({
            id: 10 + i,
            company: '百度',
            department: '',
            contacts: '李广利',
            phone: '13233474068',
            pwd: ''
          })
          this.companyList = demoData.customer
          this.list = this.companyList.slice(0, 10)
        }
      }, 2000)
    },
    methods: {
      handleSearchCompany () {

      },
      filterCompany (value, option) {

      },
      handlePageChange (page, pageSize) {
        this.list = this.companyList.slice((page - 1) * pageSize, page * pageSize)
      },
      handleSelectChange (selection) {
      }
    }
  }
</script>
