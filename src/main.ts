import { createApp } from 'vue'
import { createRouter } from 'vue-router'

import App from './App.vue'

// 전역 css 로딩
import '/index.css'

// 전역 페이지 로딩
import HomeMainPage from './pages/HomeMainPage.vue'
import UsrLoginPage from './pages/UsrLoginPage.vue'
import UsrMainPage from './pages/UsrMainPage.vue'
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')