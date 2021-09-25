<template>
  <div class="grid grid-cols-3 content-center text-center">
    <div></div>
    <div class="form-control">
      <h1>Modificar Perfil</h1>
      <label class="label">
        <span class="label-text">Nombre</span>
      </label>
      <input
        type="text"
        placeholder="Nombre"
        class="input input-bordered"
        id="txtName"
      />
      <label class="label">
        <span class="label-text">Apellido</span>
      </label>
      <input
        type="text"
        placeholder="Apellido"
        class="input input-bordered"
        id="txtLastname"
      />
      <label class="label">
        <span class="label-text">Rut</span>
      </label>
      <input
        type="text"
        placeholder="Rut"
        class="input input-bordered"
        id="txtNewRut"
      />
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input
        type="text"
        placeholder="Email"
        class="input input-bordered"
        id="txtEmail"
      />
      <label class="label">
        <span class="label-text">Telefono</span>
      </label>
      <input
        type="text"
        placeholder="Telefono"
        class="input input-bordered"
        id="txtPhone"
      />
      <button class="w-full px-8 py-3 rounded-md btn text-coolGray-50"
        @click="goToChangePassword()"
      >
        Cambiar Contraseña
      </button>
      <button
        class="w-full px-8 py-3 rounded-md btn text-coolGray-50"
        @click="goToDeleteAccount()"
      >
        Borrar Cuenta
      </button>
      <button
        @click="modifyProfile()"
        class="w-full px-8 py-3 rounded-md btn text-coolGray-50"
      >
        Actualizar Datos
      </button>
    </div>

    <div></div>
  </div>
</template>

<style src="./Style.css"></style>
<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
import axios from "axios"
import { isAuthenticated } from "../../helpers/userAuth.js";
function modifyProfile(){
  axios
    .post("http://localhost:8080/ModifyProfile", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_name: txtName.value,
        user_last_name: txtLastname.value,
        user_email: txtEmail.value,
        user_phone: txtPhone.value,
        user_rut: sessionStorage.getItem("user_rut"),
        user_new_rut: txtNewRut.value,
      },
    })
    .then(function (response) {
      sessionStorage.setItem("user_rut", response.data.user_new_rut)
      if (response.data.user_new_rut != undefined) {
        alert("Sus datos fueron actualizados correctamente");
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

function goToDeleteAccount() {
  isAuthenticated.value = true;
  router.push("/DeleteAccount");
}

function goToChangePassword(){
  isAuthenticated.value = true;
  router.push("/ChangePassword");
}
</script>

