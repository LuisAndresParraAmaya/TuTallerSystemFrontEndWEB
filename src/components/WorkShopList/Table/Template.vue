<template>
  <div>
    <table class="table-auto bg-white rounded-md">
      <thead class="text-center">
        <tr>
          <th class="py-3 px-2">Nombre</th>
          <th class="py-3 px-2">Región</th>
          <th class="py-3 px-2">Comuna</th>
          <th class="py-3 px-2">Dirección</th>
          <th class="py-3 px-2">Contacto</th>
          <th class="py-3 px-2">Valorización</th>
          <th class="py-3 px-2">Total de evaluaciones</th>
          <th class="py-3 px-2">Acciónes</th>
        </tr>
      </thead>
      <tbody class="divide-y text-center">
        <!--Source -> List Rendering: https://v3.vuejs.org/guide/list.html#maintaining-state-->
        <tr v-for="office in offices" :key="office" class="divide-x">
          <td class="py-3 px-2">{{office.workshop_name}}</td>
          <td class="py-3 px-2">{{office.workshop_office_region}}</td>
          <td class="py-3 px-2">{{office.workshop_office_commune}}</td>
          <td class="py-3 px-2">{{office.workshop_office_address}}</td>
          <td class="py-3 px-2">+56 {{office.workshop_office_phone}}</td>
          <td class="py-3 px-2">{{office.workshop_office_average_rating == 0 ? 'Sin valorizaciónes' : workshop_office_average_rating+'/5'}}</td>
          <td class="py-3 px-2">{{office.workshop_office_total_evaluations == 0 ? 'Sin evaluaciones' : office.workshop_office_total_evaluations}}</td>
          <td class="p-2">
            <button class="btn btn-success rounded-full" v-on:click="NavigateToRoute(office.workshop_id, office.workshop_name, office.workshop_office_region, office.workshop_office_commune, office.workshop_office_address)">Ver Más</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="./Logic.js"></script>