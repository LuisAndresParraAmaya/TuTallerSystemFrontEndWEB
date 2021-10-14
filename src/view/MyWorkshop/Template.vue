<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <div class="grid place-items-center text-center p-3">
        <h1 class="my-3 text-4xl font-bold">Los Tuercas</h1>
        <form @submit.prevent class="mt-12">
          <div>
            <div>
              <label class="label">Nombre taller</label>
              <span>
                <input
                  type="text"
                  class="input input-bordered w-72"
                  id="txtName"
                  required
                  disabled
                />
              </span>
            </div>
            <!-- <div>
              <label class="label"> Telefono </label>
              <select>
                <option>+56 Chile</option>
              </select>
              <span>
                <input
                  type="text"
                  class="input input-bordered w-72"
                  id="txtPhone"
                  required
                  disabled
                />
              </span>
            </div> -->
               <label class="label"> Telefono </label>

            <div style="display: flex">
              
           <select class="border">
              <option>+56 Chile</option>
            </select>
          <input type="number" class="
                    w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    border-coolWhite-300
                    bg-coolWhite-50
                    text-coolWhite-800
                  " id="txtPhone"  />
          </div>
            <div>
              <label class="label">Descripción del taller</label>
              <textarea
                style="resize: none"
                class="input-bordered textarea w-full"
                name="descriptionArea"
                id="txtDescription"
                cols="30"
                rows="5"
                disabled
              ></textarea>
            </div>

            <button
              v-on:click="showAlert()"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const router = useRoute();
onMounted(function () {
  const { workshop_description, workshop_name, workshop_phone } = router.params;
  txtDescription.value = workshop_description;
  txtPhone.value = workshop_phone;
  txtName.value = workshop_name;
});
function showAlert(){
  alert("Función en construcción")
}
</script>



