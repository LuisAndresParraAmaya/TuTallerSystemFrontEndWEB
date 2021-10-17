<template>
  <div class="bg-gray-600 rounded-md border-radius p-5" style="width: 100%">
    <button
      class="bg-green-600 hover:bg-green-700 text-white rounded-lg p-1 md:p-3"
      id="ShowWorkshopEmployee_btnAddEmployee"
      v-on:click="NavigationToRoute('AddWorkshopOfficeEmployee')"
    >
      Agregar Servicio
    </button>
  </div>
  <table style="width: 100%" class="bg-white text-black rounded-xl">
    <thead class="text-center border-b text-sm md:text-base">
      <tr>
        <th class="p-2">Nombre Servicio</th>
        <th class="p-2">Precio Estimado</th>
        <th class="p-2">Tiempo Estimado</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody class="divide-y text-center text-sm md:text-base">
      <tr v-for="service in services" :key="service">
        <td class="p-2">{{service.workshop_office_service_name}}</td>
        <td class="p-2">${{service.workshop_office_service_price}} CLP</td>
        <td class="p-2">{{service.workshop_office_service_estimated_time}}</td>
        <td class="p-2">
          <button
            class="
              bg-green-600
              hover:bg-green-700
              text-coolGray-50
              rounded-full
              w-20
              py-2
            "
          >
            Ver Más
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script src="./Logic.js"></script>
