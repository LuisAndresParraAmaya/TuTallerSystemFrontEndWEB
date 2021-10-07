<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Registrar Servicio</h1>
      <form @submit.prevent class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nombre de servicio:</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="workshopoffice_name"
            required
          />

          <label class="label">
            <span class="label-text">Precio de servicio:</span>
          </label>
          <input
            type="number"
            class="input input-bordered"
            id="workshopofficeservice_price"
            required
          />

          <label class="label">
            <span class="label-text">Tiempo estimado:</span>
          </label>
          <input
            type="date"
            class="input input-bordered"
            id="workshopofficeservice_time"
            required
          />

          <label class="label">
            <span class="label-text">Descripción de servicio:</span>
          </label>
          <textarea style="resize:none"
            class="input-bordered textarea"
            name="descriptionArea"
            id="workshopofficeservice_description"
            cols="30"
            rows="5"
          ></textarea>
         

          

          <button
            v-on:click="sendPostulation"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Añadir servicio
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>