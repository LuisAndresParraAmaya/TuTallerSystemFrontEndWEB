<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300">
      
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Suscripciones
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
import Table from "../../components/SubscriptionList/Template.vue";
export default {
  components: {
    Table,
  }
};
</script>





