<template>
  <div class="grid place-items-center mt-12">
    <h1 class="my-3 text-4xl font-bold text-center mb-12">Mis Sucursales</h1>
    <div class="rounded-xl border shadow-2xl">
      <Suspense>
        <template #default>
          <Table/>
        </template>
      </Suspense>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>