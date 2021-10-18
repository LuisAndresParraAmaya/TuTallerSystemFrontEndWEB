<template>
  <div v-show="getShow()" class="bg-gray-600 rounded-md border-radius p-5" style="width: 100%">
    <button
      class="bg-green-600 hover:bg-green-700 text-white rounded-lg p-1 md:p-3"
      id="ShowWorkshopEmployee_btnAddEmployee"
      v-on:click="NavigationToRoute('AddWorkshopOfficeEmployee')"
    >
      Agregar empleado
    </button>
  </div>
    <table style="width: 100%" class="bg-white text-black rounded-xl">
      <thead class="text-center border-b text-sm md:text-base">
        <tr>
          <th class="py-2 px-1">Nombre</th>
          <th class="py-2 px-1">Apellido</th>
          <th class="py-2 px-1">Especialidad</th>
          <th class="py-2 px-1">RUT</th>
          <th class="py-2 px-1">Experiencia</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody class="divide-y text-center text-sm md:text-base">
        <tr v-for="employee in employees" :key="employee">
          <td class="py-2 px-1">{{ employee.user_name }}</td>
          <td class="py-2 px-1">{{ employee.user_last_name }}</td>
          <td class="py-2 px-1">{{ employee.workshop_office_employee_specialization }}</td>
          <td class="py-2 px-1">{{ employee.user_rut }}</td>
          <td class="py-2 px-1">{{ employee.workshop_office_employee_experience }}</td>
          <td class="py-2 px-1">
            <button v-on:click="enConstruccion()"
              class="
                bg-green-600
                hover:bg-green-700
                text-white
                rounded-lg
                p-1
                md:p-3
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
