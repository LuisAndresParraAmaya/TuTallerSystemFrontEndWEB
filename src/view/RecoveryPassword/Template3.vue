<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
<h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Recuperar contraseña</h1>
  <div class="bg-base-200 flex justify-center pb-10">
      <form @submit.prevent class="mt-6" style="width: 37%">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Introducir nueva contraseña </span>
          </label>
          <input type="password" class="input input-bordered w-full" id="txtNewpass" required/>
          <label class="label">
            <span class="label-text">Confirmar nueva contraseña </span>
          </label>
          <input type="password" class="input input-bordered w-full" id="txtConfirmnewpass" required/>
          <button
            @click="modifyPassword()"
            class="w-full px-8 rounded-md btn text-coolGray-50 mt-5"
          >
            Enviar codigo
          </button>
        </div>
      </form>
  </div>
  </div>
  </div>
</template>

<!---COMPONENT LOGIC--->

<script setup>
// HTTP Requests
import axios from "axios";
// Navigation
import { useRouter } from "vue-router";
const router = useRouter();
function modifyPassword() {
  if(txtNewpass.value.trim().length == 0){
    alert('Debe rellenar el campo nueva contraseña')
    return
  }
  if(txtConfirmnewpass.value.trim().length == 0){
    alert('Debe rellenar el campo confirmar contraseña')
    return
  }
  if(txtNewpass.value !== txtConfirmnewpass.value){
    alert('Las contraseñas no coinciden')
    return
  }
  axios
    .post("http://localhost:8080/ModifyPassword", {
      headers: { "Content-type": "application/json" },
      data: { user_rut: sessionStorage.getItem('user_rut'), user_new_password: txtNewpass.value }
    })
    .then(function (res) {
      switch (res.data.Response) {
        case 'Operation Success':
          alert('La contraseña ha sido cambiada exitosamente, porfavor vuelve a intentar iniciar sesión')
          router.push("/Login");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>