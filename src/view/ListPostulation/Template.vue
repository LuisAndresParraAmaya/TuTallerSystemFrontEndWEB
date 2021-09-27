<template>
<div class="grid grid-cols-1 content-center m-0 md:m-16">
<div class="w-full overflow-x-auto">
  <table class="w-full">
    <thead class="">
      <tr class="text-left border-b-2 border-black ">
        <th></th> 
        <th>Nombre</th> 
        <th>Contacto</th> 
        <th>Estado</th>
        <th>Información</th>
      </tr>
    </thead> 
    <tbody>
      <tr v-for="list in lista" :key="list" class="border-b">
        <td></td> 
        <td>{{list.name}}</td> 
        <td>{{list.contact}}</td> 
        <td>{{list.state}}</td> 
        <td><button class=" btn btn-success rounded-full">Ver Más</button></td>
      </tr>
    </tbody>
  </table>
  
</div>
</div>

</template>
<!-- <script setup>


const lista = [
    { name: 'Tuercas', contact: 920012610, status: 'Pendiente'},
    { name: 'Tio Manolo', contact: 954012610, status: 'Aceptado'},
    { name: 'El Agujon', contact: 98781510, status: 'Aceptado'},
    { name: 'Tio Mario', contact: 928112610, status: 'Rechazado'}
]
</script> -->
<script>
import { ref } from 'vue';

export default {
    name: 'App',
    setup() {
        
        const lista = ref([
            { name: 'Frank', contact: 'Murphy', state: 'frank.murphy@test.com'},
            { name: 'Frank', contact: 'Murphy', state: 'frank.murphy@test.com'},
            { name: 'Frank', contact: 'Murphy', state: 'frank.murphy@test.com'},
            { name: 'Frank', contact: 'Murphy', state: 'frank.murphy@test.com'}
        ]);

        return {
            lista
        };
    }
}
</script>
