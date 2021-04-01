import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/home.vue')
        },
        {
            path: '/favorites/:item',
            component: () => import('./views/favorites.vue')
        }
    ]
})

createApp(App).use(router).mount('#app')
