import {
  isAuthenticated
} from "../helpers/userAuth"
export default {

  mounted() {
    this.userType = sessionStorage.getItem("user_type_id")
    if(this.userType==1||this.userType==2||this.userType==3||this.userType==4){
      isAuthenticated.value=true
    }
  },
  setup() {
    //Methods:

    function NavigateToRoute(route) {
      if (isAuthenticated.value == true) {
        this.$router.push({
          name: route
        })
      }
    }

    function getShow() {
      if (sessionStorage.getItem('user_type_id') == 1) {
        return true
      } else {
        return false
      }


    }
    return {
      isAuthenticated,
      NavigateToRoute,
      getShow
    }
  },
  name: "pink-navbar",
  data() {
    return {
      showMenu: false,
      userType: ''
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
    logout() {
      isAuthenticated.value = false
      sessionStorage.setItem("user_rut", null);
      sessionStorage.setItem("user_name", null);
      sessionStorage.setItem("user_last_name", null);
      sessionStorage.setItem("user_phone", null);
      sessionStorage.setItem("user_email", null);
      sessionStorage.setItem("user_password", null);
      sessionStorage.setItem("user_type_id", null);
      sessionStorage.setItem('workshop_id',null);
      sessionStorage.setItem('workshop_office_region',null)
      sessionStorage.setItem('workshop_name',null)
      sessionStorage.setItem('workshop_office_commune',null)
      sessionStorage.setItem('workshop_office_address',null)
      sessionStorage.setItem('workshopofficeid',null)
      this.$router.push('/Login')
    },
    navegarTrue(a) {
      if (isAuthenticated.value == true) {
        this.$router.push(a)
      }
    },
    navegarFalse(a) {
      this.$router.push(a)
    },
    show() {

      let a = this.userType

      if (a == '1' || a == '2' || a == '3') {
        return true;

      } else {
        return false
      }
    }

  }
}