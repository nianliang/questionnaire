// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import globalComponents from './components/global_components' // 注册全局组建
import 'iview/dist/styles/iview.css'
// import './my-theme/index.less'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(globalComponents)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
