import Vue from 'vue'
import VueRouter from 'vue-router'

// 全局样式引入
import '@/assets/css/global.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)

Vue.use(ElementUI)

const routes = [{
  path: '/login',
  name: 'login',
  component: () =>
    import('@/views/login')
}]

const router = new VueRouter({
  routes
})

export default router
