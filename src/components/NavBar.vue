<template>
  <div
    class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
  >
    <div class="px-2 mx-2 navbar-start">
      <span class="text-lg font-bold">TuTaller</span>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
      <div class="flex items-stretch">
        <router-link to="/">
          <a class="btn btn-ghost btn-sm rounded-btn mt-2">Inicio</a>
        </router-link>
        <!--ver lista de talleres | todos los usuarios-->
        <!-- <a class="btn btn-ghost btn-sm rounded-btn">Ver Talleres</a> -->
        <!--Todos los que aun no han iniciado sesion-->
        <router-link
          v-show="isAuthenticated == false"
          class="btn btn-success btn-sm rounded-btn"
          to="/Login"
          >Iniciar Sesión</router-link
        >
        <div v-show="isAuthenticated == true">
          <router-link
            to="/ModifyProfile"
            class="btn btn-ghost btn-sm rounded-btn"
            @click="isAuthenticated = false"
            >Modificar Perfil</router-link
          >
          <div class="dropdown">
            <div tabindex="0" class="btn">Gestionar Talleres</div>
            <ul
              tabindex="0"
              class="
                p-2
                shadow
                menu
                dropdown-content
                bg-neutral
                rounded-box
                text-white
                w-52
              "
            >
              <li>
                <a v-on:click="NavigateToRoute('MyWorkshopList')">Mis talleres</a>
              </li>
              <li>
                <a v-on:click="NavigateToRoute('RealizePostulation')">Postular taller</a>
              </li>
              <li>
                <a v-on:click="NavigateToRoute('ListPostulation')">Talleres postulados</a>
              </li>
            </ul>
          </div>
          <!--Solo administrador de sistema puede verlo--->
          <!-- <router-link
            to="/ListPostulation"
            class="btn btn-ghost btn-sm rounded-btn"
            @click="isAuthenticated = false"
            >Listar Talleres Postulados</router-link
          > -->
          <router-link
            to="/Login"
            class="btn btn-error btn-sm rounded-btn"
            v-on:click="logout"
            >Cerrar Sesión</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../components/Logic.js"></script>