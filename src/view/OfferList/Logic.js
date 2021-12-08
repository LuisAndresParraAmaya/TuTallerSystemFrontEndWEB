import axios from "axios"
export default {
    setup() {

    },
    data() {
        return {

            subs: null,
            ofertas: [],
            service: [],
            servicios: [],
            offertype:'',
            workshopservice:[],
            
        }
    },
    mounted() {
        this.baseService()
        this.baseSubs();
        this.offertype =localStorage.getItem('offertipes');
        
    },
    methods: {
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
        Redirect(link) {
            this.$router.push(link)
        },
        transformDate(z) {
            if (z === null) {
                return 'Sin fecha';
            } else {
                const f = new Date(z)
                let dia = f.getDate();
                let mes = f.getMonth()+1;
                let ano= f.getFullYear();
                return dia+'/'+mes+'/'+ano;
            }
        },
        verMas(name, discount, validate, ofertaid) {
            this.ofertas.push({
                nombre: name,
                descuento: discount,
                valides: validate,
                id:ofertaid
            });
            localStorage.setItem('offer', JSON.stringify(this.ofertas))
                        
            for (let a in this.subs) {
                
                this.servicios.push({
                    nombreservicio: this.subs[a].workshop_office_service_name,
                    offer_id: this.subs[a].offer_id,
                    nombreplan: this.subs[a].name
                })
                
                localStorage.setItem('servicios', JSON.stringify(this.servicios))
                
            }
            this.$router.push('ShowOffer')
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
        },
        validar(){
           
            for (let sub in this.subs) {
                
                if (this.subs[sub].offer_id === 1) {
                    this.subs.splice(sub, 1)

                }
            }
            return this.subs
        },
        validar2(){
            
            for (let sub in this.service) {
                
                if (this.service[sub].offer_id === 1) {
                    this.service.splice(sub, 1)

                }
               
                              
            }
            for(let g in this.service){
                for(let h in this.workshopservice){
                    if(this.service[g].offer_name==this.workshopservice[h].offer_name && this.service[g].id != this.workshopservice[h].id)
                    this.service.splice(g,1)
                }
            }
           
            return this.service
        },
        async baseService() {
            let dos = await axios.post('http://localhost:8080/WorkshopOfficeServiceList', {
                headers: {
                    'Content-type': 'application/json'
                },
                data: {
                    workshop_office_id: sessionStorage.getItem('workshop_office_id'),
                },

            }).
            then(response => (this.workshopservice = response.data.response, this.service=response.data.response))
            .
            catch(function (error) {
                console.log(error)
            })

        }
        
    }
}