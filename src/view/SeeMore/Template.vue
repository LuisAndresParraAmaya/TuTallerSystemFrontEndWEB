<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
  <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Taller {{ name }}</h1>
  <div class="bg-base-200">
      <form @submit.prevent style="padding: 5%; margin-left: 23%">
        <div class="flex place-items-center">
          <div class="w-1/4">
            <label class="label">Descripción:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{description}}</label>
          </div>
        </div>
        <div class="flex place-items-center">
          <div class="w-1/4">
            <label class="label">Contacto:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{ contact }}</label>
          </div>
        </div>
        <div class="flex place-items-center">
          <div class="w-1/4">
            <label class="label">Mensaje:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{ message }}</label>
          </div>
        </div>
        <div class="flex place-items-center">
          <div class="w-1/4">
            <label class="label">Estado:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{ status }}</label>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/4">
            <label class="label">Fecha:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{ time }}</label>
          </div>
        </div>
        <div class="flex place-items-center">
        </div>
        <div>
          <button style="width: 30%"
            v-on:click="RejectWorkshopPostulation()"
            class="w-auto rounded-md bg-red-600 btn text-coolGray-50 mt-5"
          >
            Rechazar
          </button>

          <button style="width: 30%; margin-left: 5%"
            v-on:click="AcceptWorkshopPostulation()"
            class="w-auto btn rounded-md bg-green-600 text-coolGray-50 mt-5"
          >
            Aceptar
          </button>
        </div>
      </form>
  </div>
</div>
</div>
</template>
<script>
import { formatDateTime } from '../../utils/formaters';
import { statusEnglishToSpanish } from '../../utils/translations';
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    let { name, status, time, contact, description, message, user_rut, id } =
      route.params;
    if (status == "pending") {
      status = "pendiente";
    }
    async function AcceptWorkshopPostulation() {
      await axios
        .post("http://localhost:8080/AcceptWorkshopPostulation", {
          headers: { "Content-type": "application/json" },
          data: {
            id: id,
            user_rut: user_rut,
          },
        })
        .then((res) => {
          alert("Fue enviado un correo al administrador del taller");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    async function RejectWorkshopPostulation() {
      const response = prompt("Porfavor ingresa la razón del rechazo");
      if(response.trim().length == 0){
        alert("Debes dar una razón de rechazo")
        return
      }
      await axios
        .post("http://localhost:8080/RejectWorkshopPostulation", {
          headers: { "Content-type": "application/json" },
          data: {
            id: id,
            user_rut: user_rut,
            reject_reason: reject_reason.value,
          },
        })
        .then((res) => {
          alert("Fue enviado un correo al administrador del taller");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return {
      name,
      status: statusEnglishToSpanish(status),
      time: formatDateTime(time),
      contact,
      description,
      message,
      AcceptWorkshopPostulation,
      RejectWorkshopPostulation,
      formatDateTime
    };
  },
};
</script>
