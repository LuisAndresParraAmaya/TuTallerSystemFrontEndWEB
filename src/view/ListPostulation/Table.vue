<template>
<div class="mockup-window bg-base-300">
  <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Listado de postulaciones de talleres</h1>
  <div class=" bg-base-200">
<div style="display:flex; justify-content: center">
  <table style="width: 70%; margin-top: 5%">
    <thead class="">
      <tr class="text-left border-b-2 border-black">
        <th></th>
        <th>Nombre taller</th>
        <th>Estado</th>
        <th>Fecha y hora de postulación</th>
        <th>Ver más</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="postulation in list" :key="postulation" class="border-b">
        <td></td>
        <td style="width: 30%">{{ postulation.workshop_name }}</td>
        <td style="width: 30%">{{ statusEnglishToSpanish(postulation.postulation_current_status) }}</td>
        <td style="width: 30%">{{ formatDateTime(postulation.postulation_date_time) }}</td>
        <td>
        <a style="cursor: pointer; margin-left: 25%" v-on:click="goToSeeMore(postulation.workshop_name, postulation.postulation_current_status, postulation.postulation_date_time, postulation.postulation_message, postulation.workshop_number, postulation.postulant_rut, postulation.workshop_description, postulation.id)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 mr-2 stroke-current">        
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> 
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>                 
        </svg>
      </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
</div>
</template>
<script src="../../view/ListPostulation/Logic.js"></script>
