import axios from 'axios'
import { isAuthenticated } from "../../helpers/userAuth"
export default {
  name: 'Login',
  setup() {
    async function login() {
      if(email.value.trim().length == 0){
        alert("debes ingresar tu dirección de correo electronico")
        return
      }
      if(pass.value.trim().length == 0){
        alert("debes ingresar tu contraseña")
        return
      }
      await axios.post("http://localhost:8080/Login", {
          headers: { "Content-type": "application/json" },
          data: { user_email: email.value, user_password: pass.value  },
        }).then(function (res) {
          if(res.data.Response == 'Login Success'){
            sessionStorage.setItem("user_rut", res.data.user_rut);
            sessionStorage.setItem("user_name", res.data.user_name);
            sessionStorage.setItem("user_last_name", res.data.user_last_name);
            sessionStorage.setItem("user_phone", res.data.user_phone);
            sessionStorage.setItem("user_email", res.data.user_email);
            sessionStorage.setItem("user_password", res.data.user_password);
            sessionStorage.setItem("user_type_id", res.data.user_type_id);
            isAuthenticated.value = true;
          }
          if(res.data.Response == 'Account disabled'){
            alert("Su cuenta se encuentra deshabilitada")
          }
          if(res.data.Response == 'Login Failed'){
            alert("Autentificación fallida, comprueba tu dirección de correo electronico o contraseña")
          }
        }).catch(function (error) {
          console.log(error);
        });
        if(isAuthenticated.value == true){
          this.$router.push({ path: '/' })
        }
    }
    //Using:
    return { login }
  }
}