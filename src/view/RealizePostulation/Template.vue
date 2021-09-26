<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Postular taller</h1>
      <form @submit.prevent class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nombre taller </span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="workshop_name"
            required
          />

          <label class="label">
            <span class="label-text">Telefono</span>
          </label>
          <input
            type="number"
            class="input input-bordered"
            id="workshop_number"
            required
          />

          <label class="label">
            <span class="label-text">Descripción del taller</span>
          </label>
          <textarea style="resize:none"
            class="input-bordered textarea"
            name="descriptionArea"
            id="workshop_description"
            cols="30"
            rows="5"
          ></textarea>
          <label class="label">
            <span class="label-text">Mensaje</span>
          </label>

          <textarea style="resize:none"
            class="input-bordered textarea"
            name="descriptionArea"
            id="postulation_message"
            cols="30"
            rows="5"
          ></textarea>

          <button
            v-on:click="sendPostulation"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Enviar postulación
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>
<script src="./Logic.js"></script>

