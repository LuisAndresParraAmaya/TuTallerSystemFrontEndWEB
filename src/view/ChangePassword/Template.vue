<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Modificar Contraseña</h1>
      <form @submit.prevent class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nueva contraseña </span>
          </label>
          <input
            type="pass"
            class="input input-bordered"
            id="txtPass"
            required
          />
          <label class="label">
            <span class="label-text">Confirmar nueva contraseña </span>
          </label>
          <input
            type="pass"
            class="input input-bordered"
            id="txtConfirmpass"
            required
          />

          <button
            @click="changePassword()"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Restablecer contraseña
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
import axios from "axios"
import { isAuthenticated } from "../../helpers/userAuth.js";
function changePassword(){
  axios
    .post("http://localhost:8080/ModifyPassword", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_rut: sessionStorage.getItem('user_rut'),
        user_password: txtPass.value
      },
    })
    .then(function (response) {
      if(response.data.Response == 'Operation Success'){
        alert("Tu contraseña fue actualizada correctamente");
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}
</script>


