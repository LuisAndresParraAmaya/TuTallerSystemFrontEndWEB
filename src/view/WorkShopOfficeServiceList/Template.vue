<template>
  <div class="grid grid-cols-1 xl:grid-cols-4 place-items-center p-1">
    <div class="xl:col-start-2 xl:col-span-2 xl:w-3/4">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Lista de Servicios de la Sucursal
      </h1>
      <div class="rounded-xl shadow-2xl w-auto">
        <Suspense>
          <template #default>
            <Table />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
const router = useRoute();
import Table from "../../components/WorkShopOfficeServiceList/Table/Template.vue";
export default {
  components: {
    Table,
  },
};
</script>