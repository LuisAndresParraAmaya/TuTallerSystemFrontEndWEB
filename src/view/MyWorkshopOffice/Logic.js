import { useRoute } from "vue-router"
export default {
    setup() {
        const route = useRoute()
        if(route.params.workshop_office_id !== undefined){
            const { commune_name, workshop_office_address, workshop_office_id, workshop_office_phone } = route.params
            sessionStorage.setItem('commune_name', commune_name)
            sessionStorage.setItem('workshop_office_address', workshop_office_address)
            sessionStorage.setItem('workshop_office_id', workshop_office_id)
            sessionStorage.setItem('workshop_office_phone', workshop_office_phone)
        }
        function NavigationToRoute(router) {
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({ name: router, params: { region: route.params.region, commune_name: sessionStorage.getItem('commune_name'), workshop_office_address: sessionStorage.getItem('workshop_office_address'), workshop_office_id: sessionStorage.getItem('workshop_office_id'), workshop_office_phone: sessionStorage.getItem('workshop_office_phone') } })
        }
        function NavigationToRouteWorkShopOfficeServiceList(route) {
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({ name: route })
        }
        function Redirect(link) {  
            localStorage.setItem('offertipes', 'workshopOfficeService')
            this.$router.push(link)
        }
        function getShow(){
            if (sessionStorage.getItem('user_type_id') == 3) {
                return true
            }else{
                return false
            } 
        }
        function enConstruccion(){
            alert("Función en construcción...")
        }
        return { NavigationToRoute, enConstruccion, getShow, Redirect }
    }
}