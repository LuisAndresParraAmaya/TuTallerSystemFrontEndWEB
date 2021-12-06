<template>
  <svg class="fill-current text-green-600 ...">sdf</svg>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300">
      <div>
        <div class="grid grid-cols-1 xl:grid-cols-4 place-items-center p-1">
          <div class="xl:col-start-2 xl:col-span-2 p-4">
            <div class="rounded-xl shadow-2xl w-full">
              <h1 class="my-3 text-4xl font-bold text-center mb-12">
                Servicios automotrices
              </h1>
  
              <div v-if="userType == 1" class="m-5 p-5">
                <div>
                  <div>
                    <div class="flex space-x-3">
                      <div v-for="(m, index) in milestone" :key="m">
                        
                        <div>
                          <svg v-if="index==0"
                            class="h-8 w-8 text-green-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <label v-if="
                            m.workshop_office_work_milestone_status == 'working'&& estado=='working'
                          ">{{m.workshop_office_work_milestone_description}}</label>
                          <label v-if="
                            m.workshop_office_work_milestone_status == 'pending'&& estado=='pending' && m.workshop_office_work_milestone_name=='Inspección del vehículo'
                          ">{{m.workshop_office_work_milestone_description}}</label>
                          
                        </div>
                        
                      </div>
                    </div>

                    <div></div>

                    <label class="font-bold label">Avances</label><br />
                  </div>

                  <div>
                    <ul class="list-disc">
                      <li v-for="a in list" :key="a">
                        {{ a.workshop_office_service_advance_description }}
                      </li>
                    </ul>
                  </div>
                </div>

                <button
                  class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
                  @click="boton()"
                >
                  CONFIRMAR RECEPCIÓN DE VEHÍCULO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>