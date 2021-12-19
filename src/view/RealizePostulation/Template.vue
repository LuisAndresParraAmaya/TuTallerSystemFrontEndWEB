<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 class="my-3 text-4xl text-center font-bold">Postular taller</h1>
      <form @submit.prevent class="mt-12 ml-12" style="width: 75%">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nombre taller </span>
          </label>
          <input type="text" required class="input input-bordered" id="workshop_name" />
          <br />
          <label class="label">
            <span class="label-text">Telefono</span>
          </label>
          <div style="display: flex">
            <select>
              <option>+56 Chile</option>
            </select>

            <input
              style="width: 500px"
              type="number"
              class="input input-bordered"
              id="workshop_number"
              required
            />
          </div>

          <label class="label">
            <span class="label-text">Descripción del taller</span>
          </label>
          <textarea
            style="resize: none"
            class="input-bordered textarea"
            name="descriptionArea"
            id="workshop_description"
            cols="30"
            rows="5"
            required
          ></textarea>
          <label class="label">
            <span class="label-text">Razón Social</span>
          </label>
          <textarea
            required
            style="resize: none"
            class="input-bordered textarea"
            name="reason"
            id="workshop_business_name"
            cols="30"
            rows="1"
            maxlength="100"
          ></textarea>
          <label class="label">
            <span class="label-text">Mensaje</span>
          </label>

          <textarea
            style="resize: none"
            class="input-bordered textarea"
            name="descriptionArea"
            id="postulation_message"
            cols="30"
            rows="5"
            required
          ></textarea>
          <div>
            <label for="inputFile" class="btn mt-4">Subir Foto de la parte delantera de la Cedula de identidad/Pasaporte</label>
            <input required type="file" hidden name="imagen" id="inputFile" accept="image/png, image/jpeg, image/jpg" />
          </div>
          <button
            v-on:click="sendPostulation"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5 mb-4"
          >
            Enviar postulación
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>

