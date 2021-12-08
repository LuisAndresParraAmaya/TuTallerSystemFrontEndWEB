import axios from "axios";

export default {
    data() {
        return {
            officeWorkId: null,
            status: null,
            completeWorkshopOfficeWork: null
        }
    },
    mounted() {
        this.status = sessionStorage.getItem('status')
        this.officeWorkId = sessionStorage.getItem('workshopofficeid')

    },
    methods: {
        caso() {

        },
        fin() {
            let a = confirm('¿Estás seguro de confirmar la finalización del servicio?')
            if (a) {
                alert('Servicio finalizado satisfactoriamente\n Ahora puedes evaluar a la sucursal automotrz segun el servicio prestado, la cual nos permitirá mejorar continuamente el listado de sucursales de TuTaller.')

                this.bdCompleteWorkshopOfficeWork()
                sessionStorage.setItem('status','confirmcompletioncustomer')
                this.$router.replace('WorkshopOfficeWork')
               
                


            }else{
                return;
            }
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
                .then(response => (this.completeWorkshopOfficeWork = response.data.CompleteWorkshopOfficeWork))

                .catch(function (error) {
                    console.log(error)
                })


        }
    }
}