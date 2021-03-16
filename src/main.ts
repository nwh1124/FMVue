import { createApp } from 'vue'
import { createRouter } from 'vue-router'

import App from './App.vue'

// 전역 css 로딩
import '/index.css'

// 전역 페이지 로딩
import HomeMainPage from './pages/HomeMainPage.vue'
import UsrLoginPage from './pages/UsrLoginPage.vue'
import UsrMainPage from './pages/UsrMainPage.vue'
import UsrCondolenceListPage from './pages/UsrCondolenceListPage.vue'
import UsrSendMsgPage from './pages/UsrSendMsgPage.vue'
import UsrSendConMoneyPage from './pages/UsrSendConMoneyPage.vue'
import UsrFindMapPage from './pages/UsrFindMapPage.vue'

import { createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: HomeMainPage
    },
    {
        path: '/usr/login',
        component: UsrLoginPage
    },
    {
        path: '/usr/main',
        component: UsrMainPage
    },
    {
        path: '/usr/conList',
        component: UsrCondolenceListPage
    },
    {
        path: '/usr/sendMsg',
        component: UsrSendMsgPage
    },
    {
        path: '/usr/sendConMoney',
        component: UsrSendConMoneyPage
    },
    {
        path: '/usr/findMap',
        component: UsrFindMapPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')