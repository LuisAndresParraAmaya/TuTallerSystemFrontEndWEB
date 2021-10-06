<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 p-2 place-items-center">
    <div class="lg:col-span-2 lg:col-start-2 px-12">
      <h1 class="my-3 text-4xl font-bold text-center mb-20">{{ name }}</h1>
      <form @submit.prevent>
        <div class="flex place-items-center">
          <div class="w-1/4">
            <label class="label">Descripción:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{description}} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore quos, quas aut animi quae amet eum, ipsam quia fugiat at perferendis ea quo distinctio nobis dolor earum autem cumque? Reprehenderit?</label>
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
          <div class="w-1/4">
            <label class="label">Razón de rechazo:</label>
          </div>
          <div class="w-full">
            <textarea
              id="reject_reason"
              class="input-bordered textarea w-full"
              cols="30"
              rows="5"
              style="resize: none"
            ></textarea>
          </div>
        </div>
        <div class="flex place-content-between ">
          <button
            v-on:click="RejectWorkshopPostulation()"
            class="w-auto rounded-md bg-red-600 btn text-coolGray-50 mt-5"
          >
            Rechazar
          </button>

          <button
            v-on:click="AcceptWorkshopPostulation()"
            class="w-auto btn rounded-md bg-green-600 text-coolGray-50 mt-5"
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
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
        .then((res) => {
          alert("Fue enviado un correo al administrador del taller");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    async function RejectWorkshopPostulation() {
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
      status,
      time,
      contact,
      description,
      message,
      AcceptWorkshopPostulation,
      RejectWorkshopPostulation,
    };
  },
};
</script>
