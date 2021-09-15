<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Modificar Contraseña</h1>
      <form class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Correo electronico </span>
          </label>
          <input
            type="email"
            class="input input-bordered"
            id="txtEmail"
            required
          />
          <label class="label">
            <span class="label-text">Nueva contraseña </span>
          </label>
          <input
            type="pass"
            class="input input-bordered"
            id="txtPass"
            required
          />
          <label class="label">
            <span class="label-text">Confirmar nueva contraseña </span>
          </label>
          <input
            type="pass"
            class="input input-bordered"
            id="txtConfirmpass"
            required
          />

          <button
            @click="changePassword()"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Restablecer contraseña
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>

<style src="./Style.css"></style>


