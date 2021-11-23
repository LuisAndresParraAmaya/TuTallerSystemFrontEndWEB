import axios from "axios"
import {
    subscriptionNameEnglishToSpanish
} from "../../utils/translations"
export default {
    data() {
        return {
            recibido: null,
            bd:[],
            servicios:null,
            checkboxes:[],
            datobutton:'',
            subs:null,
            state:0
            
            

        }
    },
    
    mounted() {
        this.base();
        this.baseSubs();
        this.recibirDatos();
        this.datobutton =localStorage.getItem('offertipes');
        
        
    },
    methods: {
        recibirDatos() {
            let a = JSON.parse(localStorage.getItem('agregaroferta'));
            console.log(a)
            if (a === null) {
                a = [];
            } else {
                
                
                this.recibido=a;

            }
        },
        traductor(a) {
            if(a==='basic'){
                return 'Plan Basico'
            }
            if(a==='monthly'){
                a='Mensual'
                return a;
            }
            return a;
        },
        async conexionActivateOffer(check) {
            console.log('hola',this.recibido[0])

            let dos = await axios.post('http://localhost:8080/ActivateOffer', {
                headers: {
                    'Content-type': 'application/json'
                },
                data: {
                    offer: this.recibido[0],
                    offer_item_id_list:check

                },

            }).then(function (res) {
                if(res.data.Response == 'Operation Success'){
                  console.log('nice')
                }
                if(res.data.Response == 'One of the offers are already activated'){
                  alert("fail")
                }
                
              })
            
            
            // .then(response => (this.bd = response.data.response))
            
            
            .catch(function (error) {
                console.log(error)
            })

            


        },
        async base() {
            let dos = await axios.post('http://localhost:8080/WorkshopOfficeServiceList', {
                headers: {
                    'Content-type': 'application/json'
                },
                data: {
                    workshop_office_id: 1,
                },

            }).
            then(response => (this.servicios = response.data.response)).
            catch(function (error) {
                console.log(error)
            })

           

                      
        },
        baseSubs(){
            axios.get("http://localhost:8080/SubscriptionList", {
                headers: {
                    "Content-type": "application/json"
                }
            }).then(response => (this.subs = response.data.SubscriptionList))

            .catch(function (error) {
                console.log(error)
            })
            
            
            for (let sub in this.subs) {
                console.log(this.subs[sub])
                if (this.subs[sub].offer_id === 1) {
                    this.subs.splice(sub, 1)

                }
            }
        }

    }


}