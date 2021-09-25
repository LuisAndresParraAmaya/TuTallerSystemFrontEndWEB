<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Postular taller</h1>
      <form class="mt-12">
        <div class="form-control">
          
          <label class="label">
            <span class="label-text">Seleccionar comuna </span>
          </label>
          <select class="select select-bordered" id="selectSuscripcion" >
            <option selected></option>
            <option >v-for{}</option>
          </select>

          <label class="label">
            <span class="label-text">Nombre taller </span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtName"
            required
          />

          <label class="label">
            <span class="label-text">Dirección</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtAddress"
            required
          />

            <label class="label">
            <span class="label-text">Comuna</span>
          </label>
          <select class="select select-bordered" id="selectComuna" >
            <option selected></option>
            <option >v-for{}</option>
          </select>

          <label class="label">
            <span class="label-text">Telefono</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtPhone"
            required
          />

          <label class="label">
            <span class="label-text">Descripción</span>
          </label>

          <textarea class="input-bordered textarea" name="descriptionArea" id="descriptionArea" cols="30" rows="10"></textarea>

          <button
            @click="realizedPostulation()"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Realizar postulación
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>

<style src="./Style.css"></style>
<script src="./Component.js"></script>

