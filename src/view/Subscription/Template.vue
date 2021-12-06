<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300 m-10">
      
      <div class="m-10">
        <div v-for="a in recibido" :key="a" class="m-6">
        <h1 class="my-3 text-4xl font-bold text-center mb-12">{{traductor(a.nombre)}}</h1>
        <label> <label class=" font-bold">Precio: </label>{{a.precios}}</label><br>
        <label> <label class=" font-bold">Periodicidad: </label>{{traductor(a.periodos)}}</label><br>
        <label class=" font-bold">Descripcion:</label><br>
        <ul>
          <li>
            -Tu sucursal automotriz aparecerá dentro de las búsquedas que realizan nuevos usuarios
          </li>
          <li>
            -Nuestros usuarios podrán ver el perfil de tu sucursal automotriz
          </li>
          <li>
            -Podrás prestar los servicios automotrices de tu sucursal a nuestros usuarios
          </li>
          <li>
            -Una vez que nuestros usuarios reciban los servicios automotrices de tu sucursal, estos podrán evaluarla entregándole una retroalimentación junto con una calificación que podría mejorar el posicionamiento de dicha sucursal dentro de las búsquedas
          </li>
          <li>
            -Podrás pujar dinero para que tu sucursal automotriz se posicione dentro de nuestros espacios publicitarios 
          </li>
        </ul>
      </div>
      <div>
        <button
              id="OfferList"
              v-on:click="Redirect('MyWorkshopOfficeSubscription')"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
             COMPRAR AHORA
            </button>
      </div>
      
      </div>
      
      
     
    </div>
  </div>
</template>

<script src="./Logic.js"></script>