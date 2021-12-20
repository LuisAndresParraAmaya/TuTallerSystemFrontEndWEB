<template>
  <div style="display: flex; justify-content: center">
    <div
      class="text-left mt-9 p-4"
      style="border: 1px solid black; width: 50%; border-radius: 8px"
    >
      <div class="text-2xl">
        <label>{{ name }}</label
        ><br /><br />
      </div>
      <div class="text-2xl">
        <label>Precio: ${{ price }} CLP</label><br /><br />
      </div>
      <div class="text-2xl">
        <label>Tiempo estimado: {{ time }}</label
        ><br /><br />
      </div>
      <div class="text-2xl">
        <label>Descripción: {{ description }}</label
        ><br /><br />
      </div>
      <p class="text-2xl">{{ param }}</p>
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
                    disabled
                  />
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeApertureMonday"
                    disabled
                  />Hasta las
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeDepartureMonday"
                    disabled
                  />
                  <Suspense>
                    <template #default>
                      <FormTransBank
                       @setMount="setMount"
                      />
                    </template>
                  </Suspense>
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
                    disabled
                  />
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeApertureTuesday"
                    disabled
                  />Hasta las
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeDepartureTuesday"
                    disabled
                  />
                  <Suspense>
                    <template #default>
                      <FormTransBank
                      />
                    </template>
                  </Suspense>
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
                    disabled
                  />
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeApertureWednesday"
                    disabled
                  />Hasta las
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeDepartureWednesday"
                    disabled
                  />
                  <Suspense>
                    <template #default>
                      <FormTransBank
                       
                      />
                    </template>
                  </Suspense>
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
                    disabled
                  />
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeApertureThursday"
                    disabled
                  />Hasta las
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeDepartureThursday"
                    disabled
                  />
                  <Suspense>
                    <template #default>
                      <FormTransBank
                      />
                    </template>
                  </Suspense>
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
                    disabled
                  />
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeApertureFriday"
                    disabled
                  />Hasta las
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeDepartureFriday"
                    disabled
                  />
                  <Suspense>
                    <template #default>
                      <FormTransBank 
                      />
                    </template>
                  </Suspense>
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
                    disabled
                  />
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeApertureSaturday"
                    disabled
                  />Hasta las
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeDepartureSaturday"
                    disabled
                  />
                  <Suspense>
                    <template #default>
                      <FormTransBank 
                      />
                    </template>
                  </Suspense>
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
                    disabled
                  />
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeApertureSunday"
                    disabled
                  />Hasta las
                  <input
                    type="time"
                    class="input input-bordered w-auto"
                    id="timeDepartureSunday"
                    disabled
                  />
                  <Suspense>
                    <template #default>
                      <FormTransBank
                      />
                    </template>
                  </Suspense>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import axios from "axios";
import FormTransBank from "../../components/forms/Transbank/Transbank.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    FormTransBank,
  },
  setup() { 
    const router = useRoute();
    const { name, price, time, description } = router.params;
    onMounted(async function () {
      // console.log(regions)
      //Realizar petición para traer de lista de atenciones
      let attentions = await axios
        .post("http://localhost:8080/MyWorkshopOfficeAttention", {
          headers: { "Content-type": "application/json" },
          data: {
            workshop_office_id: sessionStorage.getItem("workshop_office_id"),
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
    return { name, price, time, description };
  },
};
</script>