<template>
  <div class="grid grid-cols-1 content-center m-0 md:m-16">
    <div class="w-full overflow-x-auto">
      <Suspense>
        <template #default>
          <Table/>
        </template>
      </Suspense>
    </div>
  </div>
</template>
<script>
import Table from '../../view/ListPostulation/Table.vue'
export default{
  components: {
    Table
  }
}
</script>


