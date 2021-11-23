export default {

    data() {
        return {
            nombreoferta:'',
            descuento:'',
            fecha:'',
            hora:'',
            datos:[],
            datobutton:''
        }

    },
    methods: {
        enviar() {
            if (this.nombreoferta === '') {
                alert("Debe completar el campo Nombre Oferta");
                return;
            } else {
                if (this.descuento === '') {
                    alert("Debe completar el campo Descuento");
                    return;
                } else {
                    console.log(this.descuento)
                    if (this.descuento < 1 || this.descuento> 100) {
                        alert("Descuento debe ser entre 1 y 100");
                        return;
                    } else {
                        if (this.fecha === '') {
                            alert("Debe completar el campo Fecha de expiración");
                            return;
                        } else {
                            if (this.hora === '') {
                                alert("Debe completar el campo hora de expiración");
                                return;
                            } else {
                                
                                
                                this.datos.push({
                                    offer_name:this.nombreoferta,
                                    offer_discount:this.descuento,
                                    offer_valid_until_date:this.fecha,
                                    offer_valid_until_time:this.hora,
                                    offer_type:this.datobutton

                                    })
                                localStorage.setItem('agregaroferta', JSON.stringify(this.datos));
                                this.$router.push("ActivateOffer");

                            }
                        }
                    }
                }
            }
        }
    },
    mounted(){
        this.datobutton =localStorage.getItem('offertipes');
    }
}