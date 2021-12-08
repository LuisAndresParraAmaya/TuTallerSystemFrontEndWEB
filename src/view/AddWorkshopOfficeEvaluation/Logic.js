import axios from "axios"
export default {

    data() {
        return {
            select:null,
            reseña:null,
            completo:null,
            officeWorkId: null,
            userRut:null,
            officeid:null
        }

    },
    mounted() {
        this.officeWorkId = sessionStorage.getItem('workshopofficeid')
        this.userRut= sessionStorage.getItem('user_rut')
        this.officeid=sessionStorage.getItem('workshop_office_id')
        
    },
    methods: {
        enviar(){
            event.preventDefault()
            if(this.select==''|| this.select==null || this.select=='null'){
                alert('Ingresa una calificación')
                return;
            }else{
                if(this.reseña.trim()=='' || this.reseña==null || this.reseña=='null'){
                    alert('Ingresa una reseña')
                    return;
                }else{
                    this.bdFin()
                    sessionStorage.setItem('status','completeandevaluated')
                    this.$router.replace('WorkshopOfficeWork')
                }
            }
        },
        async bdFin() {
            axios.post("http://localhost:8080/AddWorkshopOfficeEvaluation", {
                headers: {
                    "Content-type": "application/json"
                },
                data: {
                    workshop_evaluation_rating:this.select,
                    workshop_evaluation_review:this.reseña,
                    workshop_office_id:this.officeid,
                    user_user_rut: this.userRut,
                    workshop_office_work_id: this.officeWorkId

                }
            })
                .then(response => (this.completo = response.data.AddWorkshopOfficeEvaluation))

                .catch(function (error) {
                    console.log(error)
                })
        }
    }
}