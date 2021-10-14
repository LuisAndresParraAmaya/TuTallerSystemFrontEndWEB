<template>
<div style="display:flex; justify-content: center">
    <div class="overflow-x-auto" style="width: 85%">
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


