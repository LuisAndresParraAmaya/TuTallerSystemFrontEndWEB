<template>
  <nav
    class="
      relative
      flex flex-wrap
      items-center
      justify-between
      px-2
      py-3
      shadow-lg
      bg-neutral
      mb-3
    "
  >
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold">TuTaller</span>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
      <div>
        <router-link to="/">
          <a class="btn btn-ghost btn-sm rounded-btn mt-2">Inicio</a>
        </router-link>
        <!--ver lista de talleres | todos los usuarios-->
        <!-- <a class="btn btn-ghost btn-sm rounded-btn">Ver Talleres</a> -->
        <!--Todos los que aun no han iniciado sesion-->
                <router-link
          to="/RealizePay"
          ><a class="btn btn-warning btn-sm rounded-btn mt-2">Ir a Pagar</a></router-link
        >
        <router-link
          to="/WorkShopList"
          ><a class="btn btn-ghost btn-sm rounded-btn mt-2">Ver Sucursales Automotrices</a></router-link
        >

        <router-link
          v-show="isAuthenticated == false"
          class="btn btn-success btn-sm rounded-btn"
          to="/Login"
          >Iniciar Sesión</router-link
        >
          <i class="fas fa-bars"
            ><div class="space-y-2">
              <span class="block w-8 h-1 bg-white"></span>
              <span class="block w-8 h-1 bg-white"></span>
              <span class="block w-8 h-1 bg-white"></span></div
          ></i>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              v-on:click="navegarFalse('/')"
            >
              <i class="f text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Inicio</span
              >
            </button>
          </li>
          <li class="nav-item" v-show="isAuthenticated == true">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              v-on:click="navegarTrue('WorkshopList')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Ver Sucursales Automotrices</span
              >
            </button>
          </li>
          <li class="nav-item">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              v-on:click="navegarFalse('FileSupportTicket')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Soporte</span
              >
            </button>
          </li>
          <li class="nav-item" v-show="isAuthenticated == false">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              @click="navegarFalse('Login')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Iniciar Sesión</span
              >
            </button>
          </li>
          <li class="nav-item" v-show="isAuthenticated == true">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              v-on:click="NavigateToRoute('ModifyProfile')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Modificar Perfil</span
              >
            </button>
          </li>
          <li class="nav-item" v-show="isAuthenticated == true">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              v-on:click="NavigateToRoute('MyWorkshopList')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Mis talleres</span
              >
            </button>
          </li>
          <li class="nav-item" v-show="isAuthenticated == true">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              v-on:click="NavigateToRoute('RealizePostulation')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Postular taller</span
              >
            </button>
          </li>
          <li class="nav-item" v-show="getShow() && isAuthenticated == true">
            <button
              class="
                px-3
                py-2
                flex
                items-center
                text-xs
                uppercase
                font-bold
                leading-snug
                text-white
                hover:opacity-75
              "
              v-on:click="NavigateToRoute('ListPostulation')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Talleres postulados</span
              >
            </button>
          </li>

          <button
            v-show="isAuthenticated == true"
            class="btn btn-error btn-sm rounded-btn"
            v-on:click="logout()"
          >
            Cerrar Sesión
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script src="./Logic.js"></script>