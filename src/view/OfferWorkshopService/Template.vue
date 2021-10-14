<template>
  <div class="grid grid-cols-1 xl:grid-cols-4 p-2 place-items-center w-auto">
    <div class="xl:col-start-2 xl:col-span-2 xl:w-3/4 p-2">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Cambio de aceite{{ namerservice }}
      </h1>

      <form @submit.prevent>
        <div class="flex place-items-center text-sm md:text-base">
          <div class="w-1/4">
            <label class="label">Precio estimado:</label>
          </div>
          <div class="w-full">
            <label class="label-text">${{ price }}20.000</label
            >
          </div>
        </div>
        <div class="flex place-items-center text-sm md:text-base">
          <div class="w-1/4">
            <label class="label">Tiempo estimado:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{ time }}2 hrs</label
            >
          </div>
        </div>
        <div class="flex place-items-center text-sm md:text-base">
          <div class="w-1/4">
            <label class="label">Descripción:</label>
          </div>
          <div class="w-full">
            <label class="label-text">{{ description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem impedit laudantium atque esse quidem labore eaque velit quae, sit cumque eum minus sunt voluptatum facere blanditiis at enim quis libero?</label
            >
          </div>
        </div>
        <div class="rounded-xl shadow-2xl w-auto mt-5">
          <table class="w-full bg-white text-black rounded-xl">
            <thead class="text-center border-b text-sm md:text-base">
              <tr>
                <th class="py-2">Dias</th>
                <th class="py-2">Apertura</th>
                <th class="py-2">Cierre</th>
                <th></th>
              </tr>
            </thead>
            <tbody class="divide-y text-center text-sm md:text-base">
              <tr>
                <td class="py-2">Lunes</td>
                <td class="py-2">08:00{{ open }} hrs</td>
                <td class="py-2">20:00{{ close }} hrs</td>
                <td class="py-2">
                  <button
                    class="
                      bg-green-600
                      hover:bg-green-700
                      text-coolGray-50
                      rounded-full                      
                      p-2
                      w-auto                    "
                  >
                    Reservar
                  </button>
                </td>
              </tr>
              <tr>
                <td class="py-2">Martes</td>
                <td class="py-2">08:00{{ open }} hrs</td>
                <td class="py-2">20:00{{ close }} hrs</td>
                <td class="py-2">
                  <button
                    class="
                      bg-green-600
                      hover:bg-green-700
                      text-coolGray-50
                      rounded-full
                      w-auto
                      p-2
                    "
                  >
                    Reservar
                  </button>
                </td>
              </tr>
              <tr>
                <td class="py-2">Miércoles</td>
                <td class="py-2">08:00{{ open }} hrs</td>
                <td class="py-2">20:00{{ close }} hrs</td>
                <td class="py-2">
                  <button
                    class="
                      bg-green-600
                      hover:bg-green-700
                      text-coolGray-50
                      rounded-full
                      w-auto
                      p-2
                    "
                  >
                    Reservar
                  </button>
                </td>
              </tr>
              <tr>
                <td class="py-2">Jueves</td>
                <td class="py-2">08:00{{ open }} hrs</td>
                <td class="py-2">20:00{{ close }} hrs</td>
                <td class="py-2">
                  <button
                    class="
                      bg-green-600
                      hover:bg-green-700
                      text-coolGray-50
                      rounded-full
                      w-auto
                      p-2
                    "
                  >
                    Reservar
                  </button>
                </td>
              </tr>
              <tr>
                <td class="py-2">Viernes</td>
                <td class="py-2">08:00{{ open }} hrs</td>
                <td class="py-2">20:00{{ close }} hrs</td>
                <td class="py-2">
                  <button
                    class="
                      bg-green-600
                      hover:bg-green-700
                      text-coolGray-50
                      rounded-full
                      w-auto
                      p-2
                    "
                  >
                    Reservar
                  </button>
                </td>
              </tr>
              <tr>
                <td class="py-2">Sábado</td>
                <td class="py-2">08:00{{ open }} hrs</td>
                <td class="py-2">20:00{{ close }} hrs</td>
                <td class="py-2">
                  <button
                    class="
                      bg-green-600
                      hover:bg-green-700
                      text-coolGray-50
                      rounded-full
                      w-auto
                      p-2
                    "
                  >
                    Reservar
                  </button>
                </td>
              </tr>
              <tr>
                <td class="py-2">Domingo</td>
                <td class="py-2">08:00{{ open }} hrs</td>
                <td class="py-2">20:00{{ close }} hrs</td>
                <td class="py-2">
                  <button
                    class="
                      bg-green-600
                      hover:bg-green-700
                      text-coolGray-50
                      rounded-full
                      w-auto
                      p-2
                    "
                  >
                    Reservar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  </div>
</template>