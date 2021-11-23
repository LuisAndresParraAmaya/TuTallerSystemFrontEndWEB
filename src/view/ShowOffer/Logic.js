import axios from "axios"
import {
    subscriptionNameEnglishToSpanish
} from "../../utils/translations"
export default {

    data() {
        return {
            subs: [],
            ofertas: [],
            servicios: [],
            datobutton: '',
            workshopservice:[]

        }
    },
    mounted() {
        this.arreglo()
        this.arregloServicio()
        this.base();
        this.datobutton = localStorage.getItem('offertipes')
    },
    methods: {
        traductor(a) {
            subscriptionNameEnglishToSpanish(a)
            return a;
        },
        transformDate(z) {
            if (z === null) {
                return 'Sin fecha';
            } else {
                const f = new Date(z)
                let fecha = '' + f.getDate();
                return fecha;
            }
        },
        arreglo() {
            let arreglo = JSON.parse(localStorage.getItem('offer'));

            if (arreglo === null) {
                this.ofertas = [];
            } else {
                this.ofertas = arreglo;
            }
            for (let f in this.ofertas) {
                let fecha = new Date(this.ofertas[f].valides)
                let ano = fecha.getFullYear();
                let dia = fecha.getDate();
                let mes = fecha.getMonth() + 1;
                this.ofertas[f].valides = dia + '/' + mes + '/' + ano;
            }

        },
        arregloServicio() {
            let arregloservicios = JSON.parse(localStorage.getItem('servicios'));
            if (arregloservicios === null) {
                this.servicios = [];
            } else {
                this.servicios = arregloservicios;
            }
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
            then(response => (this.workshopservice = response.data.response)).
            catch(function (error) {
                console.log(error)
            })

        }



    }
}