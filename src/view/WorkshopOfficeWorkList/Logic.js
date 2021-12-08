import axios from "axios"
export default{
data(){
    return{
        userRut:'',
        userType:'',
        list:null
    }
},
mounted(){
this.userRut=sessionStorage.getItem("user_rut");
this.userType=sessionStorage.getItem("user_type_id");
this.obtenerDatos()
},
methods:{
    async obtenerDatos(){
        
        axios.post("http://localhost:8080/WorkshopOfficeWorkList", {
                headers: {
                    "Content-type": "application/json"
                },
                data:{
                    user_rut: this.userRut
                }
            })
            .then(response => (this.list = response.data.WorkshopOfficeWorkList))

            .catch(function (error) {
                console.log(error)
            })
    },
    traductor(a){
        if(a==='working'){
            return 'En progreso'
        }
        if (a=='confirmcompletiontechnician'){
            return 'Esperando termino'
        }
        if (a=='confirmcompletioncustomer'){
            return 'Finalizado'
        }
        
        if (a=='completeandevaluated'){
            return 'Finalizado y evaluado'
        }
        return a;
    },
    boton(id, status, nombreservicio){

        sessionStorage.setItem('workshopofficeid',id)
        sessionStorage.setItem('status',status)
        sessionStorage.setItem('nombreservicio',nombreservicio)
        this.$router.push('WorkshopOfficeWork')
    }
}
}
