import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import About from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import MyServices from './views/MyServices.vue'
import ModifyProfile from './view/ModifyProfile/Template.vue'
import AddWorkshopOffices from './view/AddWorkshopOffices/Template.vue'
import ChangePassword from './view/ChangePassword/Template.vue'

const routes = [
    {path: '/', component: Home },
    {path: '/Login', component: About },
    {path: '/CreateAccount', component: CreateAccount },
    {path: '/MyServices', component: MyServices },
    {path: '/ModifyProfile', component: ModifyProfile },
    {path: '/AddWorkshopOffices', component: AddWorkshopOffices },
    {path: '/ChangePassword', component: ChangePassword }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})