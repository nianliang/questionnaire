<style lang="less">
  .login{
    .form{
      width: 300px;
      border: solid 1px #dcdee2;
      border-radius: 6px;
      margin: 32px;
      padding: 8px;
      /*<!--border: @border-style-base @border-width-base @border-color-base;-->
      <!--border-radius: @border-radius-base;-->*/
    }
  }
</style>
<template>
  <div class="login flex flex-v-top">
    <ImgDemo class="flex-1 text-right"></ImgDemo>
    <div class="flex-1 text-left" >
      <div>
        <div class="text-center">
          <span class=" f-s-16">调研系统</span>
        </div>
        <div class="form">
          <div class="m-tb-16 f-s-14"><span >会员登录</span></div>
          <Form ref="form" :model="formData" :rules="formRule" >
            <FormItem prop="user">
              <Input type="text" v-model="formData.user" placeholder="用户名">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formData.password" placeholder="密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <!--<FormItem class="text-center">

            </FormItem>-->
          </Form>
          <div class="text-center m-b-8"><Button type="primary" @click="handleSubmit('form')" style="width: 200px">登录</Button></div>
          <div class="text-right"><img class="m-r-8" src="static/images/weixin.png"/><br><span>微信登录</span></div>
        </div>
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
        },
        formRule: {
          user: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!')
          } else {
          }
        })
      }
    }
  }
</script>
