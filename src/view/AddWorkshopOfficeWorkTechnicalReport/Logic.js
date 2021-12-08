import axios from "axios"
export default {

    data() {
        return {

            marca: '',
            modelo: '',
            kms: '',
            ppu: '',
            combustible: '',
            color: '',
            motor: '',
            chasis: '',
            descripcion: '',
            tech: null,
            officeWorkId: null,
            milestoneIdi:null,
            completo:null
        }

    },
    mounted() {
        this.milestoneIdi= sessionStorage.getItem('mileston_id')
        this.officeWorkId = sessionStorage.getItem('workshopofficeid')
        if (this.officeWorkId == null || this.officeWorkId == 'null' || this.milestoneIdi==null || this.milestoneIdi=='null') {
            this.$router.push('WorkshopOfficeWorkList')
        }
    },
    methods: {
        bdTechnicalReport() {
            axios.post("http://localhost:8080/AddWorkshopOfficeWorkTechnicalReport", {
                    headers: {
                        "Content-type": "application/json"
                    },
                    data: {
                        workshop_office_work_id: this.officeWorkId,
                        office_work_technical_report_km:this.kms,
                        office_work_technical_report_ppu:this.ppu,
                        office_work_technical_report_fuel_type:this.combustible,
                        office_work_technical_report_color:this.color,
                        office_work_technical_report_engine:this.motor,
                        office_work_technical_report_model:this.modelo,
                        office_work_technical_report_brand:this.marca,
                        office_work_technical_report_chassis:this.chasis,
                        office_work_technical_report_description:this.descripcion

                    }
                })
                .then(response => (this.tech = response.data.AddWorkshopOfficeWorkTechnicalReport))

                .catch(function (error) {
                    console.log(error)
                })
        },
        botonft() {
            event.preventDefault()
            
            if (this.marca.trim() == '') {
                alert('Debes completar el campo marca')
                return;
            } else {
                if (this.modelo.trim() == '') {
                    alert('Debes completar el campo modelo')
                    return;
                }else{
                    if(this.kms<=0){
                        alert('El campo kilometraje debe ser mayor a "0"')
                    return;
                    }else{
                        if(this.ppu.trim()==''){
                            alert('Debes completar el campo ppu')
                        return;
                        }else{
                            
                            if(this.combustible.trim()==''){
                                alert('Debes completar el campo combustible')
                            return;
                            }else{
                                if(this.color.trim()==''){
                                    alert('Debes completar el campo color')
                                return;
                                }else{
                                    if(this.motor.trim()==''){
                                        alert('Debes completar el campo motor')
                                    return;
                                    }else{
                                        if(this.chasis.trim()==''){
                                            alert('Debes completar el campo chasis')
                                        return;
                                        }else{
                                            if(this.descripcion.trim()==''){
                                                alert('Debes completar el campo descripción')
                                            return;
                                            }else{
                                                this.bdTechnicalReport();
                                                this.bdComplete();
                                                this.$router.replace(window.location="WorkshopOfficeWork")
                                                
                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        async bdComplete() {
            axios.post("http://localhost:8080/CompleteWorkshopOfficeWorkMilestone", {
                    headers: {
                        "Content-type": "application/json"
                    },
                    data: {
                        workshop_office_work_milestone_id:this.milestoneIdi,
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