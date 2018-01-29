import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Home from '@/components/Home'
import About from '@/components/About'
import News from '@/components/News'
import Product from '@/components/Product'
import ZhaoPin from '@/components/ZhaoPin'
import Connect from '@/components/Connect'
import MapComponent from '@/components/MapComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path:'/',
          component:Home
        },
        {
          path:'/home',
          component:Home
        },
        {
          path:'/about',
          component:About
        },
        {
          path:'/news',
          component:News
        },
        {
          path:'/product',
          component:Product
        },
        {
          path:'/zhaoPin',
          component:ZhaoPin
        },
        {
          path:'/connect',
          component:Connect
        },
      ]
    }
  ]
})
