<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Recuperar contraseña</h1>
      <form class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Correo electronico </span>
          </label>
          <input
            type="email"
            class="w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    border-coolGray-300
                    bg-coolGray-50
                    text-coolGray-800"
            id="txtEmail"
            required
          />

          <button
            @click="recoveryPassword()"
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
<style src="./Style.css"></style>

<script setup>
import axios from "axios";
const recoveryPassword = () => {
  sessionStorage.setItem("emailRecoveryPass",txtEmail.value)
  console.log(txtEmail.value)
  axios
    .post("http://localhost:8080/RecoveryPassword", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_email: txtEmail.value,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>

