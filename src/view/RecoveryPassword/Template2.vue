<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
<h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Recuperar contraseña</h1>
  <div class="bg-base-200 flex justify-center">
    <div class=" mt-6 mb-10" style="width: 45%">
      <span class="label-text"
        >Si la dirección de correo electrónico ingresada coincide con tu
        usuario, te enviaremos un código.</span
      >
      <form @submit.prevent>
        <div class="form-control mt-6">
          <label class="label">
            <span class="label-text">Codigo de verificacion </span>
          </label>
          <input
            type="number"
            class="input input-bordered"
            id="txtCode"
            required
          />
          <button
            @click="verifyCode()"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Enviar codigo
          </button>
        </div>
      </form>
    </div>
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
function verifyCode() {
  if(txtCode.value.trim().length == 0){
    alert('debe rellenar el campo codigo de verificación')
    return
  }
  axios
    .post("http://localhost:8080/SendCode", {
      headers: { "Content-type": "application/json" },
      data: { user_email: sessionStorage.getItem('user_email'), recovery_code: txtCode.value }
    })
    .then(function (res) {
      switch (res.data.Response) {
        case 'Checked Code Success':
          sessionStorage.setItem('user_rut', res.data.user_rut)
          router.push("/RecoveryPassword3");
          break
        case 'Operation Failed':
          alert('Has ingresado el codigo incorrectamente')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>


