hola
<template>

  <div class="grid grid-cols-1 lg:grid-cols-4 p-1 place-items-center">
    <div class="lg:col-start-2 lg:col-span-2 lg:w-3/4 p-2">
    
      <h1 class="my-3 text-4xl font-bold text-center mb-20 mt-12">
        Realizar Reclamo
      </h1>
      <form @submit.prevent>        
          <div>
            <label class="label">Reclamo:</label>
            <textarea
              id="txtReclaim"
              class="px-3
              py-3
              placeholder-gray-400
              text-gray-600
              relative
              bg-white
              rounded
              text-sm
              border border-gray-400
              outline-none
              focus:outline-none
              focus:ring
              w-full"
              cols="30"
              rows="5"
              style="resize: none"
            ></textarea>
          </div>
          <div class="flex place-content-between">
            <button
              v-on:click="sendReclaim"
              class="w-full py-2 rounded-md bg-green-600 hover:bg-green-700 text-coolGray-50 mt-5"
            >
              Enviar reclamo
            </button>
          </div>        
      </form>
    </div>
  </div>  
</template>
<script setup>
import axios from 'axios'
async function sendReclaim(){
  console.log("sendrelcaim")
      await axios.post("http://localhost:8080/FileWorkShopOfficeComplaint", {
          headers: { "Content-type": "application/json" },
          data: {  
            workshop_id: sessionStorage.getItem('workshop_id'),
            workshop_name: sessionStorage.getItem('workshop_name'),
            workshop_office_region: sessionStorage.getItem('workshop_office_region'),
            workshop_office_commune: sessionStorage.getItem('workshop_office_commune'),
            workshop_office_address: sessionStorage.getItem('workshop_office_address'),
            complaint: txtReclaim.value
          }
        }).then(function (res) {
          if(res.data.Response == 'Operation Success'){
            alert("Su reclamo fue enviado con exito")
          }
        })
}
</script>
