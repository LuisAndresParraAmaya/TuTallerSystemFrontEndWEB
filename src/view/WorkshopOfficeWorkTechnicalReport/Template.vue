<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">Ficha tecnica del vehículo</h1>
      
      <div class="bg-base-200 flex justify-center">
        <div class="w-3/5 mt-6 mb-10" v-for="o in fichas" :key="o">
          <label class="label"
            ><label class="label font-bold">Marca: </label
            >{{ o.office_work_technical_report_brand }}</label
          >
          <label class="label"
            ><label class="label font-bold">Modelo: </label
            >{{ o.office_work_technical_report_model }}</label
          >
          <label class="label"
            ><label class="label font-bold">Kilometraje: </label
            >{{ o.office_work_technical_report_km }} kms</label
          >
          <label class="label"
            ><label class="label font-bold">Placa pantente unica (PPU): </label
            >{{ o.office_work_technical_report_ppu }}</label
          >
          <label class="label"
            ><label class="label font-bold">Tipo de combustible: </label
            >{{ o.office_work_technical_report_fuel_type }}</label
          >
          <label class="label"
            ><label class="label font-bold">Color: </label
            >{{ o.office_work_technical_report_color }}</label
          >
          <label class="label"
            ><label class="label font-bold">Número de motor: </label
            >{{ o.office_work_technical_report_engine }}</label
          >
          <label class="label"
            ><label class="label font-bold">Número de chasis: </label
            >{{ o.office_work_technical_report_chassis }}</label
          >
          <label class="label"
            ><label class="label font-bold">descripción del vehículo: </label
            >{{ o.office_work_technical_report_description }}</label
          >
          <br />

        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>