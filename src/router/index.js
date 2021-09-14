import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateAccount from '@/view/CreateAccount/Template.vue'
import DeleteAccount from '@/view/DeleteAccount/Template.vue'
import Login from '@/view/Login/Template.vue'
import ModifyProfile from '@/view/ModifyProfile/Template.vue'
import ReactivateAccount from '@/view/ReactivateAccount/Template.vue'
import RecoveryPassword from '@/view/RecoveryPassword/Template.vue'


Vue.use(VueRouter)
const Router= new VueRouter ({
mode:'history', 
base: process.env.BASE_URL, 
routes: [
    {path:'/CreateAccount', name:'CreateAccount', component: CreateAccount},
    {path:'/DeleteAccount', name:'DeleteAccount', component: DeleteAccount},
    {path:'/Login', name:'Login', component: Login},
    {path:'/ModifyProfile', name:'ModifyProfile', component: ModifyProfile},
    {path:'/ReactivateAccount', name:'ReactivateAccount', component: ReactivateAccount},
    {path:'/RecoveryPassword', name:'RecoveryPassword', component: RecoveryPassword},
]

})
export default Router