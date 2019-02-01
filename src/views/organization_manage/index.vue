<style lang="less">

</style>
<template>
  <div>
    <div id="treeDemo" class="ztree"></div>
    <OrgForm ref="orgForm" @success="initTree"></OrgForm>
  </div>
</template>
<script>
  import ztree from '@/mixins/ztree'
  import OrgHttp from 'server/http/organization'
  import OrgForm from './component/org_form.vue'
  export default {
    mixins: [ ztree ],
    components: {OrgForm},
    created () {
      this.$emit('updateActive', '1')
    },
    data () {
      return {
        zTreeObj: null,
        setting: {
          treeId: 'org',
          data: {
            simpleData: {
              enable: true,
              idKey: 'id',
              pIdKey: 'pId',
              rootPId: -1
            }
          },
          callback: {
            onClick: this.zTreeOnClick
          },
          view: {
            showIcon: false,
            selectedMulti: false,
            addHoverDom: this.addHoverDom,
            removeHoverDom: this.removeHoverDom
          }
        } // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
      }
    },
    mounted () {
      this.initTree()
    },
    methods: {
      initTree () {
        var zNodes = [
          {
            name: 'test1',
            open: true,
            children: [
              {name: 'test1_1'},
              {name: 'test1_2'}
            ]
          },
          {
            name: 'test2',
            open: true,
            children: [
              {name: 'test2_1'},
              {name: 'test2_2'}
            ]
          }
        ]
        OrgHttp.getList()
          .then(data => {
            zNodes = data
            zNodes.unshift({id: 0, name: '全部', pId: -1})
            this.zTreeObj = this.zTreeInit(this.$('#treeDemo'), this.setting, zNodes)
            this.zTreeObj.expandAll(true)
          })
          .catch(error => {
            console.warn('OrgHttp.getList() error:', error)
          })
      },
      zTreeOnClick (event, treeId, treeNode) {

      },
      addHoverDom (treeId, treeNode) {
        let aObj = this.$('#' + treeNode.tId + '_a')
        if (this.$('#' + treeNode.tId + '_span').nextAll().length > 0) {
          return
        }
        let addNewSub = '新增子项' // 新增子项
        let add = '新增'
        let edit = '修改'
        let del = '删除'
        let addStr = '<a class="diy-btn-add" title="' + addNewSub + '" id="diyBtn_' + treeNode.id + '" data-id="' + treeNode.id + '">' + add + '</a>'
        let editStr = '<a class="diyBtnEdit" title="' + edit + '" id="editdiyBtn_' + treeNode.id + '" data-id="' + treeNode.id + '">' + edit + '</a>'
        let delStr = '<a class="diy-btn-del" title="' + del + '" id="DeldiyBtn_' + treeNode.id + '" data-id="' + treeNode.id + '">' + del + '</a>'
        // 所有的节点都可以新增
        if (this.$('#diyBtn_' + treeNode.id).length == 0) {
          aObj.append(addStr)
        }
        // 全部(id=0)节点不可编辑，其余都可以
        if (treeNode.id && this.$('#editdiyBtn_' + treeNode.id).length == 0) {
          aObj.append(editStr)
        }
        // 只有子节点可以删除
        if (!treeNode.isParent && this.$('#DeldiyBtn_' + treeNode.id).length == 0) {
          aObj.append(delStr)
        }
        let btn = this.$('#diyBtn_' + treeNode.id)
        let editbtn = this.$('#editdiyBtn_' + treeNode.id)
        let delbtn = this.$('#DeldiyBtn_' + treeNode.id)
        if (btn) {
          btn.bind('click', () => {
            this.$refs['orgForm'].open(treeNode.id, treeNode.id ? treeNode.name : '')
          })
        }
        if (editbtn) {
          editbtn.bind('click', () => {
            let parentName = ''
            if (treeNode.pId) {
              let parent = treeNode.getParentNode()
              parentName = parent.name
            }
            this.$refs['orgForm'].open(treeNode.pId, parentName, treeNode.id)
          })
        }
        if (delbtn) {
          delbtn.bind('click', () => {
            OrgHttp.del(treeNode.id)
            this.initTree()
          })
        }
        // 解决鼠标悬停，操作图标显示不完整问题
        // ztreeScroll.ztreeScroll('ztree', 'materialInfo', 0)
      },
      removeHoverDom (treeId, treeNode) {
        // 一级节点只显示添加
        this.$('#diyBtn_' + treeNode.id).unbind().remove()
        this.$('#editdiyBtn_' + treeNode.id).unbind().remove()
        this.$('#DeldiyBtn_' + treeNode.id).unbind().remove()
      }
    }
  }
</script>
