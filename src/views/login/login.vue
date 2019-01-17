<style lang="less">
  .login{

  }
</style>
<template>
  <div class="login flex flex-v-center">
    <ImgDemo class="flex-1 text-right"></ImgDemo>
    <div class="flex-1 text-left" >
      <div style="width: 300px">
        <div class="text-center m-b-32">
          <span class=" f-s-16">调研系统</span>
        </div>
        <Form ref="form" :model="formData" :rules="formRule" style="width: 300px">
          <FormItem prop="user" required>
            <Input type="text" v-model="formData.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password" required>
            <Input type="password" v-model="formData.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem class="text-center">
            <Button type="primary" @click="handleSubmit('form')" style="width: 200px">登录</Button>
          </FormItem>
        </Form>
        <div class="m-t-32 text-right"><img class="m-r-8" src="static/images/weixin.png"/><br/><span>微信登录</span></div>
      </div>
    </div>
  </div>
</template>
<script>
import ImgDemo from './components/imgDemo.vue'
export default {
  components: {
    ImgDemo
  },
  data () {
    return {
      formData: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>
