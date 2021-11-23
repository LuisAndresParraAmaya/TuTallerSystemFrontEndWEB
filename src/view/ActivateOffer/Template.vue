
<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Agregar oferta a
      </h1>
      <div class="bg-base-200 flex justify-center">
        <div class="w-3/5">
          <div v-if="datobutton === 'workshopOfficeSubscription'">
            <div v-for="a in subs" :key="a">
              <label for="a.id"
                ><input type="checkbox" :value="a.id" v-model="checkboxes" />
                {{ a.name }}</label
              >
            </div>
          </div>
          <div v-if="datobutton === 'workshopOfficeService'"  >
            
              <div v-for="a in servicios" :key="a">
                <label v-if="a.offer_id === 1" for="a.id" :v-model="state=1"
                  ><input type="checkbox" :value="a.id" v-model="checkboxes" />
                  {{ a.workshop_office_service_name }}</label
                >
              </div>
              {{checkboxes}}
              {{recibido}}
              <button v-if="state===1"
            v-on:click="conexionActivateOffer(checkboxes)"
            class="w-auto px-1 py-1 m-2 rounded-md btn text-coolGray-50"
          >
            Activar Oferta
          </button>
              <label v-if="state === 0" for="a.id">
                  Sin servicios disponibles para agregar ofertas</label>
                  
          </div>
           <div v-if="datobutton === 'subscriptionPlan'"  >
            
              <div v-for="a in subs" :key="a">
                <label v-if="a.offer_id === 1" for="a.id" :v-model="state=1"
                  ><input type="checkbox" :value="a.id" v-model="checkboxes" />
                  {{ traductor(a.name) }}</label
                >
              </div>
              <button v-if="state===1"
            v-on:click="conexionActivateOffer(checkboxes)"
            class="w-auto px-1 py-1 m-2 rounded-md btn text-coolGray-50"
          >
            Activar Oferta
          </button>
              <label v-if="state === 0" for="a.id">
                  Sin planes disponibles para agregar ofertas</label>
                  
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>