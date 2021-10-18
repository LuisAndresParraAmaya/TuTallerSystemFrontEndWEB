<template>
  <div>
    <p class="text-5xl text-center">Lista de anuncios publicitarios de la sucursal</p>
    <table>
      <router-link to="/WorkshopAds" class="btn btn-success mb-4">
        Nuevo anuncio publicitario
      </router-link>
      <tr>
        <th>Nombre</th>
        <th>Monto de puja</th>
        <th>Gastos totales</th>
        <th>Estado</th>
        <th>Acción</th>
      </tr>
      <tr v-for="ad in ads" :key="ad">
        <td>{{ad.workshop_office_ad_name}}</td>
        <td>${{ad.workshop_office_ad_bid}} CLP</td>
        <td>${{ad.workshop_office_ad_money_spent}} CLP</td>
        <td>{{ad.workshop_office_ad_status == 'inactive' ? 'Inactivo' : 'Activo'}}</td>
        <td>
          <button v-on:click="enConstrucción()" class="btn btn-success">Ver Más</button>
          <button v-on:click="NavigationToRoute('WorkShopOfficeAdsBid', ad.id, ad.workshop_office_ad_status)" class="btn btn-success ml-3">Publicar</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<style src="./Style.css" scoped></style>
<script src="./Logic.js"></script>
