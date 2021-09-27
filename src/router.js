import { createRouter, createWebHistory } from 'vue-router'
import Home from './view/Home/Template.vue'
import Login from './view/Login/Template.vue'
import CreateAccount from './view/CreateAccount/Template.vue'
import ModifyProfile from './view/ModifyProfile/Template.vue'
import ChangePassword from './view/ChangePassword/Template.vue'
import DeleteAccount from './view/DeleteAccount/Template.vue'
import RecoveryPassword from './view/RecoveryPassword/Template.vue'
import RecoveryPassword2 from './view/RecoveryPassword/Template2.vue'
import RecoveryPassword3 from './view/RecoveryPassword/Template3.vue'
import RealizePostulation from './view/RealizePostulation/Template.vue'
import ListPostulation from './view/ListPostulation/Template.vue'
import AddWorkshopOffice from './view/AddWorkshopOffice/Template.vue'
import RefuseWorkshop from './view/RefuseWorkshop/Template.vue'
const routes = [
    {path: '/', component: Home },
    {path: '/Login', component: Login },
    {path: '/CreateAccount', name:'ModifyProfile', component: CreateAccount },
    {path: '/ModifyProfile', component: ModifyProfile },
    {path: '/ChangePassword', component: ChangePassword },
    {path: '/DeleteAccount', component: DeleteAccount },
    {path: '/RecoveryPassword', component: RecoveryPassword },
    {path: '/RecoveryPassword2', component: RecoveryPassword2 },
    {path: '/RecoveryPassword3', component: RecoveryPassword3 },
    {path: '/RealizePostulation', component: RealizePostulation },
    {path: '/ListPostulation', component: ListPostulation},
    {path: '/AddWorkshopOffice', component: AddWorkshopOffice},
    {path: '/RefuseWorkshop', component: RefuseWorkshop}
]
export const router = createRouter({
    history:createWebHistory(),
    routes
})