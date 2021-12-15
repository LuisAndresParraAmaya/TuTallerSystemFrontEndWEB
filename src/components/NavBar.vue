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
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="
          w-full
          relative
          flex
          justify-between
          lg:w-auto
          px-4
          lg:static lg:block lg:justify-start
        "
      >
        <button
          class="
            text-sm
            font-bold
            leading-relaxed
            inline-block
            mr-4
            py-2
            whitespace-nowrap
            uppercase
            text-white
          "
        >
          TuTaller
        </button>
        <button
          class="
            text-white
            cursor-pointer
            text-xl
            leading-none
            px-3
            py-1
            border border-solid border-transparent
            rounded
            bg-transparent
            block
            lg:hidden
            outline-none
            focus:outline-none
          "
          type="button"
          v-on:click="toggleNavbar()"
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
              v-on:click="navegarTrue('WorkshopOfficeWorkList')"
            >
              <i class="text-lg leading-lg text-white opacity-75" /><span
                class="ml-2"
                >Servicios</span
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