<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold text-center mb-20">{{ name }}</h1>
      <form
        @submit.prevent
        class="space-y-12 ng-untouched ng-pristine ng-valid mt-12"
      >
        <div class="form-control">
          <label class="label">
            <span class="label-text">Descripción:</span>
          </label>
          {{ description }}
          <label class="label">
            <span class="label-text">Contacto:</span>
          </label>
          {{ contact }}
          <label class="label">
            <span class="label-text">Mensaje:</span>
          </label>
          {{ message }}
          <label class="label">
            <span class="label-text">Estado:</span>
          </label>
          {{ status }}
          <label class="label">
            <span class="label-text">Fecha:</span>
          </label>
          {{ time }}
          <label class="label">
            <span class="label-text">Razón de rechazo:</span>
          </label>
          <textarea id="reject_reason" style="width: 350px; height: 150px; border: 1px solid black; text-align: start; resize: none">

          </textarea>
          <div class="">
            <button
              v-on:click="RejectWorkshopPostulation()"
              class="w-full rounded-md bg-red-600 btn text-coolGray-50 mt-5"
            >
              Rechazar
            </button>

            <button
              v-on:click="AcceptWorkshopPostulation()"
              class="w-full btn rounded-md bg-green-600 text-coolGray-50 mt-5"
            >
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>
<script>
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
        .then(res => {
          alert("Fue enviado un correo al administrador del taller")
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    async function RejectWorkshopPostulation() {
       await axios
        .post("http://localhost:8080/RejectWorkshopPostulation", {
          headers: { "Content-type": "application/json" },
          data: {
            id: id,
            user_rut: user_rut,
            reject_reason: reject_reason.value
          },
        })
        .then(res => {
          alert("Fue enviado un correo al administrador del taller")
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    return {
      name,
      status,
      time,
      contact,
      description,
      message,
      AcceptWorkshopPostulation,
      RejectWorkshopPostulation
    };
  },
};
</script>
