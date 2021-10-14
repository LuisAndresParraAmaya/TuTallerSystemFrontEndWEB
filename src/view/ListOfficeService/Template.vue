<template>
  <div class="grid grid-cols-1 xl:grid-cols-4 place-items-center p-1">
    <div class="xl:col-start-2 xl:col-span-2 xl:w-3/4">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Lista de Servicios de la Sucursal
      </h1>
      <div class="rounded-xl  shadow-2xl w-auto">
        <table class="w-full bg-white text-black rounded-xl">
          <thead class="text-center border-b text-sm md:text-base">
            <tr>
              <th class="p-2">Nombre Servicio</th>
              <th class="p-2">Precio Estimado</th>
              <th class="p-2">Tiempo Estimado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody class="divide-y text-center text-sm md:text-base">
            <tr>
              <td class="p-2">Cambio de aceite{{ name }}</td>
              <td class="p-2">${{ price }}49.990</td>
              <td class="p-2">{{ time }}180 min</td>
              <td class="p-2">
                <button
                  class="
                    bg-green-600
                    hover:bg-green-700
                    text-coolGray-50
                    rounded-full
                    w-20
                    py-2
                  "
                >
                  Ver Más
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>