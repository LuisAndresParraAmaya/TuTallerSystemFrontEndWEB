<template>
  <div>
    <Suspense>
      <template #default>
        <Table />
      </template>
    </Suspense>
  </div>
</template>
<script>
import Table from "../../components/MyWorkShopOfficeAdsList/Table/Template.vue"
export default {
  components: {
    Table
  }
};
</script>
