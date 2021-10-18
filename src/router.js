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
import SeeMore from './view/SeeMore/Template.vue'
import MyWorkshopList from './view/MyWorkshopList/Template.vue'
import MyWorkshop from './view/MyWorkshop/Template.vue'
import MyWorkshopOfficeList from './view/MyWorkshopOfficeList/Template.vue'
import MyWorkshopOffice from './view/MyWorkshopOffice/Template.vue'
import MyWorkShopOfficeAdsList from './view/MyWorkShopOfficeAdsList/Template.vue'
import AddWorkshopOfficeEmployee from './view/AddWorkshopOfficeEmployee/Template.vue'
import ModifyWorkShopOffice from './view/ModifyWorkshopOffice/Template.vue'
import AddWorkshopOfficeService from './view/AddWorkshopOfficeService/Template.vue'
import WorkshopOfficeService from './view/WorkshopOfficeService/Template.vue'
import WorkShopList from './view/WorkShopList/Template.vue'
import FileWorkShopOfficeComplaint from './view/FileWorkShopOfficeComplaint/Template.vue'
import ShowWorkshopEmployee from './view/ShowWorkshopEmployee/Template.vue'
import WorkShopOfficeServiceList from './view/WorkShopOfficeServiceList/Template.vue'
import WorkshopAds from './view/WorkshopAds/Template.vue'
import OfferWorkshopService from './view/OfferWorkshopService/Template.vue'
import WorkShopOfficeAdsBid from './view/WorkShopOfficeAdsBid/Template.vue'

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
    {path: '/RealizePostulation', name:'RealizePostulation', component: RealizePostulation },
    {path: '/ListPostulation', name:'ListPostulation', component: ListPostulation},
    {path: '/RefuseWorkshop', component: RefuseWorkshop},
    {path: '/SeeMore', name:'WorkshopPostulation', component: SeeMore},
    {path: '/MyWorkshopList', name:'MyWorkshopList', component: MyWorkshopList},
    {path: '/MyWorkshop', name:'MyWorkshop', component: MyWorkshop},
    {path: '/MyWorkshopOfficeList', name:'MyWorkshopOfficeList', component: MyWorkshopOfficeList},
    {path: '/MyWorkshopOffice', name:'MyWorkshopOffice', component: MyWorkshopOffice},
    //Rutas -> Sucursales
    {path: '/AddWorkshopOffice', name:'AddWorkshopOffice', component: AddWorkshopOffice},
    {path: '/AddWorkshopOfficeEmployee', name:'AddWorkshopOfficeEmployee', component: AddWorkshopOfficeEmployee},
    {path: '/WorkShopOfficeServiceList', name:'WorkShopOfficeServiceList', component: WorkShopOfficeServiceList},
    {path: '/MyWorkShopOfficeAdsList', name:'MyWorkShopOfficeAdsList', component: MyWorkShopOfficeAdsList},
    /////////////////////
    {path: '/WorkShopOfficeAdsBid', name:'WorkShopOfficeAdsBid', component: WorkShopOfficeAdsBid},
    {path: '/ModifyWorkshopOffice', name:'ModifyWorkshopOffice', component: ModifyWorkShopOffice},
    {path: '/AddWorkshopOfficeService', name:'AddWorkshopOfficeService', component: AddWorkshopOfficeService},
    {path: '/WorkShopList', name:'WorkShopList', component: WorkShopList},
    {path: '/FileWorkShopOfficeComplaint', name:'FileWorkShopOfficeComplaint', component: FileWorkShopOfficeComplaint},
    {path: '/ShowWorkshopEmployee', name:'ShowWorkshopEmployee', component: ShowWorkshopEmployee},
    {path: '/WorkshopAds', name:'WorkshopAds', component: WorkshopAds},
    {path: '/WorkshopOfficeService', name:'WorkshopOfficeService', component: WorkshopOfficeService},
    {path: '/OfferWorkshopService', name:'OfferWorkshopService', component: OfferWorkshopService}
]
export const router = createRouter({
    history:createWebHistory(),
    routes
});
