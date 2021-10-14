<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 p-1 place-items-center">
    <div class="lg:col-start-2 lg:col-span-2 lg:w-3/4 p-2">
      <h1 class="my-3 text-4xl font-bold text-center mb-20 mt-12">
        Realizar Publicidad de Taller
      </h1>
      <form @submit.prevent>
        <div>
          <label class="label">Nombre anuncio:</label>
          <input
            type="text"
            class="
              px-3
              py-3
              placeholder-gray-400
              text-gray-600
              relative
              bg-white
              rounded
              text-sm
              border border-gray-400
              outline-none
              focus:outline-none
              focus:ring
              w-full
            "
            id="adsName"
          />
          <label class="label">Monto de Puja:</label>
          <input
            type="number"
            class="
              px-3
              py-3
              placeholder-gray-400
              text-gray-600
              relative
              bg-white
              rounded
              text-sm
              border border-gray-400
              outline-none
              focus:outline-none
              focus:ring
              w-full
            "
            id="adspuja"
          />
          <div class="flex place-items-center mt-5">
            <label class="label">Cargar imagen:</label>
            <label class="w-auto
                m-auto
                p-2
                rounded-full
                bg-black
                hover:bg-amber-600
                text-coolGray-50"> 
                <span>Cargar Imagen</span>
                <input type="file" class="hidden" id="adsimagen" />                
            </label>            
          </div>
        </div>
        <div>
          <button
            class="
              w-full
              py-2
              rounded-md
              bg-green-600
              hover:bg-green-700
              text-coolGray-50
              mt-5
            "
          >
            Añadir publicidad
          </button>
        </div>
      </form>
    </div>
  </div>
</template>