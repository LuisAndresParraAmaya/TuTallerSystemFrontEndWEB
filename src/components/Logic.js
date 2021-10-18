import { isAuthenticated } from "../helpers/userAuth"
export default {
  setup() {
    //Methods:
    function logout() {
      isAuthenticated.value = false
      this.$router.push({path: '/'})
    }
    function NavigateToRoute(route) {
      if(isAuthenticated.value == true){
        this.$router.push({ name: route })
      }
    }
    function getShow(){
      if(sessionStorage.getItem('user_type_id')  == 1){
        return true
      }else{
        return false
      }
      
      
    }
    return { logout, isAuthenticated, NavigateToRoute, getShow }
  }
}