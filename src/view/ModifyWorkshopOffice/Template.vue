<template>
  <div class="grid grid-cols-1 p-3 place-items-center">
    <div class="">
      <h1 class="my-3 text-4xl font-bold text-center">
        Información de la sucursal
      </h1>
      <form @submit.prevent class="mt-12">
        <div>
          <div>
            <label class="label"> Region </label>
            <select :disabled="!getShow()" class="select input-bordered w-72">
              <option value="puentealto" selected>{{ getRegion() }}</option>
            </select>
          </div>
          <div>
            <label class="label"> Comuna </label>
            <select :disabled="!getShow()" class="select input-bordered w-72">
              <option value="puentealto" selected>{{ getCommune() }}</option>
            </select>
          </div>
          <div>
            <label class="label"> Dirección </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="txtDireccion"
              required
              :disabled="!getShow()"
            />
          </div>
          <div>
            <label class="label"> Telefono </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="txtPhone"
              required
              :disabled="!getShow()"
            />
          </div>
          <div>
            <label class="label"> Horario de atencion </label>
            <table>
              <tbody>
                <tr>
                  <td>
                    <label class="cursor-pointer label">
                      <span class="label-text">Lunes</span>
                      <input
                        id="cbxMonday"
                        type="checkbox"
                        class="toggle toggle-primary"
                        :disabled="!getShow()"
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureMonday"
                        :disabled="!getShow()"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureMonday"
                        :disabled="!getShow()"
                      />
                    </label>
                  </td>
                </tr>

                <tr>
                  <td>
                    <label class="cursor-pointer label">
                      <span class="label-text">Martes</span>
                      <input
                        id="cbxTuesday"
                        type="checkbox"
                        class="toggle toggle-primary ml-3"
                        :disabled="!getShow()"
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureTuesday"
                        :disabled="!getShow()"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureTuesday"
                        :disabled="!getShow()"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="cursor-pointer label">
                      <span class="label-text">Miercoles</span>
                      <input
                        id="cbxWednesday"
                        type="checkbox"
                        class="toggle toggle-primary ml-3"
                        :disabled="!getShow()"
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureWednesday"
                        :disabled="!getShow()"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureWednesday"
                        :disabled="!getShow()"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="cursor-pointer label">
                      <span class="label-text">Jueves</span>
                      <input
                        id="cbxThursday"
                        type="checkbox"
                        class="toggle toggle-primary ml-3"
                        :disabled="!getShow()"
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureThursday"
                        :disabled="!getShow()"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureThursday"
                        :disabled="!getShow()"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="cursor-pointer label">
                      <span class="label-text">Viernes</span>
                      <input
                        id="cbxFriday"
                        type="checkbox"
                        class="toggle toggle-primary ml-3"
                        :disabled="!getShow()"
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureFriday"
                        :disabled="!getShow()"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureFriday"
                        :disabled="!getShow()"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="cursor-pointer label">
                      <span class="label-text">Sabado</span>
                      <input
                        id="cbxSaturday"
                        type="checkbox"
                        class="toggle toggle-primary ml-3"
                        :disabled="!getShow()"
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureSaturday"
                        :disabled="!getShow()"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureSaturday"
                        :disabled="!getShow()"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label class="cursor-pointer label">
                      <span class="label-text">Domingo</span>
                      <input
                        id="cbxSunday"
                        type="checkbox"
                        class="toggle toggle-primary ml-3"
                        :disabled="!getShow()"
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureSunday"
                        :disabled="!getShow()"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureSunday"
                        :disabled="!getShow()"
                      />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-show="getShow()">
            <button v-on:click="enConstruccion()"
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
            >
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import OptionRegions from '../../components/optionRegions/Template.vue'
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    OptionRegions
  },
  setup(){
  const router = useRoute();
        
        onMounted(async function () {
            
            // console.log(regions)
            txtDireccion.value = router.params.workshop_office_address;
            txtPhone.value = router.params.workshop_office_phone;
            //Realizar petición para traer de lista de atenciones
            let attentions = await axios
                .post("http://localhost:8080/MyWorkshopOfficeAttention", {
                    headers: { "Content-type": "application/json" },
                    data: {
                        workshop_office_id: router.params.workshop_office_id,
                    },
                })
                .then(function (res) {
                    return res.data.response;
                });
            // timeApertureFriday.value =
            const days = [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
                "sunday",
            ];
            const idInputsAperture = [
                "timeApertureMonday",
                "timeApertureTuesday",
                "timeApertureWednesday",
                "timeApertureThursday",
                "timeApertureFriday",
                "timeApertureSaturday",
                "timeApertureSunday",
            ];
            for (let i = 0; i < 7; i++) {
                const horary = attentions.filter(
                    (attention) => attention.workshop_office_attention_day == days[i]
                );
                if (horary.length > 0) {
                    switch (days[i]) {
                        case "monday":
                            cbxMonday.checked = true;
                            timeApertureMonday.value =
                                horary[0].workshop_office_attention_aperture_time;
                            timeDepartureMonday.value =
                                horary[0].workshop_office_attention_departure_time;
                            break;
                        case "tuesday":
                            cbxTuesday.checked = true;
                            timeApertureTuesday.value =
                                horary[0].workshop_office_attention_aperture_time;
                            timeDepartureTuesday.value =
                                horary[0].workshop_office_attention_departure_time;
                            break;
                        case "wednesday":
                            cbxWednesday.checked = true;
                            timeApertureWednesday.value =
                                horary[0].workshop_office_attention_aperture_time;
                            timeDepartureWednesday.value =
                                horary[0].workshop_office_attention_departure_time;
                            break;
                        case "thursday":
                            cbxThursday.checked = true;
                            timeApertureThursday.value =
                                horary[0].workshop_office_attention_aperture_time;
                            timeDepartureThursday.value =
                                horary[0].workshop_office_attention_departure_time;
                            break;
                        case "friday":
                            cbxFriday.checked = true;
                            timeApertureFriday.value =
                                horary[0].workshop_office_attention_aperture_time;
                            timeDepartureFriday.value =
                                horary[0].workshop_office_attention_departure_time;
                            break;
                        case "saturday":
                            cbxSaturday.checked = true;
                            timeApertureSaturday.value =
                                horary[0].workshop_office_attention_aperture_time;
                            timeDepartureSaturday.value =
                                horary[0].workshop_office_attention_departure_time;
                            break;
                        case "sunday":
                            cbxSunday.checked = true;
                            timeApertureSunday.value =
                                horary[0].workshop_office_attention_aperture_time;
                            timeDepartureSunday.value =
                                horary[0].workshop_office_attention_departure_time;
                    }
                }
            }
        });
        function getShow() {
            if (sessionStorage.getItem("user_type_id") == 3) {
                console.log("DEVOLVI TRUE")
                return true;
            } else {
                console.log()
                return false;
            }
        }
        function getCommune() {
            //router.params.commune_name
            console.log(router.params)
            return router.params.commune_name;
        }

        function getRegion(){
          return sessionStorage.getItem('workshop_office_region')
        }
        function enConstruccion(){
          alert("Funcion en construccion...")
        }
        return {getCommune, getShow, getRegion, enConstruccion}
  }
}

</script>
