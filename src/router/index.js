import Vue from 'vue'
import Router from 'vue-router'
import Team from '@/components/hage/Team'
import Home from '@/components/Home'
import Feedback from '@/components/hage/Feedback'
import User from '@/components/hage/User'
import Baio from '@/components/news/Baio'
import Page from '@/components/news/Page'
import Sort from '@/components/news/Sort'
import Details from '@/components/hage/Details'
import Textbox from '@/components/news/Textbox'
import Publish from '@/components/news/Publish'
Vue.use(Router)

export default new Router({
        routes: [
                {
                        path: '/',
                        component: Home,
                        children: [{
                                path: '/team',
                                component: Team
                        },
                        {
                                path: '/feedback',
                                component: Feedback,
                        },
                        {
                                path: '/user',
                                component: User
                        },
                        {
                                path: '/baio',
                                component: Baio
                        },
                        {
                                path: '/page',
                                component: Page
                        },
                        {
                                path: '/sort',
                                component: Sort
                        },
                        {
                                path: '/details',
                                component: Details
                        },
                        {
                                path: '/text',
                                component: Textbox
                        },
                        {
                                path: '/textarea',
                                component: Publish
                        }
                        ]
                },

        ]
})
