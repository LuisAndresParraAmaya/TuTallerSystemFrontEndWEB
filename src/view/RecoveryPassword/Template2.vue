<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Recuperar contraseña</h1>
      <form action="">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Codigo de verificacion </span>
          </label>
          <input type="text" class="input input-bordered" id="txtCode" required/>

          <button
            @click="recoveryPassword2()"
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

<style src="./Style.css"></style>
<script setup>
import axios from "axios";
const recoveryPassword2 = () => {
  console.log('hola')
  // axios
  //   .post("http://localhost:8080/RecoveryPassword", {
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     data: {
  //       user_email: txtEmail.value,
  //     },
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};
</script>
