<template>
    <div class="grid grid-cols-1 md:grid-cols-3 content-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold text-center mb-20">
        Agregar sucursal
      </h1>
     
      <form @submit.prevent>
        <div class="form-control mt-14">
             <label class="label">
            <span class="label-text">Comuna de sucursal</span>
          </label>
            <select class="select input-bordered " name="" id="selctComuna">
                <option selected></option>

            </select>
          <label class="label">
            <span class="label-text">Dirección de sucursal</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtAddress"
            required
          />

          <label class="label">
            <span class="label-text">Teléfono de sucursal</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtAddress"
            required
          />

          <label class="label">
            <span class="label-text">Horario de atención de sucursal</span>
          </label>
          <input
            type="datetime"
            class="input input-bordered"
            id="txtAtention"
            required
          />
          <button
            @click="verifyCode()"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            
            Agregar sucursal
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>



