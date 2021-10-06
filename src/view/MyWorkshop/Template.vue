<template>
  <div class="grid place-items-center text-center p-3">
      <h1 class="my-3 text-4xl font-bold">Los Tuercas</h1>
      <form @submit.prevent class="mt-12">
        <div>
          <div>
            <label class="label">Nombre taller</label>
          <span>
              <input
            type="text"
            class="input input-bordered w-72"
            id="workshop_name"
            required
            disabled
            value="Bruno fritsh"
            
          />
          <button class="btn ml-5">E</button>
          </span>
          </div>
          <div>
            <label class="label">
            Telefono
          </label>
          <span>
              <input
            type="text"
            class="input input-bordered w-72"
            id="workshop_name"
            required
            disabled
            value="225853696"
            
          />
          <button class="btn ml-5">E</button>
          </span>
          </div>
          <div>
            <label class="label">Descripción del taller</label>
          <textarea style="resize:none"
            class="input-bordered textarea w-full"
            name="descriptionArea"
            id="workshop_description"
            cols="30"
            rows="5"
            disabled
          ></textarea>
          </div>

          <button
            v-on:click="sendPostulation"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Editar
          </button>
          <button
            v-on:click="viewWorkshop"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Ver mis sucursales
          </button>
        </div>
      </form>
    
    
  </div>
</template>


