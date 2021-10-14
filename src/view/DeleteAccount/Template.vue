<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
<h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Eliminar Cuenta</h1>
  <div class="bg-base-200 flex justify-center">
    <form
      @submit.prevent
      class=" ng-untouched ng-pristine ng-valid mt-6"
    >
      <label class="label">
        <span class="label-text">Contraseña Actual</span>
      </label>
      <input type="text" class="input input-bordered w-full" id="txtPassword" />
      <label class="label">
        <span class="label-text">Confirmar Contraseña</span>
      </label>
      <input type="text" class="input input-bordered w-full" id="txtConfirmPassword" />

      <button class="w-full px-8 mt-8 mb-10 mx-auto rounded-md btn text-coolGray-50"
        @click="disableAccount()" >
        Desactivar Cuenta
      </button>
    </form>
  </div>
  </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
import { onMounted } from "@vue/runtime-core";
import { isAuthenticated } from "../../helpers/userAuth";
onMounted(function(){
  isAuthenticated.value = true;
})
function disableAccount() {
  if(txtPassword.value.trim().length == 0){
    alert("Debes rellenar el campo contraseña actual");
    return
  }
  if(txtConfirmPassword.value.trim().length == 0){
    alert("Debes rellenar el campo confirmar contraseña");
    return
  }
  if(txtConfirmPassword.value !== txtPassword.value){
    alert("Las contraseñas no coinciden");
    return
  }
  axios
    .post("http://localhost:8080/DisableAccount", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_rut: sessionStorage.getItem('user_rut'),
        user_password: txtPassword.value,
      },
    })
    .then(function (response) {
      if (response.data.Response == "Operation Success") {
        isAuthenticated.value = false
        alert("Su cuenta ha sido deshabilitada satisfactoriamente, tiene 30 dias para volver a iniciar sesión y reactivarla");
        router.push("/Login")
      }
      if(response.data.Response == 'Actual Password Failed'){
        alert("La contraseña actual ingresada no coincide");
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}
</script>



