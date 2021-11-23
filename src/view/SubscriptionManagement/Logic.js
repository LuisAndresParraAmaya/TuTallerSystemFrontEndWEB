export default {

methods:{
    buttonOfertas(){
        localStorage.setItem('offertipes', 'subscriptionPlan')
            this.$router.push('OfferList')
    }
}


}