<template>
  <div>
    <table class="table-auto">
      <thead class="text-center">
        <tr>
          <th class="p-6">Región</th>
          <th class="p-6">Comuna</th>
          <th class="p-6">Dirección</th>
          <th class="p-6">Número de teléfono</th>
          <th class="p-6">Plan Suscrito</th>
          <th class="p-6">Acción</th>
        </tr>
      </thead>
      <tbody class="divide-y text-center">
        <!--Source -> List Rendering: https://v3.vuejs.org/guide/list.html#maintaining-state-->
        <tr v-for="office in offices" :key="office" class="divide-x">
          <!--Source -> Declarative Rendering: https://v3.vuejs.org/guide/introduction.html#declarative-rendering-->
          <td class="p-6">{{ office.region_name }}</td>
          <td class="p-6">{{ office.commune_name }}</td>
          <td class="p-6">{{ office.workshop_office_address }}</td>
          <td class="p-6">+56 {{ office.workshop_office_phone }}</td>
          <td class="p-6">{{ getNameSuscription(office.workshop_office_suscription_name) }}</td>
          <td class="p-6"><!--TODO-->
            <button v-on:click="NavigateToRoute(office.region_name, office.workshop_office_id, office.workshop_office_address, office.workshop_office_phone, office.commune_name)" class="btn btn-success rounded-full w-24">Ver Más</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="./Logic.js"></script>