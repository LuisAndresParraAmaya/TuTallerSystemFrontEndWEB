<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
        <h1 class="my-3 text-4xl font-bold text-center mb-16">
        Agregar sucursal
      </h1>
    <div>
      <form @submit.prevent class="m-14">
        <div class="form-control mt-14">
          <label class="label">
            <span class="label-text">Región de sucursal</span>
          </label>
          <select
            class="select input-bordered"
            name=""
            id="selectRegion"
            required
          >
            <option selected>REGION METROPOLITANA</option>
          </select>
          <label class="label">
            <span class="label-text">Comuna de sucursal</span>
          </label>
          <select
            class="select input-bordered"
            name=""
            id="selectCommune"
            required
          >
            <option selected>SANTIAGO</option>
          </select>
          <label class="label">
            <span class="label-text">Dirección de sucursal</span>
          </label>
          <input
            type="text"
            class="input input-bordered"
            id="txtAddress"
            required
          />

          <label class="label">
            <span class="label-text">Teléfono de sucursal</span>
          </label>
          <input
            type="number"
            class="input input-bordered"
            id="txtPhone"
            required
          />
          <label class="label">
            <span class="label-text">Horario de atención de sucursal</span>
          </label>
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

          <button
            v-on:click="getSchedule"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Agregar sucursal
          </button>
        </div>
      </form>
    </div>
    </div>
 </div>
</template>
<script>
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const route = useRoute();
    async function getSchedule() {
      let workshop_office_attention = [];
      // CONDITIONS MONDAY
      if(txtPhone.value.length > 8){
        alert("El numero de telefono es muy largo");
        return
      }
      if (cbxMonday.checked == true && timeApertureMonday.value == "") {
        alert("debe ingresar hora de apertura del dia lunes");
        return;
      }
      if (
        cbxMonday.checked == true &&
        timeApertureMonday.value !== "" &&
        timeDepartureMonday.value == ""
      ) {
        alert("debe ingresar hora de cierre del dia lunes");
        return;
      }
      if (
        cbxMonday.checked == true &&
        timeApertureMonday.value !== "" &&
        timeDepartureMonday.value !== ""
      ) {
        //HACER PUSH
        workshop_office_attention.push({
          workshop_office_attention_day: "monday",
          workshop_office_attention_aperture_time: timeApertureMonday.value,
          workshop_office_attention_departure_time: timeDepartureMonday.value,
        });
      }
      // CONDITIONS TUESDAY
      if (cbxTuesday.checked == true && timeApertureTuesday.value == "") {
        alert("debe ingresar hora de apertura del dia martes");
        return;
      }
      if (
        cbxTuesday.checked == true &&
        timeApertureTuesday.value !== "" &&
        timeDepartureTuesday.value == ""
      ) {
        alert("debe ingresar hora de cierre del dia martes");
        return;
      }
      if (
        cbxTuesday.checked == true &&
        timeApertureTuesday.value !== "" &&
        timeDepartureTuesday.value !== ""
      ) {
        //HACER PUSH
        workshop_office_attention.push({
          workshop_office_attention_day: "tuesday",
          workshop_office_attention_aperture_time: timeApertureTuesday.value,
          workshop_office_attention_departure_time: timeDepartureTuesday.value,
        });
      }
      // CONDITIONS WEDNESDAY
      if (cbxWednesday.checked == true && timeApertureWednesday.value == "") {
        alert("debe ingresar hora de apertura del dia miercoles");
        return;
      }
      if (
        cbxWednesday.checked == true &&
        timeApertureWednesday.value !== "" &&
        timeDepartureWednesday.value == ""
      ) {
        alert("debe ingresar hora de cierre del dia miercoles");
        return;
      }
      if (
        cbxWednesday.checked == true &&
        timeApertureWednesday.value !== "" &&
        timeDepartureWednesday.value !== ""
      ) {
        //HACER PUSH
        workshop_office_attention.push({
          workshop_office_attention_day: "wednesday",
          workshop_office_attention_aperture_time: timeApertureWednesday.value,
          workshop_office_attention_departure_time:
            timeDepartureWednesday.value,
        });
      }
      // CONDITIONS THURSDAY
      if (cbxThursday.checked == true && timeApertureThursday.value == "") {
        alert("debe ingresar hora de apertura del dia jueves");
        return;
      }
      if (
        cbxThursday.checked == true &&
        timeApertureThursday.value !== "" &&
        timeDepartureThursday.value == ""
      ) {
        alert("debe ingresar hora de cierre del dia jueves");
        return;
      }
      if (
        cbxThursday.checked == true &&
        timeApertureThursday.value !== "" &&
        timeDepartureThursday.value !== ""
      ) {
        //HACER PUSH
        workshop_office_attention.push({
          workshop_office_attention_day: "thursday",
          workshop_office_attention_aperture_time: timeApertureThursday.value,
          workshop_office_attention_departure_time: timeDepartureThursday.value,
        });
      }
      // CONDITIONS FRIDAY
      if (cbxFriday.checked == true && timeApertureFriday.value == "") {
        alert("debe ingresar hora de apertura del dia viernes");
        return;
      }
      if (
        cbxFriday.checked == true &&
        timeApertureFriday.value !== "" &&
        timeDepartureFriday.value == ""
      ) {
        alert("debe ingresar hora de cierre del dia viernes");
        return;
      }
      if (
        cbxFriday.checked == true &&
        timeApertureFriday.value !== "" &&
        timeDepartureFriday.value !== ""
      ) {
        //HACER PUSH
        workshop_office_attention.push({
          workshop_office_attention_day: "friday",
          workshop_office_attention_aperture_time: timeApertureFriday.value,
          workshop_office_attention_departure_time: timeDepartureFriday.value,
        });
      }
      // CONDITIONS SATURDAY
      if (cbxSaturday.checked == true && timeApertureSaturday.value == "") {
        alert("debe ingresar hora de apertura del dia sabado");
        return;
      }
      if (
        cbxSaturday.checked == true &&
        timeApertureSaturday.value !== "" &&
        timeDepartureSaturday.value == ""
      ) {
        alert("debe ingresar hora de cierre del dia sabado");
        return;
      }
      if (
        cbxSaturday.checked == true &&
        timeApertureSaturday.value !== "" &&
        timeDepartureSaturday.value !== ""
      ) {
        //HACER PUSH
        workshop_office_attention.push({
          workshop_office_attention_day: "saturday",
          workshop_office_attention_aperture_time: timeApertureSaturday.value,
          workshop_office_attention_departure_time: timeDepartureSaturday.value,
        });
      }
      // CONDITIONS SUNDAY
      if (cbxSunday.checked == true && timeApertureSunday.value == "") {
        alert("debe ingresar hora de apertura del dia domingo");
        return;
      }
      if (
        cbxSunday.checked == true &&
        timeApertureSunday.value !== "" &&
        timeDepartureSunday.value == ""
      ) {
        alert("debe ingresar hora de cierre del dia domingo");
        return;
      }
      if (
        cbxSunday.checked == true &&
        timeApertureSunday.value !== "" &&
        timeDepartureSunday.value !== ""
      ) {
        //HACE PUSH
        workshop_office_attention.push({
          workshop_office_attention_day: "sunday",
          workshop_office_attention_aperture_time: timeApertureSunday.value,
          workshop_office_attention_departure_time: timeDepartureSunday.value,
        });
      }
      if(workshop_office_attention.length == 0){
        alert('Debe registrar por lo menos un dia de atención en la sucursal.')
        return 
      }
      await axios.post("http://localhost:8080/AddWorkshopOffice", {
        headers: { "Content-type": "application/json" },
        data: {
          workshop_id: route.params.workshop_id,
          commune_id: 54,
          workshop_office_suscription_id: 1,
          workshop_office_address: txtAddress.value,
          workshop_office_phone: txtPhone.value,
          ////Informacion relacionada a el horario de atencion
          workshop_office_attention: workshop_office_attention,
        },
      }).then(function (res) {
            if(res.data.Response == 'Office Attention Success'){
              alert('La sucursal fue registrada con exito')
            }
            if(res.data.Response == 'Address already in use'){
              alert('La dirección ingresada corresponde a otra sucursal')
            }
        }).catch(function (error) {
            console.log(error);
        });;
    }
    return { getSchedule };
  },
};
// PRIMERO CREAR OFFICE, LUEGO INGRESAR HORARIO DE ATENCION
//TODO: RECUPERAR OFFICE_ID PARA ENVIAR
//     workshop_office_attention,
</script>




