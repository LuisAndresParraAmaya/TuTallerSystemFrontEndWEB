<template>
<div style="display: flex; justify-content:center;">
  <div class="text-left mt-9 p-4" style=" border: 1px solid black; width: 50%; border-radius: 8px">
    <div class="text-2xl" v-for="param in params" :key="param">
      <label>{{param}}</label><br><br>
    </div>
    <p class="text-2xl">{{description}}</p>
    <div class="text-center">
        <button @click="enConstruccion" class="mt-8 btn btn-success">Solicitar Servicio</button>
    </div>
  </div>
</div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const { name, price, time, description } = route.params;
const params = [name, '$'+price+' CLP', time];
function enConstruccion(){
    alert("Función en construcción...")
}
</script>
