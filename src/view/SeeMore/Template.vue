<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold text-center mb-20">Nombre Taller</h1>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Descripción:</span>
        </label>
        <textarea
          style="resize: none"
          class="input-bordered textarea"
          name="text_description"
          id="text_description"
          cols="30"
          rows="5"
        ></textarea>
        <label class="label">
          <span class="label-text">Contacto:</span>
        </label>
        <textarea
          class="textarea h-24 textarea-bordered resize"
          name="text_message"
          id="text_message"
          cols="30"
          rows="5"
        ></textarea>
        <label class="label">
          <span class="label-text">Estado:</span>
        </label>
        <label class="label">
          <span class="label-text">Fecha:</span>
        </label>
        <div class="">
          <button
            class="w-full rounded-md bg-red-600 btn text-coolGray-50 mt-5"
          >
            Rechazar
          </button>

          <button
            class="w-full btn rounded-md bg-green-600 text-coolGray-50 mt-5"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>