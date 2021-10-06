<template>
  <div class="grid grid-cols-1 p-3 place-items-center">
    <div class="">
      <h1 class="my-3 text-4xl font-bold text-center">Sucursal</h1>
      <form @submit.prevent class="mt-12">
        <div>
          <div>
            <label class="label"> Region </label>

            <select class="select input-bordered w-72" disabled>
              <option value="region metropolitana">Region metropolitana</option>
            </select>
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Comuna </label>
            <select class="select input-bordered w-72" disabled>
              <option value="puentealto" selected>Santiago</option>
            </select>
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Dirección </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
              value="225853696"
            />
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Telefono </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
              value="225853696"
            />
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Horario de atencion </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
              value="225853696"
            />
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Empleados </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
              value="225853696"
            />
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Servicios </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
              value="225853696"
            />
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Suscripción </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
              value="225853696"
            />
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <label class="label"> Evaluaciones </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
              value="225853"
            />
            <button class="btn ml-5" disabled>E</button>
          </div>
          <div>
            <button
              v-on:click="sendPostulation"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Editar
            </button>
            <!-- <button
            v-on:click="viewWorkshop"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Eliminar Sucursal
          </button> -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>