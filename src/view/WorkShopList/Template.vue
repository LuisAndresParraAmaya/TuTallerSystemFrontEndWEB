<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300">
      <img v-if="_getShow()" style="margin: 0 auto" src="http://localhost:8080/img" alt="get_imagen_mejor_puja" width="400" height="400">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Lista de sucursales automotrices
      </h1>
      <div class="grid grid-cols-1 xl:grid-cols-4 place-items-center p-1">
        <div class="xl:col-start-2 xl:col-span-2 p-4">
          <div class="rounded-xl shadow-2xl w-full">
            <Suspense>
              <template #default>
                <Table />
              </template>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Table from "../../components/WorkShopList/Table/Template.vue";
export default {
  components: {
    Table,
  },

  methods: {
    _getShow(){
      return false
    }
  }
};
</script>





