import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
    async setup() {
        const router = useRoute()
        let offices = await axios.post("http://localhost:8080/MyWorkShopOfficeList", {
            headers: { "Content-type": "application/json" },
            data: {
                workshop_id: router.params.workshop_id
            }
        }).then(function (res) {
            return res.data.response
        })

        function getNameSuscription(suscription){
            switch(suscription){
                case 'unsubscribed':
                    return 'Sin suscripción'
                case 'basic':
                    return 'Básico'
            }
        }

        function NavigateToRoute(workshop_office_id, workshop_office_address, workshop_office_phone, commune_name){
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({name: 'MyWorkshopOffice', params: { workshop_office_id: workshop_office_id, workshop_office_address: workshop_office_address, workshop_office_phone: workshop_office_phone, commune_name: commune_name }})
        }

        return { offices, NavigateToRoute, getNameSuscription };
    }
}