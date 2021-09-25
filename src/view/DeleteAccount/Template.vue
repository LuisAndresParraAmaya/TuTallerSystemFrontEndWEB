<template>
  <div class="grid grid-cols-3 content-center text-center">
    <div></div>
    <form
      @submit.prevent
      class="space-y-12 ng-untouched ng-pristine ng-valid mt-12"
    >
      <h1>Eliminar Cuenta</h1>
      <label class="label">
        <span class="label-text">Contraseña Actual</span>
      </label>
      <input type="text" class="input input-bordered" id="txtPassword" />
      <label class="label">
        <span class="label-text">Confirmar Contraseña</span>
      </label>
      <input type="text" class="input input-bordered" id="txtConfirmPassword" />

      <button class="w-full px-8 py-3 mx-auto rounded-md btn text-coolGray-50"
        @click="disableAccount()" >
        Desactivar Cuenta
      </button>
    </form>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
function disableAccount() {
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
      console.log(response)
      if (response.data.Response == "Operation Success") {
        alert("Su cuenta ha sido deshabilitada satisfactoriamente, tiene 30 dias para volver a iniciar sesión y reactivarla");
        // isAuthenticated.value = false
        router.push("/")
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}
</script>



