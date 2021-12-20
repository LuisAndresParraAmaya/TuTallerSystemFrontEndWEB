import axios from 'axios'
import { formatDateTime } from '../../utils/formaters';
import { statusEnglishToSpanish } from '../../utils/translations';
export default {
    name: 'ListPostulation',
    async setup() {
        // Between beforeCreate and Created
        let list = await axios.get("http://localhost:8080/WorkshopPostulations", {
            headers: { "Content-type": "application/json" }
        }).then(function (res) {
            return(res.data.Postulations)
        }).catch(function (error) {
            console.log(error);
        });

        function goToSeeMore(name, status, time, message, contact, user_rut, description, id){
            console.log(user_rut)
            this.$router.push({name: 'SeeMore', params: { name: name, status: status, time: time, message: message, contact: contact, user_rut: user_rut, description: description, id: id}})
        }
        return { list, goToSeeMore, formatDateTime, statusEnglishToSpanish};
    }
}