import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PageHome from '@/components/PageHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

const app = createApp(App)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: PageHome
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)
app.use(createPinia())

app.mount('#app')
