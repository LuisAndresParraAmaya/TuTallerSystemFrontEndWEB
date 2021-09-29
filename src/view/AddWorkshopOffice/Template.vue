<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center p-6 form-control">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold text-center mb-20">
        Agregar sucursal
      </h1>

      <form @submit.prevent>
        <div class="form-control mt-14">
          <label class="label">
            <span class="label-text">Región de sucursal</span>
          </label>
          <select
            class="select input-bordered"
            name=""
            id="selctComuna"
            required
          >
            <option selected>REGION METROPOLITANA</option>
          </select>
          <label class="label">
            <span class="label-text">Comuna de sucursal</span>
          </label>
          <select
            class="select input-bordered"
            name=""
            id="selctComuna"
            required
          >
            <option selected>SANTIAGO</option>
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
          <table>
            <tbody>
              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Lunes</span>
                    <input type="checkbox" class="toggle toggle-primary" />
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />Hasta las
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />
                  </label>
                </td>
              </tr>

              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Martes</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />Hasta las
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Miercoles</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />Hasta las
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Jueves</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />Hasta las
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Viernes</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />Hasta las
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Sabado</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />Hasta las
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Domingo</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />Hasta las
                    <input
                      type="time"
                      class="input input-bordered w-auto"
                      id="txtHlunes"
                      required
                    />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>

          <button class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5">
            Agregar sucursal
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
</template>



