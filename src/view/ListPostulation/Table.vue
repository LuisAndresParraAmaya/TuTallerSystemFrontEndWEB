<template>
  <table class="w-full">
    <thead class="">
      <tr class="text-left border-b-2 border-black">
        <th></th>
        <th>Nombre taller</th>
        <th>Estado</th>
        <th>Fecha de postulación</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="postulation in list" :key="postulation" class="border-b">
        <td></td>
        <td>{{ postulation.workshop_name }}</td>
        <td>{{ postulation.postulation_current_status }}</td>
        <td>{{ postulation.postulation_date_time }}</td>
        <td>
          <button class="btn btn-success rounded-full">Ver Más</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script src="../../view/ListPostulation/Logic.js"></script>
