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
    return { logout, isAuthenticated, NavigateToRoute }
  }
}