import axios from 'axios'
import { subscriptionNameEnglishToSpanish } from '../../utils/translations'

export default {
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
    }
}