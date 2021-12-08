<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Añadir avance
      </h1>
      <div class="bg-base-200 flex justify-center">
        <div class="w-3/5">
          <form class="mt-6 mb-10">
            <div class="form-control">
              <div class="grid w-full">
                <label class="label">
                  <span class="label-text">Descripción </span>
                </label>
                <textarea
                  v-model="descripcion"
                  class="
                    w-full
                    px-3
                    py-2
                    text-gray-700
                    border
                    rounded-lg
                    focus:outline-none
                  "
                  rows="4"
                ></textarea>
             
                <label class="label">
                  <span class="label-text">Sube una imagen del avance </span>
                </label>
                <div class="grid place-content-center items-center">
                  <img :src="imagen" class="h-24">
                  <input type="file" @change="cargarImagen" id="inputFile" >
                </div>
              </div>

              <br />
              <button
                @click="subirs()"
                class="
                  w-full
                  px-8
                  rounded-md
                  btn btn-success
                  text-coolGray-50
                  mt-5
                "
              >
                SUBIR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>