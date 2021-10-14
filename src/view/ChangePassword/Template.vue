<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
<h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Modificar Contraseña</h1>
  <div class="bg-base-200 flex justify-center">
    <div>
      <form @submit.prevent class="mt-6 mb-10">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nueva contraseña </span>
          </label>
          <input
            type="password"
            class="input input-bordered"
            id="txtPass"
            required
          />
          <label class="label">
            <span class="label-text">Confirmar nueva contraseña </span>
          </label>
          <input
            type="password"
            class="input input-bordered"
            id="txtConfirmpass"
            required
          />
          <label class="label">
            <span class="label-text">Contraseña actual</span>
          </label>
          <input
            type="password"
            class="input input-bordered"
            id="txtCurrentPass"
            required
          />
          <button
            @click="changePassword()"
            class="w-full px-8 rounded-md btn text-coolGray-50 mt-5"
          >
            Restablecer contraseña
          </button>
        </div>
      </form>
  </div>
  </div>
  </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
import axios from "axios"
import { onMounted } from "@vue/runtime-core";
import { isAuthenticated } from "../../helpers/userAuth";
onMounted(function(){
  console.log("MONTADO")
  isAuthenticated.value = true;
})
function changePassword(){
  if(txtPass.value.trim().length == 0){
    alert("Debes ingresar una nueva contraseña");
    return
  }else{
    if(txtConfirmpass.value.trim().length == 0){
      alert("Debes rellenar el campo confirmar nueva contraseña");
      return
    }else{
      if(txtConfirmpass.value !== txtPass.value){
        alert("Las nuevas contraseñas ingresadas no coinciden");
      return
      }
    }

  }
  if(txtCurrentPass.value.trim().length == 0){
    alert("Debes rellenar el campo contraseña actual");
    return
  }

  axios
    .post("http://localhost:8080/ModifyPassword", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_rut: sessionStorage.getItem('user_rut'),
        user_password: txtCurrentPass.value,
        user_new_password: txtPass.value
      },
    })
    .then(function (response) {
      if(response.data.Response == 'Operation Success'){
        alert("Tu contraseña fue actualizada correctamente");
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


