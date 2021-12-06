<template>
<div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300 m-10">
  
    <div class="m-10">
      <h1 class="my-3 text-4xl font-bold text-center mb-10">Subscripción</h1>
      
      <div v-if="validar() == null">
        <label class="font-bold">Estado de la suscripción</label><br />
        <label>
          La sucursal no se encuentra con una subscripción activa
          actualmente.</label
        >
        <button class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5" v-on:click="send()">
          SUSCRIBIRSE
        </button>
      </div>
      <div v-else>
           <label class="font-bold">Estado de la suscripción</label><br/>
           <label v-for="a in workshopservice" :key="a">{{traductor(a.workshop_office_suscription_name)}}</label>
      </div>
    </div>
  </div>
  </div>
</template>
<script src="./Logic.js"></script>