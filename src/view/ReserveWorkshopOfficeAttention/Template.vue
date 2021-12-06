
    
   <template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Reservar atención
      </h1>
      
      <div class="bg-base-200 flex justify-center">
         
        <div class="mb-8 text-center"></div>
        <form
          style="width: 50%; padding-bottom: 5%"
          @submit.prevent
          class="space-y-12 ng-untouched ng-pristine ng-valid mt-12"
        >
          <div class="space-y-4">
            <div>
              <label for="hour" class="block mb-2 text-sm font-bold"
                >Horas disponibles</label
              >
              <ul v-for="a in atencion" :key="a">
                <li class="list-disc">{{a.workshop_office_attention_day}} {{a.workshop_office_attention_aperture_time}} - {{a.workshop_office_attention_departure_time}}</li>
              </ul>

              <label for="date" class="block mb-2 text-sm font-bold mt-2"
                >Fecha y hora de reserva </label
              >
             
              <input
                type="date"
                name="date"
                v-model="fecha"
                id="dateattention"
                placeholder="ejemplo@TuTaller.cl"
                class="
                  w-full
                  px-3
                  py-2
                  border
                  rounded-md
                  border-coolWhite-300
                  bg-coolWhite-50
                  text-coolWhite-800
                  mb-2
                "
                required
              />
              <input
                type="time"
                v-model="hora"
                class="
                  w-full
                  px-3
                  py-2
                  border
                  rounded-md
                  border-coolWhite-300
                  bg-coolWhite-50
                  text-coolWhite-800
                  mb-2
                "
                required
              />
            </div>
          </div>
          <div class="space-y-2" style="margin-top: 7%">
            <button
              v-on:click="reserva()"
              class="w-full px-8 rounded-md btn text-coolWhite-50"
            >
              RESERVAR
            </button>
           
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>
