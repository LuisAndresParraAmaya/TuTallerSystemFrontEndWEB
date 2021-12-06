<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300">
      <div v-if="offertype === 'workshopOfficeService'">
        <div class="grid grid-cols-1 xl:grid-cols-4 place-items-center p-1">
          <div class="xl:col-start-2 xl:col-span-2 p-4">
            <div class="rounded-xl shadow-2xl w-full">
              <h1 class="my-3 text-4xl font-bold text-center mb-12">
                Ofertas activas de Servicios
              </h1>
              
              <table class="table-auto bg-white rounded-md">
                <thead class="text-center">
                  <tr>
                    <th class="py-3 px-2">Nombre Oferta</th>
                    <th class="py-3 px-2">Descuento</th>
                    <th class="py-3 px-2">Valido Hasta</th>
                    <th class="py-3 px-2">Info</th>
                  </tr>
                </thead>

                <tbody class="divide-y text-center" v-for="sub in validar2()"
                    :key="sub">
                  <tr
                    class="divide-x"
                  >
                    <td class="py-3 px-2">
                      {{ traductor(sub.offer_name) }}
                    </td>
                    <td class="py-3 px-2">{{ sub.offer_discount }}%</td>
                    <td class="py-3 px-2">
                      {{ sub.offer_valid_until_time }} hrs del
                      {{ transformDate(sub.offer_valid_until_date) }}
                    </td>
                    <td>
                      <button
                        id="AddOffer"
                        v-on:click="
                          verMas(
                            sub.offer_name,
                            sub.offer_discount,
                            sub.offer_valid_until_date,
                            sub.offer_id
                          )
                        "
                        class="
                          w-auto
                          px-1
                          py-1
                          m-2
                          rounded-md
                          btn
                          text-coolGray-50
                        "
                      >
                        Ver mas
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                id="AddOffer"
                v-on:click="Redirect('AddOffer')"
                class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
              >
                Agregar oferta
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="offertype === 'subscriptionPlan'">
        <div class="grid grid-cols-1 xl:grid-cols-4 place-items-center p-1">
          <div class="xl:col-start-2 xl:col-span-2 p-4">
            <div class="rounded-xl shadow-2xl w-full">
              <h1 class="my-3 text-4xl font-bold text-center mb-12">
                Ofertas de planes
              </h1>

              <table class="table-auto bg-white rounded-md">
                <thead class="text-center">
                  <tr>
                    <th class="py-3 px-2">Nombre Oferta</th>
                    <th class="py-3 px-2">Descuento</th>
                    <th class="py-3 px-2">Valido Hasta</th>
                    <th class="py-3 px-2">Info</th>
                  </tr>
                </thead>

                <tbody class="divide-y text-center">
                  <tr v-for="sub in validar()" :key="sub" class="divide-x">
                    <td class="py-3 px-2">
                      {{ traductor(sub.offer_name) }}
                    </td>
                    <td class="py-3 px-2">{{ sub.offer_discount }}%</td>
                    <td class="py-3 px-2">
                      {{ sub.offer_valid_until_time }} hrs del
                      {{ transformDate(sub.offer_valid_until_date) }}
                    </td>
                    <td>
                      <button
                        id="AddOffer"
                        v-on:click="
                          verMas(
                            sub.offer_name,
                            sub.offer_discount,
                            sub.offer_valid_until_date,
                            sub.offer_id
                          )
                        "
                        class="
                          w-auto
                          px-1
                          py-1
                          m-2
                          rounded-md
                          btn
                          text-coolGray-50
                        "
                      >
                        Ver mas
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                id="AddOffer"
                v-on:click="Redirect('AddOffer')"
                class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
              >
                Agregar oferta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>