import axios from "axios"
export default {
    data() {
        return {
            officeWorkId: '',
            userType: '',
            list: null,
            milestone: null,
            estado: '',
            contador:0
        }
    },
    computed: {
        
        
    },
    mounted() {
        this.officeWorkId = sessionStorage.getItem('workshopofficeid')
        this.userType = sessionStorage.getItem("user_type_id");
        this.estado = sessionStorage.getItem('status')
        this.obtenerDatos()
        this.bd()
    },
    methods: {
        async obtenerDatos() {

            axios.post("http://localhost:8080/WorkshopOfficeWorkAdvanceList", {
                    headers: {
                        "Content-type": "application/json"
                    },
                    data: {
                        workshop_office_work_id: this.officeWorkId
                    }
                })
                .then(response => (this.list = response.data.WorkshopOfficeWorkAdvanceList))

                .catch(function (error) {
                    console.log(error)
                })
        },
        async bd() {
            axios.post("http://localhost:8080/WorkshopOfficeWorkMilestoneList", {
                    headers: {
                        "Content-type": "application/json"
                    },
                    data: {
                        workshop_office_work_id: this.officeWorkId
                    }
                })
                .then(response => (this.milestone = response.data.WorkshopOfficeWorkMilestoneList))

                .catch(function (error) {
                    console.log(error)
                })
        },
        traductor(a) {
            if (a === 'working') {
                return 'En progreso'
            }
            return a;
        },
        boton() {
            event.preventDefault
            let r = confirm('¿Estás seguro de confirmar la recepción del vehículo?');

            if(r==true){
                this.router.push('')
            }
        },
        index(){
            this.contador=this.contador+1
            return this.contador;
        }
    },
    watch: {
        
        
    }
}