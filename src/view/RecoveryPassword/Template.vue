<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
<h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Recuperar contraseña</h1>
  <div class="bg-base-200 flex justify-center">
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <form @submit.prevent class="mt-4 pb-8">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Correo electronico </span>
          </label>
          <input
            type="email"
            id="txtEmail"
            class="
              w-full
              px-3
              py-2
              border
              rounded-md
              border-coolWhite-300
              bg-coolWhite-50
              text-coolWhite-800
            "
            required
          />
          <button
            v-on:click="sendCode"
            class="w-full px-8 py-3 rounded-md btn text-coolWhite-50 mt-5"
          >
            Restablecer contraseña
          </button>
        </div>
      </form>
    </div>
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
function sendCode() {
  axios
    .post("http://localhost:8080/RecoveryPassword", {
      headers: { "Content-type": "application/json" },
      data: { user_email: txtEmail.value }
    })
    .then(function (res) {
      sessionStorage.setItem('user_email', txtEmail.value)
      router.push("/RecoveryPassword2");
      alert("Si el correo electronico es correcto se enviará una clave para reestablecer su contraseña.")
    });
}
</script>


