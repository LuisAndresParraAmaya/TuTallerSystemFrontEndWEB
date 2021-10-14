<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">Registrar empleado</h1>
      <form @submit.prevent class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Especialización</span>
          </label>
          <select class="select select-bordered" required id="selectEsp">
            <option selected></option>
            <option>Electricidad Automotriz</option>
            <option>Pintura Automotriz</option>
            <option>Técnico General</option>
          </select>
          <label class="label">
            <span class="label-text">Experiencia</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtExperience"
            required
          />
          <label class="label">
            <span class="label-text">Rut</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtRut"
            required
          />
          
          <button
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Registrar Empleado
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>
