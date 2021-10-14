<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
<h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Iniciar Sesión</h1>
  <div class="bg-base-200 flex justify-center">
          <div class="mb-8 text-center">
          </div>
          <form style="width: 50%; padding-bottom: 5%"
            @submit.prevent
            class="space-y-12 ng-untouched ng-pristine ng-valid mt-12"
          >
            <div class="space-y-4">
              <div>
                <label for="email" class="block mb-2 text-sm"
                  >Correo Electrónico</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ejemplo@TuTaller.cl"
                  class="
                    w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    border-coolWhite-300
                    bg-coolWhite-50
                    text-coolWhite-800
                  "
                  required
                />
              </div>
              <div>
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm">Contraseña</label>
                  <router-link
                    to="/RecoveryPassword"
                    class="text-xs hover:underline text-coolWhite-600"
                    >¿Olvidaste tu contraseña?
                  </router-link>
                </div>
                <input
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="*****"
                  class="
                    w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    border-coolWhite-300
                    bg-coolWhite-50
                    text-coolWhite-800
                  "
                  required
                />
              </div>
            </div>
            <div class="space-y-2" style="margin-top: 7%">
                <button
                  v-on:click="login"
                  class="w-full px-8 rounded-md btn text-coolWhite-50"
                >
                  Iniciar sesión
                </button>
              <p class="px-6 text-sm text-center text-coolWhite-600">
                ¿No tienes cuenta?
                <router-link
                  to="/CreateAccount"
                  class="hover:underline text-violet-600"
                  >¡Crea tu cuenta ahora!</router-link
                >
              </p>
            </div>
          </form>
    </div>
  </div>
  </div>
</template>
<script src="../../view/Login/Logic.js"></script>