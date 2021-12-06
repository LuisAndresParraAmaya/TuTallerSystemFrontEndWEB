<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">Oferta</h1>
      
      <div class="grid grid-cols-1 xl:grid-cols-1 p-1">
        <div class="rounded-xl shadow-2xl w-full" v-for="o in ofertas" :key="o">
          <label class="label"
            ><label class="label font-bold">Nombre: </label
            >{{ o.nombre }}</label
          >
          <label class="label"
            ><label class="label font-bold">Descuento: </label
            >{{ o.descuento }}%</label
          >
          <label class="label"
            ><label class="label font-bold">Valido hasta: </label
            >{{ o.valides }}</label
          >
          <br />

          <div v-if="datobutton === 'subscriptionPlan'">
            <label class="label font-bold"
              >Se encuentra activada en los siguientes planes
            </label>

            <ul v-for="a in servicios" :key="a">
              <li v-if="a.offer_id === o.id">{{ traductor(a.nombreplan) }}</li>
            </ul>
          </div>
          <div v-if="datobutton === 'workshopOfficeService'">
            <label class="label font-bold"
              >Se encuentra activada en los siguientes servicios
            </label>
            

            <ul v-for="c in workshopservice" :key="c">
              <li v-if="c.offer_id === o.id">{{ c.workshop_office_service_name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>