<template>
  <div>
    <table class="table-auto bg-white rounded-md">
      <thead class="text-center">
        <tr>
          <th class="py-3 px-2">Nombre</th>
          <th class="py-3 px-2">Periodicidad</th>
          <th class="py-3 px-2">Precio</th>
          <th class="py-3 px-2">Oferta</th>
          <th class="py-3 px-2">Ver mas</th>
        </tr>
      </thead>
      <tbody class="divide-y text-center">
        <tr v-for="sub in subs" :key="sub" class="divide-x">
          <td class="py-3 px-2">
            {{ subscriptionNameEnglishToSpanish(sub.name) }}
          </td>
          <td class="py-3 px-2">
            {{ subscriptionNameEnglishToSpanish(sub.periodicity) }}
          </td>
          <td class="py-3 px-2">
            <p v-if="sub.offer_discount > 0">
              <strike>${{ sub.price }} CLP</strike>
            </p>
            <p v-else>${{ sub.price }} CLP</p>
          </td>
          <td class="py-3 px-2">
            <p v-if="sub.offer_discount > 0">${{ sub.offer_price }} CLP</p>
            <p v-else>Sin oferta</p>
          </td>
          <td>
            <button
              id="AddOffer"
              v-on:click="
                verMas(
                  sub.price,
                  sub.periodicity,
                  sub.description,
                  sub.name

                )
              "
              class="w-auto px-1 py-1 m-2 rounded-md btn text-coolGray-50"
            >
              Ver mas
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script src="./Logic.js"></script>