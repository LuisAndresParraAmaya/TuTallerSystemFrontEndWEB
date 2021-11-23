<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Agregar oferta
      </h1>
      <div class="bg-base-200 flex justify-center">
        <div class="w-3/5">
          <form class="mt-6 mb-10">
            <div class="form-control">
              <div class="grid w-full">
                <label class="label">
                  <span class="label-text">Nombre de la oferta </span>
                </label>
                <input
                  v-model="nombreoferta"
                  type="text"
                  class="input input-bordered"
                  id="txtname"
                />
                
                <label class="label">
                  <span class="label-text">Descuento</span>
                </label>
                <input
                  v-model="descuento"
                  type="number"
                  class="input input-bordered"
                  id="numberdiscount"
                />
              </div>

              <br />
              <label class="label">
                <span class="label"
                  >Fecha y hora en que la oferta ya no será valida
                </span>
              </label>

              <label class="label">
                <span class="label-text">Fecha de expiración</span>
              </label>
              <input
                v-model="fecha"
                type="date"
                class="input input-bordered"
                id="date"
                placeholder=""
              />
              <label class="label">
                <span class="label-text">Hora de expiración</span>
              </label>
              <input
                v-model="hora"
                type="time"
                class="input input-bordered"
                id="time"
                placeholder="Hora de expiración"
              />

              <button
                @click="enviar()"
                class="
                  w-full
                  px-8
                  rounded-md
                  btn btn-success
                  text-coolGray-50
                  mt-5
                "
              >
                Continuar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>