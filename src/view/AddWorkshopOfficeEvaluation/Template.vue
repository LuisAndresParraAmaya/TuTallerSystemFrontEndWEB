<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Evaluar servicio recibido
      </h1>
      <div class="bg-base-200 flex justify-center">
        <div class="w-3/5">
          <form class="mt-6 mb-10">
            <div class="form-control">
              <div class="grid w-full">
                <label class="label">
                  <span class="label-text">Por favor, al evaluar el trabajo realizado por la sucursal automotriz asegúrate de ser honesto, de esta forma nos estarás ayudando a mejorar TuTaller. </span>
                </label>
                <label class="label">
                  <span class="label-text">Calificación</span>
                </label>
                <select class="input input-bordered" v-model="select">
                    <option selected hidden></option>
                    <option value="1">1 Estrella</option>
                    <option value="2">2 Estrellas</option>
                    <option value="3">3 Estrellas</option>
                    <option value="4">4 Estrellas</option>
                    <option value="5">5 Estrellas</option>
                </select>
                {{select}}
                <label class="label">
                  <span class="label-text">Reseña</span>
                </label>
                <input
                  v-model="reseña"
                  type="text"
                  class="input input-bordered"
                  id="numberdiscount"
                />
              </div>
              {{reseña}}

              <br />
              

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
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>