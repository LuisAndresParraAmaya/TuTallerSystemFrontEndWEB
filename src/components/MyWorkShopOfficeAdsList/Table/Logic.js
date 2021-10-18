import axios from "axios";
export default {
    async setup() {
        const ads = await axios.post('http://localhost:8080/WorkshopOfficeAdList', {
            headers: { 'Content-type': 'application/json' },
            data: {
                workshop_office_id: sessionStorage.getItem('workshop_office_id'),
            },
        }).then(function (res) {
            return res.data.response;
        });

        function enConstrucción() {
            alert("Funcionalidad en construcción...")
        }

        function NavigationToRoute(route, id, status) {
            /*Source -> RouteLocationRaw: 
            https://next.router.vuejs.org/api/#routelocationraw*/
            this.$router.push({ name: route, params: {id: id, status: status} })
        }
        return { ads, enConstrucción, NavigationToRoute }
    }
}