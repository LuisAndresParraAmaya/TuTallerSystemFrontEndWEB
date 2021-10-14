<template>
  <div class="grid grid-cols-1 px-16">
    <div class="table text-center items-center">
      <Suspense>
        <template #default>
          <Table/>
        </template>
      </Suspense>
    </div>
  </div>
</template>
<script>
import Table from '../../view/MyWorkshopList/Table.vue'
export default{
  components: {
    Table
  }
}
</script>

