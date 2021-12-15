<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">Servicios automotrices</h1>
      <div class="bg-base-200 flex justify-center">
        <div class="w-3/5">
          <div class="mt-6 mb-10">
            <table class="table-auto bg-white rounded-md">
              <thead class="text-center">
                <tr>
                  <th class="py-3 px-2">Servicio</th>
                  <th class="py-3 px-2">Taller automotriz</th>
                  <th class="py-3 px-2">Estado</th>
                  <th class="py-3 px-2">Acciones</th>
                </tr>
              </thead>

              <tbody class="divide-y text-center">
                <tr class="divide-x" v-for="a in list" :key="a">
                  <td class="py-3 px-2">{{ a.workshop_office_service_name }}</td>
                  <td class="py-3 px-2">{{ a.workshop_name }}</td>
                  <td class="py-3 px-2">{{ traductor(a.workshop_office_work_status) }}</td>
                  <td>
                    <button
                      @click="
                        boton(
                          a.workshop_office_work_id,
                          a.workshop_office_work_status,
                          a.workshop_office_service_name,
                          a.workshop_office_id
                        )
                      "
                      class="w-auto px-1 py-1 m-2 rounded-md btn text-coolGray-50"
                    >Ver mas</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>