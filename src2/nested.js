import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory('/src2/'),
    routes: [
        {
            path: '/',
            component: () => import('./views/home.vue')
        },
        {
            path: '/another/nested/path',
            component: () => import('./views/nested.vue')
        }
    ]
})

createApp(App).use(router).mount('#app')
