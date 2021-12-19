<template>
  <form method="post" :action="data.url">
    <input type="hidden" name="token_ws" :value="data.token" />
    <input
      type="submit"
      class="mt-5 btn btn-success"
      value="Ir a pagar"
    />
  </form>
</template>
<script src="./Logic.js"></script>
