import axios from "axios"
export default {
    data() {
        return {
            officeWorkId: null,
            userType: '',
            list: null,
            milestone: null,
            estado: '',
            contador: 0,
            completo: null,
            completeWorkshopOfficeWork: null,
            status:null,
            nombreservicio:null
        }
    },
    computed: {


    },
    created() {
       
    },
    beforeMount(){
        this.status= sessionStorage.getItem('status')
        this.officeWorkId = sessionStorage.getItem('workshopofficeid')
        this.nombreservicio= sessionStorage.getItem('nombreservicio')
        if (this.officeWorkId == null || this.officeWorkId == 'null') {
            this.$router.push('WorkshopOfficeWorkList')
        } else {
            this.userType = sessionStorage.getItem("user_type_id");
            this.estado = sessionStorage.getItem('status')
            this.obtenerDatos()
        this.bd()

        }
    },
    mounted() {

        
        

    },
    methods: {
        agregarAvance() {
            this.$router.push('AddWorkshopOfficeWorkAdvance')
        },
        botonComprobarCliente(){
            this.$router.push('CompleteWorkshopOfficeWork')
        },
        botonFicha(idi) {
            sessionStorage.setItem('mileston_id', idi)
            this.$router.push('AddWorkshopOfficeWorkTechnicalReport')
        },
        botonFin(id) {
            let a = confirm('¿Estas seguro de informar el retiro del vehículo?\n Procura que el trabajo en el vehículo esté terminado antes de informar al cliente que ya puede venir a retirarlo')
            if (a) {
                this.bdComplete(id)
                this.$router.go()
            }

        },
        confirmRetiro(id) {
            let a = confirm('¿Estas seguro de confirmar que el cliente ha retIrado su vehículo?')
            if (a) {
                this.bdComplete(id)
                this.$router.go()
            }
        },
        confirmFin() {
            let a = confirm('¿Estas seguro de confirmar la finalización del servicio?\nAl confirmar la finalización del servicio, luego se solicitara la confirmación por parte del cliente también.')
            if (a) {
                this.bdCompleteWorkshopOfficeWork()
                window.location="WorkshopOfficeWorkList"
                
            }
        },
        verFicha() {
            this.$router.push('WorkshopOfficeWorkTechnicalReport')
        },
        async bdCompleteWorkshopOfficeWork() {
            axios.post("http://localhost:8080/CompleteWorkshopOfficeWork", {
                headers: {
                    "Content-type": "application/json"
                },
                data: {
                    id: this.officeWorkId,
                    workshop_office_work_actual_status: this.status
                }
            })
                .then(response => (this.completeWorkshopOfficeWork = response.data.CompleteWorkshopOfficeWork) )
                
                .catch(function (error) {
                    console.log(error)
                })
                console.log(this.status)
                

        },
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
            if (a=='confirmcompletiontechnician'){
                return 'Esperando termino'
            }
            return a;
        },
        evaluarServicio(){
            this.$router.push('AddWorkshopOfficeEvaluation')
        },
        boton(milestoneid) {
            event.preventDefault
            let r = confirm('¿Estás seguro de confirmar la recepción del vehículo?');

            if (r == true) {
                console.log(milestoneid)
                this.bdComplete(milestoneid)
                this.$router.go()
            }
        },
        index() {
            this.contador = this.contador + 1
            return this.contador;
        },
        async bdComplete(id) {
            axios.post("http://localhost:8080/CompleteWorkshopOfficeWorkMilestone", {
                headers: {
                    "Content-type": "application/json"
                },
                data: {
                    workshop_office_work_milestone_id: id,
                    workshop_office_work_id: this.officeWorkId
                }
            })
                .then(response => (this.completo = response.data.CompleteWorkshopOfficeWorkMilestone))

                .catch(function (error) {
                    console.log(error)
                })
        }
    }
}