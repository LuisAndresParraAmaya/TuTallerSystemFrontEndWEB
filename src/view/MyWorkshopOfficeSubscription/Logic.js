import axios from "axios"
import { routerKey } from "vue-router"
export default{
    data(){
        return{
            workshopservice:[],
            workshopid:null
        }
        
    },
    mounted(){
        this.workshopid=localStorage.getItem('workshopID')
        this.baseService()
        
    },
    methods:{
        
        async baseService() {
            await axios.post('http://localhost:8080/MyWorkShopOfficeList', {
                headers: {
                    'Content-type': 'application/json'
                },
                data: {
                    workshop_id: this.workshopid,
                },

            }).
            then(response => (this.workshopservice = response.data.response))
            .
            catch(function (error) {
                console.log(error)
            })
            

        },
        validar(){
            for(let a in this.workshopservice){
                if(this.workshopservice[a].workshop_suscription_id==1){
                    this.workshopservice=null
                }
            }
            return this.workshopservice
        },
        traductor(a){
            if(a='basic'){
                a='Plan Basico'
                return a;
            }
            return a;
        },
        send(){
            this.$router.push('subscriptionlist')
        }
    }
}