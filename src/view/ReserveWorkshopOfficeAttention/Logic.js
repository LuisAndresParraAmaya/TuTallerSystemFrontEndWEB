import axios from "axios"
export default {

    data() {
        return {
            fecha: '',
            hora: '',
            atencion: null,
            wid: null
        }
    },
    mounted() {
        this.wid = sessionStorage.getItem('workshop_id')
        if (this.wid == null || this.wid == 'null') {

            this.$router.push('Home')
        } else {
            this.base();
        }

    },
    methods: {
        reserva() {
            let actual = new Date()
            let dia = actual.getUTCDate()
            let textdia = actual.getUTCDay()
            let mes = actual.getUTCMonth() + 1
            let ano = actual.getUTCFullYear()
            let hor = actual.getHours() + ':' + (actual.getMinutes() < 10 ? '0' : '') + actual.getMinutes();
            let fechaform = new Date(this.fecha)
            let diaform = fechaform.getUTCDate()
            let textdiaform = fechaform.getUTCDay()
            let mesform = fechaform.getUTCMonth() + 1
            let anoform = fechaform.getUTCFullYear()

            if (this.fecha == '') {
                alert('Debe ingresar un fecha')
                return
            } else {
                if (anoform < ano) {

                    alert('La fecha debe ser mayor a la fecha actual')
                    return

                } else {
                    if (anoform < ano) {
                        alert('El campo fecha de expiracion debe ser mayor a la fecha actual')
                        return;
                    }
                    if (mesform < mes && anoform <= ano) {
                        alert('El campo fecha de expiracion debe ser mayor a la fecha actual')
                        return;
                    }
                    if (anoform == ano && mesform == mes && diaform < dia) {
                        alert('El campo fecha de expiracion debe ser mayor a la fecha actual')
                        return;
                    } else {
                        if (this.hora === '') {
                            alert("Debe completar el campo hora de expiración");
                            return;
                        } else {

                            if (anoform == ano && mesform == mes && diaform == dia && this.hora <= hor) {
                                alert('La hora seleccionada debe ser superior a la de hoy.')
                                return;
                            } else {
                                for (let a in this.atencion) {
                                    if (textdiaform == this.dias(this.atencion[a].workshop_office_attention_day)) {
                                        if (this.hora >= this.atencion[a].workshop_office_attention_aperture_time && this.hora <= this.atencion[a].workshop_office_attention_departure_time) {
                                            alert('yes')
                                            return;
                                        } else {
                                            alert('fake')
                                            return;
                                        }

                                    }

                                }

                                alert('Debe ingresar un dia que se enuentre disponible')
                                return;
                            }

                        }
                    }
                }

            }


        },
        async base() {
            let dos = await axios.post('http://localhost:8080/MyWorkshopOfficeAttention', {
                headers: {
                    'Content-type': 'application/json'
                },
                data: {
                    workshop_office_id: this.wid,
                },

            }).
            then(response => (this.atencion = response.data.response)).
            catch(function (error) {
                console.log(error)
            })




        },
        dias(a) {
            if (a == 'domingo') {
                return 0;
            }
            if (a == 'lunes') {
                return 1;
            }
            if (a == 'martes') {
                return 2;
            }
            if (a == 'miercoles') {
                return 3;
            }
            if (a == 'jueves') {
                return 4;
            }
            if (a == 'viernes') {
                return 5;
            }
            if (a == 'sabado') {
                return 6;
            }

        }
    }



}