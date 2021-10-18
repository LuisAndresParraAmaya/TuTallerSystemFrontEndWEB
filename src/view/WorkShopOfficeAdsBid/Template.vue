<template>
<div style="display: flex; justify-content: center">
  <div style="border: 1px solid black; border-radius: 8px">
 
  <form style="margin-top: 5%; padding: 40px" @submit.prevent>
    <h1>Ingresar monto de puja:</h1><br>
    <input style="height: 33px; border: 1px solid grey; border-radius: 8px" type="number" id="bid" /><br/><br/>
    <button class="btn btn-success" v-on:click="publish()">Publicar</button>
  </form>
  </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router';
const route = useRoute()
  async function publish() {
    console.log(route.params)
    if(route.params.status == 'active'){
      alert("para poder pujar tu anuncio debes esperar 24 horas desde la activación")
      return
    }
    if(bid.value < 1){
      alert("porfavor debes ingresar un valor mayor a $0 CLP")
      return
    }
    await axios
      .post("http://localhost:8080/AdvertiseWorkShopOfficeAd", {
        headers: { "Content-type": "application/json" },
        data: {
          id: route.params.id,
          workshop_office_ad_bid: bid.value,
        },
      })
      .then(function (res) {
        if (res.data.Response == "Operation Success") {
          alert("Se ha publicado el anuncio publicitario");
        }
        if (res.data.Response == "Ad already activated") {
          alert("para poder pujar tu anuncio debes esperar 24 horas desde la activación");
        }
      });
  }
</script>