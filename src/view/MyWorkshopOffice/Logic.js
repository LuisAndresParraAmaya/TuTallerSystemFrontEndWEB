import { useRoute } from "vue-router"
export default {
    setup() {
        const route = useRoute()
        const { commune_name, workshop_office_address, workshop_office_id, workshop_office_phone } = route.params
        function NavigationToRoute(route) {
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({ name: route, params: { commune_name: commune_name, workshop_office_address: workshop_office_address, workshop_office_id: workshop_office_id, workshop_office_phone: workshop_office_phone } })
        }
        return { NavigationToRoute }
    }
}