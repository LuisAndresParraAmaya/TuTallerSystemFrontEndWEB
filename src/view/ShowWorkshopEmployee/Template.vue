<template>
  <div class="grid grid-cols-1 xl:grid-cols-4  place-items-center p-1">
    <div class="xl:col-start-2 xl:col-span-2 xl:w-3/4">
      <h1 class="my-3 text-4xl font-bold text-center mb-12">
        Empleados de la Sucursal
      </h1>
      <div class="rounded-xl  shadow-2xl mt-5">
        <table class="w-full bg-white text-black rounded-xl">
          <thead class="text-center border-b text-sm md:text-base">
            <tr>
              <th class="py-2 px-1">Nombre</th>
              <th class="py-2 px-1">Apellido</th>
              <th class="py-2 px-1">Espec.</th>
              <th class="py-2 px-1">RUT</th>
              <th class="py-2 px-1">Exp.</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody class="divide-y text-center text-sm md:text-base">
            <tr>
              <td class="py-2 px-1">Sicario{{ name }}</td>
              <td class="py-2 px-1">Nalgas{{ lastname }}</td>
              <td class="py-2 px-1">Electro mecanica{{ specialization }}</td>
              <td class="py-2 px-1">11111111-1{{ rut }}</td>
              <td class="py-2 px-1">29 años{{ experience }}</td>
              <td class="py-2 px-1">
                <button
                  class="
                    bg-green-600
                    hover:bg-green-700
                    text-white
                     rounded-lg  
                    p-1
                    md:p-3
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

