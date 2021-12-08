import axios from "axios"
import { RouterLink } from "vue-router";

export default {
    data() {
        return {
            recibido: null,
            bd: [],
            servicios: null,
            checkboxes: [],
            datobutton: '',
            subs: null,
            state: 0



        }
    },

    mounted() {
        this.base();
        this.baseSubs();
        this.recibirDatos();
        this.datobutton = localStorage.getItem('offertipes');


    },
    methods: {
        recibirDatos() {
            let a = JSON.parse(localStorage.getItem('agregaroferta'));
            console.log(a)
            if (a === null) {
                a = [];
            } else {


                this.recibido = a;

            }
        },
        traductor(a) {
            if (a === 'basic') {
                return 'Plan Basico'
            }
            if (a === 'monthly') {
                a = 'Mensual'
                return a;
            }
            return a;
        },
        async conexionActivateOffer(check) {
            event.preventDefault()
            if (Object.entries(check).length === 0) {
                alert('Debe seleccionar al menos un servicio')
                return;
            }
           var r= confirm('¿Estas seguro de activar tu oferta?\n Al activarla, los usuarios empezarán a obtener automáticamente un descuento  al adquirir alguno de los ítems a los que has asignado tu oferta')

            if (r===true) {
                let dos = await axios.post('http://localhost:8080/ActivateOffer', {
                    headers: {
                        'Content-type': 'application/json'
                    },
                    data: {
                        offer: this.recibido[0],
                        offer_item_id_list: check

                    },

                }).then(function (res) {
                    if (res.data.Response == 'Operation Success') {
                        console.log('nice')
                        alert('Oferta agregada correctamente');
                        
                        
                    }
                    if (res.data.Response == 'One of the offers are already activated') {
                        alert("fail")
                    }
                    

                })
                .catch(function (error) {
                    console.log(error)
                })
                this.$router.push("OfferList");
            }else{
                return
            }




            // .then(response => (this.bd = response.data.response))


            




        },
        async base() {
            let dos = await axios.post('http://localhost:8080/WorkshopOfficeServiceList', {
                headers: {
                    'Content-type': 'application/json'
                },
                data: {
                    workshop_office_id: sessionStorage.getItem('workshop_office_id'),
                },

            }).
            then(response => (this.servicios = response.data.response)).
            catch(function (error) {
                console.log(error)
            })




        },
        baseSubs() {
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