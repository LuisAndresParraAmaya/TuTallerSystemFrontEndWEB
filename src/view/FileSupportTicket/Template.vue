<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Contáctanos
      </h1>
      <div class="bg-base-200 flex justify-center ">
        <div class=" w-3/5">
          <form @submit.prevent class="mt-6 mb-10">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Información de contacto </span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                id="txtname"
                placeholder="Nombre"
              />

              <input
                type="email"
                class="input input-bordered"
                id="txtemail"
                placeholder="Dirección de correo electrónico"
              />
              <label class="label">
                <span class="label-text">Mensaje</span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                id="txtsubject"
                placeholder="Asunto"
              />
              <input
                type="text"
                class="input input-bordered"
                id="txtmessage"
                placeholder="Mensaje"
              />
              <button
              @click="sendEmail()"
                class="w-full px-8 rounded-md btn btn-success text-coolGray-50 mt-5"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const sendEmail = () => {
  const inputs = [{name: 'Nombre', value: txtname.value},
  {name: 'Email', value: txtemail.value},
  {name: 'Asunto', value: txtsubject.value},
  {name: 'Mensaje', value: txtmessage.value}
  ]
  for(let input of inputs){
    if(input.value.trim().length == 0){
      alert('Debe rellenar el campo: '+input.name)
      return
    }
  }
  axios
    .post("http://localhost:8080/FileSupportTicket", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_name: txtname.value,
        user_email: txtemail.value,
        support_subject: txtsubject.value,
        support_message: txtmessage.value
      },
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>