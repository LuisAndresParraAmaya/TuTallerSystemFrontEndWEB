<template>

<div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Nombre</th> 
        <th>Contacto</th> 
        <th>Estado</th>
        <th>Información</th>
      </tr>
    </thead> 
    <tbody>
      <tr class="">
        <th>1</th> 
        <td>Taller Tuercas</td> 
        <td>920012610</td> 
        <td>Pendiente</td>
        <td><button class="btn btn-success">Ver Más</button></td>
      </tr>
    </tbody>
  </table>
  {{lista}}
</div>
</template>
<script setup>
const lista = [
    { name: 'Tuercas', contact: 920012610, status: 'Pendiente'},
    { name: 'Tio Manolo', contact: 954012610, status: 'Aceptado'},
    { name: 'El Agujon', contact: 98781510, status: 'Aceptado'},
    { name: 'Tio Mario', contact: 928112610, status: 'Rechazado'}
]
</script>