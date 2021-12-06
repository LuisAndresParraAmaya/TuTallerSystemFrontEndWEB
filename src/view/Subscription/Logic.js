export default{
    data(){
        return{
            recibido:[]
        }
    },
    mounted(){
        this.recibido= JSON.parse(localStorage.getItem('suscripcionplan'));
    },
    methods:{
        traductor(a){
            if(a==='basic'){
                return 'Plan Basico'
                
            }
            if(a==='monthly'){
                return 'Mensual'
                
            }
            return a
            
        }
    }
}