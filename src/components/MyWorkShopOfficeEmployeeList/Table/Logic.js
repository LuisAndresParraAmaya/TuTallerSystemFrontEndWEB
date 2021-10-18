import axios from 'axios'
export default {
    async setup() {

        function NavigationToRoute(route) {
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({ name: route })
        }

        const employees = await axios.post("http://localhost:8080/WorkshopOfficeEmployeeList", {
            headers: { "Content-type": "application/json" },
            data: {
                workshop_office_id: sessionStorage.getItem('workshop_office_id')
            }
        }).then(function (res) {
            return res.data.response
        })

        function enConstruccion(){
            alert("Función en construcción...")
        }
        function getShow(){
            if(sessionStorage.getItem('user_type_id') == 3){
              return true
            }else{
              return false
            }
          }
        return { NavigationToRoute, employees,  enConstruccion, getShow }
    }
}