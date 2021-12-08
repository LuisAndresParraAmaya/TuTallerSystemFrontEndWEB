import axios from "axios"
import {
    subscriptionNameEnglishToSpanish
} from "../../utils/translations"
export default {

    data() {
        return {
           
            fichas: null,
            id:null
        }
    },
    mounted() {
        this.id=sessionStorage.getItem('workshopofficeid')
        this.base();
        
    },
    methods: {
        
        
        async base() {
            await axios.post('http://localhost:8080/WorkshopOfficeWorkTechnicalReport', {
                headers: {
                    'Content-type': 'application/json'
                },
                data: {
                    workshop_office_work_id: this.id
                },

            }).
            then(response => (this.fichas = response.data.WorkshopOfficeWorkTechnicalReport)).
            catch(function (error) {
                console.log(error)
            })

        }



    }
}