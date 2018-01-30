// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import "./assets/css/bootstrap.css"
import "./assets/css/font-awesome.css"
import "./assets/css/animate.css"
import "./assets/css/app.css"

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // console.log(to.name)
  // console.log(to);
  store.commit('changeTabIdx',to.path.slice(1))
  // console.log("====:"+store.state.currentTabIdx);
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
