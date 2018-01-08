import Vue from 'vue'
import Router from 'vue-router'
import Team from '@/components/hage/Team'
import Deatails from '@/components/hage/Deatails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Team',
      component: Team
    },
    {
      path: '/deatails',
      name: 'Deatails',
      component: Deatails
    }
  ]
})
