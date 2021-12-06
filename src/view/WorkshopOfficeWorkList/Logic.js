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
        return a;
    },
    boton(id, status){

        sessionStorage.setItem('workshopofficeid',id)
        sessionStorage.setItem('status',status)
        this.$router.push('WorkshopOfficeWork')
    }
}
}