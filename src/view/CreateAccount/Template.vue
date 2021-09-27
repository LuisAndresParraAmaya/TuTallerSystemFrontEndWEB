<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Crear Cuenta</h1>
      <form class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nombre</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="thename"
            required
          />

          <label class="label">
            <span class="label-text">Apellido</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="lastname"
            required
          />

          <label class="label">
            <span class="label-text">Rut</span>
          </label>
          <input type="text" class="input input-bordered" id="rut" required />

          <label class="label">
            <span class="label-text">Correo electrónico</span>
          </label>
          <input type="text" class="input input-bordered" id="email" required />

          <label class="label">
            <span class="label-text">Telefono</span>
          </label>
          <input type="text" class="input input-bordered" id="phone" required />

          <label class="label">
            <span class="label-text">Contraseña</span>
          </label>
          <input
            type="password"
            class="input input-bordered"
            id="pass"
            required
          />

          <label class="label">
            <span class="label-text">Confirmar contraseña</span>
          </label>
          <input
            type="password"
            class="input input-bordered"
            id="pass2"
            required
          />

          <button
            @click="createAccount()"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const createAccount = () => {
  axios
    .post("http://localhost:8080/CreateAccount", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_rut: rut.value,
        user_type_id: 2,
        user_name: thename.value,
        user_last_name: lastname.value,
        user_email: email.value,
        user_phone: phone.value,
        user_password: pass.value,
        user_status: "enabled",
      },
    })
    .then(function (response) {
      console.log(response);
      router.push("/Login");
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>