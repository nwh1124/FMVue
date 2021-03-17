import { createApp } from 'vue'
import { createRouter } from 'vue-router'

import App from './App.vue'

// 전역 css 로딩
import '/index.css'

// 전역 페이지 로딩
import HomeMainPage from './pages/HomeMainPage.vue'
import TestPage from './pages/TestPage.vue'
import UsrLoginPage from './pages/UsrLoginPage.vue'
import UsrMainPage from './pages/UsrMainPage.vue'
import UsrCondolenceListPage from './pages/UsrCondolenceListPage.vue'
import UsrSendMsgPage from './pages/UsrSendMsgPage.vue'
import UsrSendConMoneyPage from './pages/UsrSendConMoneyPage.vue'
import UsrFindMapPage from './pages/UsrFindMapPage.vue'

import { createWebHistory } from 'vue-router'

// MainApi 로딩
import { MainApi } from './apis'

// MainApi 객체 생성
const mainApi = new MainApi();

// 라우팅 구성
const routes = [
    {
        path: '/',
        component: HomeMainPage
    },
    {
        path: '/test',
        component: TestPage
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

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 앱 생성
const app = createApp(App, {

});

// 전력 라이브러리 등록
app.config.globalProperties.$mainApi = mainApi;
app.config.globalProperties.$router = router;

// 앱에 라우터 적용, 앱 표시
app.use(router).mount('#app')