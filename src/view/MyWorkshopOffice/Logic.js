import { useRoute } from "vue-router"
import { ref } from 'vue'
import { isAuthenticated } from "../../helpers/userAuth"
export default {
    setup() {
        const route = useRoute()
        if(sessionStorage.getItem('commune_name') === null){
            const { commune_name, workshop_office_address, workshop_office_id, workshop_office_phone } = route.params
            sessionStorage.setItem('commune_name', commune_name)
            sessionStorage.setItem('workshop_office_address', workshop_office_address)
            sessionStorage.setItem('workshop_office_id', workshop_office_id)
            sessionStorage.setItem('workshop_office_phone', workshop_office_phone)
        }

        function NavigationToRoute(route) {
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({ name: route, params: { commune_name: sessionStorage.getItem('commune_name'), workshop_office_address: sessionStorage.getItem('workshop_office_address'), workshop_office_id: sessionStorage.getItem('workshop_office_id'), workshop_office_phone: sessionStorage.getItem('workshop_office_phone') } })
        }
        return { NavigationToRoute }
    }
}