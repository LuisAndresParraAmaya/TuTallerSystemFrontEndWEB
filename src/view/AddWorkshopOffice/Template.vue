<template>
  <div class="grid grid-cols-1 content-center p-3 form-control p-24">
    <div class="p-5">
      <h1 class="my-3 text-4xl font-bold text-center mb-20">
        Agregar sucursal
      </h1>

      <form @submit.prevent>
        <div class="form-control mt-14">
          <label class="label">
            <span class="label-text">Comuna de sucursal</span>
          </label>
          <select class="select input-bordered" name="" id="selctComuna">
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
          <table>
            <tbody>
              <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Lunes</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                  </label>
                </td>
                <td>
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                  
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
              </tr>
               <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Martes</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                  </label>
                </td>
                <td>
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
              </tr>
               <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Miercoles</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                  </label>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
              </tr>
               <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Jueves</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                  </label>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
              </tr>
               <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Viernes</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                  </label>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
                <td>
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
              </tr>
               <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Sabado</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                  </label>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
              </tr>
               <tr>
                <td>
                  <label class="cursor-pointer label">
                    <span class="label-text">Domingo</span>
                    <input type="checkbox" class="toggle toggle-primary ml-3" />
                  </label>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
                </td>
                <td>
                   <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="txtHlunes"
                    required
                  />
                  <select name="" id="">
                    <option value="">AM</option>
                    <option value="">PM</option>
                  </select>
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
  </div>
</template>



