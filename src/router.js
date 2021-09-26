import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import MyServices from './views/MyServices.vue'
import ModifyProfile from './view/ModifyProfile/Template.vue'
import AddWorkshopOffices from './view/AddWorkshopOffices/Template.vue'
import ChangePassword from './view/ChangePassword/Template.vue'
import DeleteAccount from './view/DeleteAccount/Template.vue'
import RecoveryPassword from './view/RecoveryPassword/Template.vue'
import RecoveryPassword2 from './view/RecoveryPassword/Template2.vue'
import RecoveryPassword3 from './view/RecoveryPassword/Template3.vue'
import RealizePostulation from './view/RealizePostulation/Template.vue'
const routes = [
    {path: '/', component: Home },
    {path: '/Login', component: About },
    {path: '/CreateAccount', component: CreateAccount },
    {path: '/MyServices', component: MyServices },
    {path: '/ModifyProfile', component: ModifyProfile },
    {path: '/AddWorkshopOffices', component: AddWorkshopOffices },
    {path: '/ChangePassword', component: ChangePassword },
    {path: '/DeleteAccount', component: DeleteAccount },
    {path: '/RecoveryPassword', component: RecoveryPassword },
    {path: '/RecoveryPassword2', component: RecoveryPassword2 },
    {path: '/RecoveryPassword3', component: RecoveryPassword3 },
    {path: '/RealizePostulation', component: RealizePostulation }
]
export const router = createRouter({
    history:createWebHistory(),
    routes
})