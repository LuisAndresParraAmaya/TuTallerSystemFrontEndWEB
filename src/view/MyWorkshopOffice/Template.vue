<template>
  <div class="grid grid-cols-1 p-3 place-items-center">
    <div class="">
      <h1 class="my-3 text-4xl font-bold text-center">Sucursal</h1>
      <form @submit.prevent class="mt-12">
        <!-- <div> -->
        <!-- <div>
            <label class="label"> Region </label>

            <select class="select input-bordered w-72" disabled>
              <option value="region metropolitana">Region metropolitana</option>
            </select>
            <button class="btn ml-5" disabled>E</button>
          </div> -->
        <!-- <div>
            <label class="label"> Comuna </label>
            <select class="select input-bordered w-72" disabled>
              <option value="puentealto" selected>Santiago</option>
            </select>
            <button class="btn ml-5" disabled>E</button>
          </div> -->
        <!-- <div>
            <label class="label"> Dirección </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
            />
            <button class="btn ml-5" disabled>E</button>
          </div> -->
        <!-- <div>
            <label class="label"> Telefono </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
            />
            <button class="btn ml-5" disabled>E</button>
          </div> -->
        <!-- <div>
            <label class="label"> Horario de atencion </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="workshop_name"
              required
              disabled
            />
            <button class="btn ml-5" disabled>E</button>
          </div> -->
        <div>
          <button
            v-on:click="NavigationToRoute('ModifyWorkshopOffice')"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Información de la sucursal
          </button>
        </div>
        <div>
          <div>
            <button
              id="MyWorkshopOffice_btnEmployees"
              v-on:click="NavigationToRoute('ShowWorkshopEmployee')"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Empleados
            </button>
          </div>
          <div>
            <button
              id="OfferList"
              v-on:click="Redirect('MyWorkshopOfficeSubscription')"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Subscripción
            </button>
          </div>
          <div>
            <button
              v-on:click="NavigationToRoute('WorkShopOfficeServiceList')"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Servicios Automotrices
            </button>
          </div>
          
          <div v-show="getShow()">
            <button
              v-on:click="enConstruccion()"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Suscripción
            </button>
          </div>
          <div v-show="getShow()">
            <button
              v-on:click="NavigationToRoute('MyWorkShopOfficeAdsList')"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
              id="MyWorkshopOffice_btnAdvertisement"
            >
              Anuncios Publicitarios
            </button>
          </div>
          <div>
            <button
              id="MyWorkshopOffice_btnEmployees"
              v-on:click="NavigationToRoute('FileWorkShopOfficeComplaint')"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              RECLAMO
            </button>
          </div>
          <div>
            <button
              v-on:click="enConstruccion()"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Evaluaciones
            </button>
          </div>
          <div>
            <button
              id="OfferList"
              v-on:click="Redirect('OfferList')"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Ofertas
            </button>
          </div>
          <!-- <button
            v-on:click="viewWorkshop"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Eliminar Sucursal
          </button> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script src="./Logic.js"></script>

