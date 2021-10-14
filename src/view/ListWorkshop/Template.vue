<template>
  <div class="grid grid-cols-1 xl:grid-cols-4  place-items-center p-1">
    <div class="xl:col-start-2 xl:col-span-2 xl:w-3/4">
        <h1 class="my-3 text-4xl font-bold text-center mb-12">Talleres</h1>
    <div class="rounded-xl  shadow-2xl w-auto">
      <table class="w-full bg-white text-black rounded-xl">
        <thead class="text-center border-b text-sm md:text-base">
          <tr>
            <th class="py-3 px-2">Nombre</th>
            <th class="py-3 px-2">Region</th>
            <th class="py-3 px-2">Comuna</th>
            <th class="py-3 px-2">Teléfono</th>
            <th class="py-3 px-2">Rating</th>
          </tr>
        </thead>
        <tbody class="divide-y text-center text-sm md:text-base">
          <tr>
            <td class="py-3 px-2">Los Tuercas{{name}}</td>
            <td class="py-3 px-2">Metropolitana{{region}}</td>
            <td class="py-3 px-2">Santiago{{comuna}}</td>
            <td class="py-3 px-2">2258457896{{num}}</td>
            <td class="py-3 px-2">3/5{{rating}}</td>
            <!-- <td class="p-2">
              <button class="btn btn-success rounded-full w-24">Ver Más</button>
            </td> -->
          </tr>
          <tr>
            <td class="py-3 px-1">Los Tuercas{{name}}</td>
            <td class="py-3 px-1">Metropolitana{{region}}</td>
            <td class="py-3 px-1">Santiago{{comuna}}</td>
            <td class="py-3 px-1">2258457896{{num}}</td>
            <td class="py-3 px-1">3/5{{rating}}</td>
            <!-- <td class="p-2">
              <button class="btn btn-success rounded-full w-24">Ver Más</button>
            </td> -->
          </tr>
          
        </tbody>
      </table>
    </div>
    </div>
    
  </div>
</template>



