import axios from "axios"
export default {

    data() {
        return {

            imagen: null,
            upimagen:null,
            descripcion:'',
            officeWorkId:null,
            list:null
        }

    },
    mounted() {
        this.officeWorkId = sessionStorage.getItem('workshopofficeid')
    },
    methods: {

        cargarImagen(e) {
            this.upimagen=e.target.files[0]
            console.log(this.upimagen)
            var file = e.target.files[0]
            var reader = new FileReader()
            var that = this
            reader.readAsDataURL(file)
            reader.onload = function (e) {
                that.imagen = this.result
            }
        },
        subirs(){
            event.preventDefault()
            
            if(this.descripcion.trim()==''){
                alert('debes completar el campo descripción')
                return;
            }else{
                if(this.upimagen==null){
                    alert('debes cargar una imagen')
                }else{
                   if(this.upimagen.type=='image/jpeg' || this.upimagen.type=='image/png' || this.upimagen.type=='image/jpeg'){
                       console.log(this.upimagen.size)
                       if(this.upimagen.name.length>45){
                        alert('El nombre del archivo debe contener menos de 45 caracteres')
                       }else{
                           if(this.upimagen.size<=5242880){
                            this.obtenerDatos()
                            this.$router.replace(window.location="WorkshopOfficeWork")
                            
                            
                           }else{
                               alert('Tamaño de archivo no valido. Debe ser inferior a 5MB')
                           }
                       }
                   }else{
                    alert('la imagen debe tener formato jpg, png, jpeg')
                    return;
                   }
                }
            }
        },
        async obtenerDatos() {
            console.log(this.upimagen)
            let formData= new FormData()
            const headers= {
                "Content-type": `multipart/form-data; boundary=${formData._boundary}`,
            };
            formData.append("workshop_office_work_id", this.officeWorkId);
            formData.append("workshop_office_service_advance_description",this.descripcion);
            formData.append("file", this.upimagen);
            axios.post("http://localhost:8080/AddWorkshopOfficeWorkAdvance",
                    formData,
                    {headers: headers}

                )
                .then(response => (this.list = response.data.AddWorkshopOfficeWorkAdvance))

                .catch(function (error) {
                    console.log(error)
                })
            }


    }

}