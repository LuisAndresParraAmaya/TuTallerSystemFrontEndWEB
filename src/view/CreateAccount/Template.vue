<template>
<div style="display:flex; justify-content: center">
<div class="border mockup-window bg-base-300" style="width: 65%;">
<h1 style="text-align: center; font-size: 45px; margin-bottom: 3%" >Crear Cuenta</h1>
  <div class="bg-base-200 flex justify-center">
    <div>
      <form @submit.prevent class="mt-6 pb-10">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nombre</span>
          </label>
          <input
            type="text"
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
            id="txtName"
          />

          <label class="label">
            <span class="label-text">Apellido</span>
          </label>
          <input
            type="text"
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
            id="txtLastName"
          />

          <label class="label">
            <span class="label-text">Rut</span>
          </label>
          <input type="text" class="
                    w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    border-coolWhite-300
                    bg-coolWhite-50
                    text-coolWhite-800
                  " id="txtRut"  />

          <label class="label">
            <span class="label-text">Correo electrónico</span>
          </label>
          <input type="email" class="
                    w-full
                    px-3
                    py-2
                    border
                    rounded-md
                    border-coolWhite-300
                    bg-coolWhite-50
                    text-coolWhite-800
                  " id="email"  />
                    <label class="label">
            <span class="label-text">Telefono</span>
          </label>
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
                  " id="nmbPhone"  />
          </div>
          <label class="label">
            <span class="label-text">Contraseña</span>
          </label>
          <input
            type="password"
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
            id="password"
          />

          <label class="label">
            <span class="label-text">Confirmar contraseña</span>
          </label>
          <input
            type="password"
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
            id="passwordConfirm"
          />

          <button
            @click="createAccount()"
            class="w-full px-8 rounded-md btn text-coolWhite-50 mt-5"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const createAccount = () => {
  const inputs = [{name: 'Nombre', value: txtName.value},
    {name: 'Apellido', value: txtLastName.value},
    {name: 'Rut', value: txtRut.value},
    {name: 'Correo Electrónico', value: email.value},
    {name: 'Teléfono', value: nmbPhone.value},
    {name: 'Contraseña', value: password.value},
    {name: 'Confirmar Contraseña', value: passwordConfirm.value}
  ]
  for(let input of inputs){
    if(input.value.trim().length == 0){
      alert('Debe rellenar el campo: '+input.name)
      return
    }
  }
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if(!emailRegex.test(email.value)){
    alert('Debe ingresar una dirección de correo electrónico valido')
    return
  }
  if(nmbPhone.value.trim().length < 9){
    alert('Debe ingresar el numero de telefono completo, ejemplo: 912345678')
    return
  }
  if(password.value !== passwordConfirm.value){
      alert('Las contraseñas no coinciden.')
      return
  }
  axios
    .post("http://localhost:8080/CreateAccount", {
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user_rut: txtRut.value,
        user_type_id: 2,
        user_name: txtName.value,
        user_last_name: txtLastName.value,
        user_email: email.value,
        user_phone: nmbPhone.value,
        user_password: password.value,
        user_status: "enabled",
      },
    })
    .then(function (response) {
      const res = response.data.Response
      const msg = ['already in use', 'ya esta en uso']
      const field = ['Rut ', 'Email ', 'Phone ']
      if(res == field[0]+msg[0]){
        alert('El rut '+msg[1])
        return
      }
      if(res == field[1]+msg[0]){
        alert('El correo electrónico '+msg[1])
        return
      }
      if(res == field[2]+msg[0]){
        alert('El telefono '+msg[1])
        return
      }

      if(res == 'Create Account Success'){
        alert("Su cuenta ha sido creada con exito, ya puede iniciar sesión")
      }
      router.push("/Login");
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>