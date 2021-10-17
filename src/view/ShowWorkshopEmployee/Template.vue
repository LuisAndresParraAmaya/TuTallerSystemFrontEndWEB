<template>
  <div style="display: flex; justify-content: center">
    <div>
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Empleados de la Sucursal
      </h1>
        <Suspense>
          <template #default>
            <Table />
          </template>
        </Suspense>
    </div>
  </div>
</template>
<script>
import Table from "../../components/MyWorkShopOfficeEmployeeList/Table/Template.vue";
export default {
  components: {
    Table,
  },
};
</script>

