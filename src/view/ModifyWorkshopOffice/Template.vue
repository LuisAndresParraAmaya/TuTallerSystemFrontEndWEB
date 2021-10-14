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

            <select class="select input-bordered w-72">
              <option value="region metropolitana">Region metropolitana</option>
            </select>
          </div>
          <div>
            <label class="label"> Comuna </label>
            <select class="select input-bordered w-72">
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
            />
          </div>
          <div>
            <label class="label"> Telefono </label>
            <input
              type="text"
              class="input input-bordered w-72"
              id="txtPhone"
              required
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
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureMonday"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureMonday"
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
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureTuesday"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureTuesday"
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
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureWednesday"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureWednesday"
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
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureThursday"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureThursday"
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
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureFriday"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureFriday"
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
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureSaturday"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureSaturday"
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
                      />
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeApertureSunday"
                      />Hasta las
                      <input
                        type="time"
                        class="input input-bordered w-auto"
                        id="timeDepartureSunday"
                      />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button
              v-on:click="sendPostulation"
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
<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
const router = useRoute();
// const workshop_office_id = router.params.workshop_office_id
function getCommune() {
  //router.params.commune_name
  return router.params.commune_name;
}
onMounted(async function () {
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
  console.log("attentions:", attentions);
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
    )
    if(horary.length > 0){
      console.log("se encontro horario en el dia: "+days[i])
      console.log("el horario es el siguiente:", horary)
      switch(days[i]){
        case "monday":
            cbxMonday.checked = true
            timeApertureMonday.value =  horary[0].workshop_office_attention_aperture_time
            timeDepartureMonday.value =  horary[0].workshop_office_attention_departure_time
        break
        case "tuesday":
            cbxTuesday.checked = true
            timeApertureTuesday.value =  horary[0].workshop_office_attention_aperture_time
            timeDepartureTuesday.value =  horary[0].workshop_office_attention_departure_time
        break
        case "wednesday":
            cbxWednesday.checked = true
            timeApertureWednesday.value =  horary[0].workshop_office_attention_aperture_time
            timeDepartureWednesday.value =  horary[0].workshop_office_attention_departure_time
        break
        case "thursday":
            cbxThursday.checked = true
            timeApertureThursday.value =  horary[0].workshop_office_attention_aperture_time
            timeDepartureThursday.value =  horary[0].workshop_office_attention_departure_time
        break
        case "friday":
            cbxFriday.checked = true
            timeApertureFriday.value =  horary[0].workshop_office_attention_aperture_time
            timeDepartureFriday.value =  horary[0].workshop_office_attention_departure_time
        break
        case "saturday":
            cbxSaturday.checked = true
            timeApertureSaturday.value =  horary[0].workshop_office_attention_aperture_time
            timeDepartureSaturday.value =  horary[0].workshop_office_attention_departure_time
        break
        case "sunday":
            cbxSunday.checked = true
            timeApertureSunday.value =  horary[0].workshop_office_attention_aperture_time
            timeDepartureSunday.value =  horary[0].workshop_office_attention_departure_time
      }
    }
  }
})
// onBeforeCreate(async function () {
//   timeApertureMonday.value = '66:66:66'
// })
</script>
