<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">
        Modificar Perfil
      </h1>
      <div class="bg-base-200 flex justify-center">
        <form
          @submit.prevent
          class="space-y-12 ng-untouched ng-pristine ng-valid mt-5 mb-10"
          style="width: 45%"
        >
          <div class="form-control">
            <label class="label">
              <span class="label-text">Nombre</span>
            </label>
            <input
              type="text"
              placeholder="Nombre"
              class="input input-bordered"
              id="txtName"
            />
            <label class="label">
              <span class="label-text">Apellido</span>
            </label>
            <input
              type="text"
              placeholder="Apellido"
              class="input input-bordered"
              id="txtLastname"
            />
            <label class="label">
              <span class="label-text">Rut</span>
            </label>
            <input
              type="text"
              placeholder="Rut"
              class="input input-bordered"
              id="txtNewRut"
              disabled
            />
            <label class="label">
              <span class="label-text">Correo Electrónico</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              class="input input-bordered"
              id="txtEmail"
            />
            <label class="label">
              <span class="label-text">Telefono</span>
            </label>
            <div style="display: flex">
              <select class="border">
                <option>+56 Chile</option>
              </select>
              <input
                type="text"
                placeholder="Telefono"
                class="input input-bordered ml-3 w-full"
                id="txtPhone"
              />
            </div>
            <button
              class="w-full mt-5 px-8 py-3 rounded-md btn text-coolGray-50"
              @click="goToChangePassword()"
            >
              Cambiar Contraseña
            </button>
            <button
              class="w-full mt-5 px-8 py-3 rounded-md btn text-coolGray-50"
              @click="goToDeleteAccount()"
            >
              Borrar Cuenta
            </button>
            <button
              @click="modifyProfile()"
              class="w-full mt-5 px-8 py-3 rounded-md btn text-coolGray-50"
            >
              Actualizar Datos
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import { isAuthenticated } from "../../helpers/userAuth";
import { formatRut } from "../../utils/formaters";
import { calculateRutCheckDigit } from "../../utils/calculators";
onMounted(function () {
  txtName.value = sessionStorage.getItem("user_name");
  txtNewRut.value = formatRut(
    calculateRutCheckDigit(formatRut(sessionStorage.getItem("user_rut")))
  );
  txtLastname.value = sessionStorage.getItem("user_last_name");
  txtPhone.value = sessionStorage.getItem("user_phone");
  txtEmail.value = sessionStorage.getItem("user_email");
  isAuthenticated.value = true;
});
import { useRouter } from "vue-router";
const router = useRouter();
import axios from "axios";

async function modifyProfile() {
  let passIssue = false;
  // Validacion de campos vacios
  const values = [
    { name: "Nombre", value: txtName.value },
    { name: "Apellido", value: txtLastname.value },
    { name: "Correo Electrónico", value: txtEmail.value },
    { name: "Telefono", value: txtPhone.value },
  ];
  for (let i = 0; i < values.length; i++) {
    if (values[i].value.trim().length == 0) {
      alert("debes rellenar el campo: " + values[i].name);
      return;
    }
  }
  if (txtPhone.value.trim().length < 9) {
    alert("Debe ingresar el numero de telefono completo, ejemplo: 912345678");
    return;
  }
  const response = prompt("Confirma tu contraseña actual para modificar tu perfil");
  if (response.trim().length == 0) {
    alert("debes ingresar tu contraseña actual");
    return;
  } else {
    // Consultar si es asi
    await axios
      .post("http://localhost:8080/VerifyPasswordCorrect", {
        headers: {
          "Content-type": "application/json",
        },
        data: {
          user_password: response,
          user_email: sessionStorage.getItem("user_email"),
        },
      })
      .then(function (response) {
        if (response.data.Response == "Actual Password Failed") {
          alert("La contraseña actual ingresada no coincide");
          passIssue = true;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    //ver si cambiara de correo electronico si es asi enviar codigo a ese correo
    if (
      txtEmail.value !== sessionStorage.getItem("user_email") &&
      passIssue == false
    ) {
      let isValidate = false;
      axios
        .post("http://localhost:8080/SendValidateCodeEmail", {
          headers: {
            "Content-type": "application/json",
          },
          data: {
            user_email: sessionStorage.getItem("user_email"),
            user_new_email: txtEmail.value,
          },
        })
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
      const code = prompt(
        "Porfavor ingresa el codigo que fue enviado al correo: " +
          txtEmail.value
      );
      if (code.trim().length == 0) {
        alert("debes ingresar un codigo");
        return;
      } else {
        //otro axios para consultar en db coincidencia de codigos....
        await axios
          .post("http://localhost:8080/SendValidateEmailCode", {
            headers: {
              "Content-type": "application/json",
            },
            data: {
              user_email: sessionStorage.getItem("user_email"),
              recovery_code: code,
            },
          })
          .then(function (res) {
            if (res.data.Response === "Validate Email Success") {
              alert("el nuevo correo electrónico fue validado correctamente");
              isValidate = true;
            }
            if (res.data.Response === "Validate Email Failed") {
              alert("el codigo ingresado es erroneo");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      if (isValidate == false) {
        return;
      }
    }
  }
  if (passIssue == true) {
    return;
  }
  axios
    .post("http://localhost:8080/ModifyProfile", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_name: txtName.value,
        user_last_name: txtLastname.value,
        user_email: txtEmail.value,
        user_phone: txtPhone.value,
        user_rut: sessionStorage.getItem("user_rut"),
        user_password: response,
      },
    })
    .then(function (response) {
      if (response.data.Response == "Operation Success") {
        alert("Sus datos fueron actualizados correctamente");
        return;
      }
      if (response.data.Response == "Actual Password Failed") {
        alert("La contraseña actual ingresada no coincide");
        return;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function goToDeleteAccount() {
  isAuthenticated.value = true;
  router.push("/DeleteAccount");
}

function goToChangePassword() {
  isAuthenticated.value = true;
  router.push("/ChangePassword");
}
</script>

