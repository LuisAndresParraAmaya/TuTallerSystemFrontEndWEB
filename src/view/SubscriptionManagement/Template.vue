<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Gestionar Suscripciones
      </h1>
      <div class="grid grid-cols-1 xl:grid-cols-4 place-items-center p-1">
        <div class="xl:col-start-2 xl:col-span-2 p-4">
          <div class="rounded-xl shadow-2xl w-full">
            <button
              id="AddOffer"
              v-on:click="buttonOfertas()"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Ofertas
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>