<style lang="less">

</style>
<template>
  <Modal v-model="show" :title="title" @on-cancel="cancel">
    <Form :model="formData" ref="formData" :label-width="120" :rules="formRule">
      <FormItem label="人员姓名:" prop="name">
        <Input v-model="formData.name" placeholder="请输入人员姓名"></Input>
      </FormItem>
      <FormItem label="联系电话:" prop="phone">
        <Input v-model="formData.phone" placeholder="请输入联系电话"></Input>
      </FormItem>
      <FormItem label="性别:" prop="sex">
        <RadioGroup v-model="formData.sex">
          <Radio label="unknown">
            <span>未知</span>
          </Radio>
          <Radio label="male">
            <span>男</span>
          </Radio>
          <Radio label="female">
            <span>女</span>
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="身份证号:" prop="idNumber">
        <Input v-model="formData.idNumber" placeholder="请输入身份证号"></Input>
      </FormItem>
      <FormItem label="所在城市:" prop="city">
        <Input v-model="formData.city" placeholder="请输入所在城市"></Input>
      </FormItem>
      <FormItem label="微信号码:" prop="weChat">
        <Input v-model="formData.weChat" placeholder="请输入微信号码"></Input>
      </FormItem>
      <FormItem label="角色:" prop="roleId">
        <CheckboxGroup v-model="staffRole">
          <Checkbox v-for="(item, key) in demoData.role" :label="item.id" :key="key">
            {{item.name}}
          </Checkbox>
        </CheckboxGroup>
      </FormItem>
    </Form>
    <div slot="footer">
      <div v-if="editable">
        <Button @click="cancel">取消</Button>
        <Button type="primary" @click="handleSubmit" :loading="btnLoading">确定</Button>
      </div>
    </div>
  </Modal>
</template>
<script>
  import demoData from '../../../data/demo_data'
  import StaffHttp from 'server/http/customer'
  // import Pattern from '@/util/pattern.js'
  export default {
    data () {
      return {
        show: false,
        title: '员工',
        editable: true,
        formData: {
          id: '',
          name: '',
          roleId: '',
          sex: '',
          phone: '',
          entryDate: '',
          idNumber: ''
        },
        formRule: {

        },
        demoData: demoData,
        btnLoading: false,
        staffRole: []
      }
    },
    mounted () {

    },
    methods: {
      open (id = '', editable = true) {
        this.show = true
        this.editable = editable
        if (id) {
          this.title = '修改人员信息'
          StaffHttp.getDetail(id)
            .then(data => {
              this.formData = this._.cloneDeep(data)
            })
            .catch(error => {
              console.warn('获取客户详情失败：', error)
            })
        } else {
          this.title = '新增人员信息'
        }
      },
      handleSubmit () {
        this.$refs['formData'].validate((valid) => {
          if (valid) {
            this.btnLoading = true
            StaffHttp.save(this._.cloneDeep(this.formData))
              .then(data => {
                this.$Message.success('保存成功!')
                this.btnLoading = false
                this.$emit('success')
                this.cancel()
              })
              .catch(error => {
                this.btnLoading = false
                this.$Message.success('保存失败!')
                console.warn('保存客户失败：', error)
              })
          } else {
            console.warn('保存客户时校验失败！')
          }
        })
      },
      cancel () {
        this.show = false
        this.$refs['formData'].resetFields()
      }
    }
  }
</script>
