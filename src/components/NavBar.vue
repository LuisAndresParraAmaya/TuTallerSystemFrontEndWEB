<template>
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div class="px-2 mx-2 navbar-start">
            <span class="text-lg font-bold">TuTaller</span>
        </div>
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
            <div class="flex items-stretch">
                <a class="btn btn-ghost btn-sm rounded-btn">Inicio</a>
                <a class="btn btn-ghost btn-sm rounded-btn">Contactarnos</a>
                <a class="btn btn-ghost btn-sm rounded-btn">Acerca De</a>
                <a class="btn btn-ghost btn-sm rounded-btn">Ver Talleres</a>
                <router-link
                    v-if="!isAuthenticated"
                    to="/Login"
                    class="btn btn-success btn-sm rounded-btn"
                >
                    <a>Iniciar Sesión</a>
                </router-link>
                <div v-else>
                     <router-link
                        to="/ModifyProfile"
                        class="btn btn-ghost btn-sm rounded-btn"
                        @click="isAuthenticated = false"
                    >Modificar Perfil</router-link>
                    <router-link
                        to="/myServices"
                        class="btn btn-ghost btn-sm rounded-btn"
                    >Mis Servicios</router-link>
                    <router-link
                        to="/Login"
                        class="btn btn-error btn-sm rounded-btn"
                        @click="isAuthenticated = false"
                    >Cerrar Sesión</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { isAuthenticated } from '../helpers/userAuth.js'
</script>