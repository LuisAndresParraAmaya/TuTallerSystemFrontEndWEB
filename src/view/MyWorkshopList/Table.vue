<template>
  <div class="mockup-window bg-base-300">
    <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
      Mis Talleres
    </h1>
    <div class="bg-base-200">
      <div style="display: flex; justify-content: center">
        <table style="width: 70%; margin-top: 5%">
          <thead class="">
            <tr class="text-left border-b-2 border-black">
              <th>Nombre taller</th>
              <th>Contacto taller</th>
              <th>Ver más</th>
              <th>Estado</th>
              <th>Acciónes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workshop in workshops" :key="workshop">
              <td>{{ workshop.workshop_name }}</td>
              <td>{{ workshop.workshop_number }}</td>
              <td>
                <button 
                  v-on:click="NavigateToRoute('MyWorkshopOfficeList', workshop.workshop_id)"
                  class="btn btn-success rounded-full"
                >
                  Ver Sucursales
                </button>
              </td>
              <td>{{ (workshop.postulation_current_status == "pending") ? "Pendiente": "Aceptado"}}</td>
              <td>
                <button
                  v-on:click="NavigateToRoute('AddWorkshopOffice', workshop.workshop_id)"
                  class="btn btn-success rounded-full"
                >
                  Registrar Sucursal
                </button>
                <button 
                  v-on:click="NavigateToRoute('MyWorkshop', workshop.workshop_id,  workshop.workshop_description, workshop.workshop_name, workshop.workshop_number)"
                  class="btn btn-success rounded-full"
                >
                  Ver más
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>
