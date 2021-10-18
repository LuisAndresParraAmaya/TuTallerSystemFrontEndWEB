<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 35%;">
       <h1 class="my-3 text-4xl font-bold text-center">Registrar empleado</h1>
      <form @submit.prevent class="mt-12 p-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Especialización</span>
          </label>
          <select class="select select-bordered" required id="selectEsp">
            <option selected></option>
            <option>Electricidad Automotriz</option>
            <option>Pintura Automotriz</option>
            <option>Técnico General</option>
          </select>
          <label class="label">
            <span class="label-text">Experiencia</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtExperience"
            required
          />
          <label class="label">
            <span class="label-text">Rut</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtRut"
            required
          />

          <button v-on:click="registerEmployee" class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5">
            Registrar Empleado
          </button>
        </div>
      </form>
</div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import axios from 'axios'
const router = useRoute();
;
async function registerEmployee() {
  await axios
    .post("http://localhost:8080/AddWorkshopOfficeEmployee", {
      headers: { "Content-type": "application/json" },
      data: { workshop_office_id: sessionStorage.getItem('workshop_office_id'),
       user_rut: txtRut.value,
       workshop_office_employee_specialization: selectEsp.value,
       workshop_office_employee_experience: txtExperience.value  
      }
    })
    .then(function (res) {
      if(res.data.Response === 'Operation Success'){
        alert("Se registro al empleado exitosamente")
      }
      if(res.data.Response === 'Rut not exist'){
        alert("El rut no corresponde a ningun usuario registrado")
      }
      if(res.data.Response == 'Type user is not allowed'){
        alert("El usuario ingresado no puede ser empleado en la sucursal")
      }
    });
}
</script>
