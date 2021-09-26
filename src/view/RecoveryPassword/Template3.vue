<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Recuperar contraseña</h1>
      <form @submit.prevent class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Introducir nueva contraseña </span>
          </label>
          <input type="password" class="input input-bordered" id="txtNewpass" required/>
          <label class="label">
            <span class="label-text">Confirmar nueva contraseña </span>
          </label>
          <input type="password" class="input input-bordered" id="txtConfirmnewpass" required/>
          <button
            @click="modifyPassword()"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Enviar codigo
          </button>
        </div>
      </form>
    </div>
    <div></div>
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
  if(txtNewpass.value !== txtConfirmnewpass.value){
    alert('Las contraseñas no coinciden')
    return
  }
  axios
    .post("http://localhost:8080/ModifyPassword", {
      headers: { "Content-type": "application/json" },
      data: { user_rut: sessionStorage.getItem('user_rut'), user_password: txtNewpass.value }
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