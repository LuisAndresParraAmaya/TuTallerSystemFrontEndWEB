import { ref } from 'vue';
import axios from 'axios'

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
        return { list };
    }
}