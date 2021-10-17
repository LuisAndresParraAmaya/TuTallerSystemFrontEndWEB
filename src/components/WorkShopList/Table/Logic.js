import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
    async setup() {
        const router = useRoute()
        let offices = await axios.get("http://localhost:8080/WorkshopOfficeList", {
            headers: { "Content-type": "application/json" },
            data: {}
        }).then(function (res) {
            return res.data.response
        })
        console.log(offices)

        function NavigateToRoute(workshop_id, workshop_name, workshop_office_region, workshop_office_commune, workshop_office_address){
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            sessionStorage.setItem('workshop_id', workshop_id)
            sessionStorage.setItem('workshop_name', workshop_name)
            sessionStorage.setItem('workshop_office_region', workshop_office_region)
            sessionStorage.setItem('workshop_office_commune', workshop_office_commune)
            sessionStorage.setItem('workshop_office_address', workshop_office_address)
            this.$router.push({name: 'MyWorkshopOffice'})
        }

        return { offices, NavigateToRoute };
    }
}