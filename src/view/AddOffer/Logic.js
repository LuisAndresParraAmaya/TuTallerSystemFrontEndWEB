export default {

    data() {
        return {
            nombreoferta: '',
            descuento: '',
            fecha: '',
            hora: '',
            datos: [],
            datobutton: ''
        }

    },
    methods: {

        transformDate(z) {
            if (z === null) {
                return 'Sin fecha';
            } else {
                const f = new Date(z)
                let dia = f.getUTCDate();
                let mes = f.getUTCMonth() + 1;
                let ano = f.getUTCFullYear();
                return dia + '/' + mes + '/' + ano;
            }
        },
        enviar() {
            event.preventDefault()
            if (this.nombreoferta.trim() === '') {
                alert("Debe completar el campo Nombre Oferta");
                return;
            } else {
                if (this.descuento === '') {
                    alert("Debe completar el campo Descuento");
                    return;
                } else {
                    console.log(this.descuento)
                    if (this.descuento < 1 || this.descuento > 100) {
                        alert("Descuento debe ser entre 1 y 100");
                        return;
                    } else {
                        if (this.fecha === '') {
                            alert("Debe completar el campo Fecha de expiración");
                            return;
                        } else {
                            let actual = new Date()
                            let dia = actual.getUTCDate()
                            let mes = actual.getUTCMonth() + 1
                            let ano = actual.getUTCFullYear()
                            let fechaform = new Date(this.fecha)
                            let diaform = fechaform.getUTCDate()
                            let mesform = fechaform.getUTCMonth() + 1
                            let anoform = fechaform.getUTCFullYear()
                            if (anoform < ano) {

                                alert('El campo fecha de expiracion debe ser mayor a la fecha ddddddactual')
                                return

                            } else {
                                if (anoform===ano && mesform===mes && diaform<=dia) {
                                    alert('El campo fecha de expiracion debe ser mayor a la fecha actual')
                                    return
                                } else {
                                    if (this.hora === '') {
                                        alert("Debe completar el campo hora de expiración");
                                        return;
                                    } else {


                                        this.datos.push({
                                            offer_name: this.nombreoferta,
                                            offer_discount: this.descuento,
                                            offer_valid_until_date: this.fecha,
                                            offer_valid_until_time: this.hora,
                                            offer_type: this.datobutton

                                        })
                                        localStorage.setItem('agregaroferta', JSON.stringify(this.datos));
                                        this.$router.push("ActivateOffer");

                                    }
                                }

                            }

                        }
                    }
                }
            }
        }
    },
    mounted() {
        this.datobutton = localStorage.getItem('offertipes');
    }
}