<template>
  <form method="post" :action="data.url">
    <input type="hidden" name="token_ws" :value="data.token" />
    <input
      type="submit"
      class="btn btn-success"
      value="Ir a pagar"
    />
  </form>
  {{wp}}
</template>
<script src="./Logic.js"></script>
