<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 w-auto p-4" >
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold text-center mb-16">
        Agregar sucursal
      </h1>

      <form @submit.prevent>
        <div>
          <div class="grid w-full">
            <label class="label">
              <span class="label-text">Región de sucursal</span>
            </label>
            <select
              class="select input-bordered w-full"
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
          </div>
          <div class="grid form-control place-content-center gap-1">
            <div class="flex items-center gap-1">
              <label class="label"
                ><span class="label-text w-14">Lunes</span></label
              >
              <input
                type="checkbox"
                class="toggle toggle-accent toggle"
                true-value="enable"
                false-value="false"
              />
              <div class="flex items-center text-center gap-1">
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
                <label for="">Hasta las</label>
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
              </div>
            </div>
            <div class="flex items-center gap-1">
              <label class="label"
                ><span class="label-text w-14">Martes</span></label
              >
              <input type="checkbox" class="toggle toggle-accent" />
              <div class="flex items-center text-center gap-1">
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
                <label for="">Hasta las</label>
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
              </div>
            </div>
            <div class="flex items-center gap-1">
              <label class="label"
                ><span class="label-text w-14">Miercoles</span></label
              >
              <input type="checkbox" class="toggle toggle-accent" />
              <div class="flex items-center text-center gap-1">
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
                <label for="">Hasta las</label>
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
              </div>
            </div>
            <div class="flex items-center gap-1">
              <label class="label w-16"
                ><span class="label-text w-14">Jueves</span></label
              >
              <input type="checkbox" class="toggle toggle-accent" />
              <div class="flex items-center text-center gap-1">
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
                <label for="">Hasta las</label>
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
              </div>
            </div>
            <div class="flex items-center gap-1">
              <label class="label"
                ><span class="label-text w-14">Viernes</span></label
              >
              <input type="checkbox" class="toggle toggle-accent" />
              <div class="flex items-center text-center gap-1">
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
                <label for="">Hasta las</label>
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
              </div>
            </div>
            <div class="flex items-center gap-1">
              <label class="label"
                ><span class="label-text w-14">Sabado</span></label
              >
              <input type="checkbox" class="toggle toggle-accent" />
              <div class="flex items-center text-center gap-1">
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
                <label for="">Hasta las</label>
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
              </div>
            </div>
            <div class="flex items-center gap-1">
              <label class="label"
                ><span class="label-text w-14">Domingo</span></label
              >
              <input type="checkbox" class="toggle toggle-accent" />
              <div class="flex items-center text-center gap-1">
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
                <label for="">Hasta las</label>
                <input
                  type="time"
                  class="input input-bordered w-auto"
                  id="txtHlunes"
                  required
                />
              </div>
            </div>
          </div>

          <button class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5">
            Agregar sucursal
          </button>
        </div>
      </form>
    </div>
    <div></div>
  </div>
  
</template>
// <script>

// const EventHandling = {
//   data() {
//     return {
//       titulo: 'Hello Vue.js!'
//     }
//   }
  
// }

// Vue.createApp(EventHandling).mount('#panzho')

// </script>





