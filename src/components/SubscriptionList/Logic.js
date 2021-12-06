import axios from 'axios'
import { subscriptionNameEnglishToSpanish } from '../../utils/translations'

export default {
    data(){
        return{
            suscripcion:[]
        }
    },
    async setup() {
       
        let subs = await axios.get("http://localhost:8080/SubscriptionList", {
            headers: { "Content-type": "application/json" }
        }).then(function (res) {
            return res.data.SubscriptionList
        })
        .catch(function(error){
            console.log(error)
        })
        return {subs, subscriptionNameEnglishToSpanish};
    },
    methods:{
        verMas(precio, peirodicidad, descripcion, nombre){
            this.suscripcion.push({
                precios:precio,
                periodos:peirodicidad,
                descripciones:descripcion,
                nombre:nombre
            })
            localStorage.setItem('suscripcionplan', JSON.stringify(this.suscripcion))
            this.$router.push('Subscription')
        }
    }
}