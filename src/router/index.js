import Vue from 'vue'
import Router from 'vue-router'
import Team from '@/components/hage/Team'
import Deatails from '@/components/hage/Deatails'
import Home from '@/components/Home'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: 'team',
        component: Team
      },
      {
        path: '/deatails',
        component: Deatails
      },
      ]
    },

  ]
})
