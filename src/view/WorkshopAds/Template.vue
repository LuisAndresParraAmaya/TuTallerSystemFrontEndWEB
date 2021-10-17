<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 p-1 place-items-center">
    <div class="lg:col-start-2 lg:col-span-2 lg:w-3/4 p-2">
      <h1 class="my-3 text-4xl font-bold text-center mb-20 mt-12">
        Realizar Publicidad de Taller
      </h1>
      <form @submit.prevent>
        <label class="label">Nombre anuncio:</label>
        <input type="text" name="anuncio" id="txtName" /><br />

        <label class="label">Monto de Puja:</label>
        <input type="number" name="monto" id="txtBid" /><br />

        <label class="label">Cargar imagen:</label>
        <input type="file" name="imagen" id="inputFile" /><br />

        <input
          type="hidden"
          name="workshop_office_id"
          id="workshop_office_id"
        />
        <button v-on:click="sendRequest()">Registrar</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
async function sendRequest() {
  // Construcción del FormData.
  let formData = new FormData();
  const headers = {
    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
  };
  formData.append("workshop_office_ad_name", txtName.value);
  formData.append("workshop_office_ad_bid", txtBid.value);
  formData.append("workshop_office_id", 32);
  formData.append("file", inputFile.files[0]);
  await axios
    .post("http://localhost:8080/AddWorkshopOfficeAd",
      formData,
      { headers: headers }
    )
    .then(function (res) {});
}
</script>
