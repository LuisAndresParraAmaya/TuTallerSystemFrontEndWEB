import axios from 'axios'
import { isAuthenticated } from "../../helpers/userAuth"
export default {
  name: 'Login',
  setup() {
    let statusLogin = false
    //Methods:
    async function login() {
      await axios.post("http://localhost:8080/Login", {
          headers: { "Content-type": "application/json" },
          data: { user_email: email.value, user_password: pass.value },
        }).then(function (res) {
          if(res.data.Response == 'Login Success'){
            sessionStorage.setItem("user_rut", res.data.user_rut);
            statusLogin = true
          }else{
            alert("Autentificación fallida, comprueba tu dirección de correo electronico o contraseña")
          }
        }).catch(function (error) {
          console.log(error);
        });
        if(statusLogin == true){
          isAuthenticated.value = true;
          this.$router.push({ path: '/' })
        }
    }
    //Using:
    return { login }
  }
}