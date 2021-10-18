<template>
    <div>
  <select id="selectRegion" class="select input-bordered w-72">
    <option :value="region.id" v-for="region in regions" :key="region">
      {{ region.region_name }}
    </option>
  </select><br>
  <label>Comuna</label><br>
   <select id="selectCommune" class="select input-bordered w-72">
    <option :value="commune.region_id" v-for="commune in communes" :key="commune">
      {{ commune.commune_name }}
    </option>
  </select>
  </div>
</template>
<script src="./Logic.js"></script>
