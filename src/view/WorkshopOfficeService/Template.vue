<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Registrar Servicio</h1>
      <form @submit.prevent class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nombre de servicio:</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtService"
            required
          />

          <label class="label">
            <span class="label-text">Precio de servicio:</span>
          </label>
          <input
            type="number"
            class="input input-bordered"
            id="txtPrice"
            required
          />

          <label class="label">
            <span class="label-text">Tiempo estimado:</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtTime"
            required
          />

          <label class="label">
            <span class="label-text">Descripción de servicio:</span>
          </label>
          <textarea style="resize:none"
            class="input-bordered textarea"
            name="descriptionArea"
            id="txtDescription"
            cols="30"
            rows="5"
          ></textarea>
         

          

          <button
            v-on:click="registerService"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Añadir servicio
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>
<script setup>
import axios from 'axios'
async function registerService(){
    await axios.post("http://localhost:8080/AddWorkshopOfficeService", {
          headers: { "Content-type": "application/json" },
          data: {
            workshop_office_id: sessionStorage.getItem('workshop_office_id'),
            offer_id: 1,
            workshop_office_service_name: txtService.value,
            workshop_office_service_price: txtPrice.value,
            workshop_office_service_estimated_time: txtTime.value,
            workshop_office_service_description: txtDescription.value
          }
        }).then(function (res) {
          if(res.data.Response === 'Operation Success'){
            alert("El servicio automotriz fue registrado exitosamente")
          }
        })
}

</script>
