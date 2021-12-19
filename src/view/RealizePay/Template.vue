<template>
  <div style="display: flex; justify-content: center">
    <div>
      <h1 class="my-3 text-4xl font-bold">Pagar Suscripción de Mi Taller</h1>
      <img
        style="height: 300px; width: 500px"
        src="../RealizePay/webpay.png"
        alt=""
      />
      <h1 class="my-3 text-3xl font-bold">Detalles:</h1>
      <ol>
        <li>Suscripción: Basica</li>
        <li>Duración: 1 Mes</li>
        <li>Costo: $3.533 CLP</li>
      </ol>
            <Suspense>
        <template #default>
          <FormTransBank />
        </template>
      </Suspense>
    </div>

  </div>
</template>
<script>
import FormTransBank from "../../components/forms/Transbank/Transbank.vue";
export default {
  components: {
    FormTransBank,
  },
};
</script>
