import axios from 'axios'
export default {
    async setup() {

        function NavigationToRoute(route, workshop_office_service_name, workshop_office_service_price, workshop_office_service_estimated_time, workshop_office_service_description) {
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({ name: route, params: {name: workshop_office_service_name, price: workshop_office_service_price, time: workshop_office_service_estimated_time, description: workshop_office_service_description} })
        }
        function getShow(){
            if(sessionStorage.getItem('user_type_id') == 3){
              return true
            }else{
              return false
            }
          }
        const services = await axios.post("http://localhost:8080/WorkshopOfficeServiceList", {
            headers: { "Content-type": "application/json" },
            data: {
                workshop_office_id: sessionStorage.getItem('workshop_office_id')
            }
        }).then(function (res) {
            return res.data.response
        })
        return { NavigationToRoute, services, getShow }
    }
}