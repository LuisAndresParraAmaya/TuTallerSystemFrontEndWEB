import axios from 'axios'
export default {
    async setup() {
        let workshops = await axios.post("http://localhost:8080/MyWorkShopList", {
            headers: { "Content-type": "application/json" },
            data: {
                user_rut: sessionStorage.getItem('user_rut')
            }
        }).then(function (res) {
            return res.data.response
        }).catch(function (error) {
            console.log(error);
        });

        function NavigateToRoute(pathName, workshop_id, workshop_description = undefined, workshop_name = undefined, workshop_phone = undefined){
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({name: pathName, params: { workshop_id: workshop_id, workshop_description: workshop_description, workshop_name: workshop_name, workshop_phone: workshop_phone }})
        }

        return { workshops, NavigateToRoute };
    }
}