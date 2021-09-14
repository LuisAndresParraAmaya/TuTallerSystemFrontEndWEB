import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import MyServices from './views/MyServices.vue'

const routes = [
    {path: '/', component: Home },
    {path: '/Login', component: About },
    {path: '/CreateAccount', component: CreateAccount },
    {path: '/MyServices', component: MyServices }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})