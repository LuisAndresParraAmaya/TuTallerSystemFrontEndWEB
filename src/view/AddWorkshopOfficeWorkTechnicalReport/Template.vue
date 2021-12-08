<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Realizar ficha técnica
      </h1>
      <div class="bg-base-200 flex justify-center">
        <div class="w-3/5">
          <form class="mt-6 mb-10">
            <div class="form-control">
              <div class="grid place-content-center">
                  <label class="font-bold mb-6">Lleva a cabo la ficha técnica del vehiculo del cliente</label>
              </div>
              
              <div class="grid w-full">
                <label class="label">
                  <span class="label-text">Marca </span>
                </label>
                <input
                  v-model="marca"
                  type="text"
                  class="input input-bordered"
                  
                />
                <label class="label">
                  <span class="label-text">Modelo </span>
                </label>
                <input
                  v-model="modelo"
                  type="text"
                  class="input input-bordered"
                 
                />
                <label class="label">
                  <span class="label-text">Kilometraje </span>
                </label>
                <input
                  v-model="kms"
                  type="number"
                  class="input input-bordered"
                  
                />
                <label class="label">
                  <span class="label-text">Placa patente única (PPU) </span>
                </label>
                <input
                  v-model="ppu"
                  type="text"
                  class="input input-bordered"
                  id="txtname"
                  maxlength="10"
                  required
                />
                <label class="label">
                  <span class="label-text">Tipo de combustible</span>
                </label>
                <input
                  v-model="combustible"
                  type="text"
                  class="input input-bordered"
                />
                <label class="label">
                  <span class="label-text">Color</span>
                </label>
                <input
                  v-model="color"
                  type="text"
                  class="input input-bordered"
                />
                <label class="label">
                  <span class="label-text">Número de motor</span>
                </label>
                <input
                  v-model="motor"
                  type="text"
                  class="input input-bordered"
                />
                <label class="label">
                  <span class="label-text">Número de chasis</span>
                </label>
                <input
                  v-model="chasis"
                  type="text"
                  class="input input-bordered"
                />
                <label class="label">
                  <span class="label-text">Descripción del vehículo</span>
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
              </div>

              <br />
              <button
                @click="botonft()"
                class="
                  w-full
                  px-8
                  rounded-md
                  btn btn-success
                  text-coolGray-50
                  mt-5
                "
              >
                AÑADIR FICHA TÉCNICA
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>