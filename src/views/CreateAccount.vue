<template>
    <div class="flex flex-col w-full lg:flex-row">
        <div class="grid flex-grow card rounded-box place-items-center">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <p class="text-center text-2xl">Crear Cuenta</p>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Nombre</span>
                        </label>
                        <input
                            id="thename"
                            type="text"
                            placeholder=""
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Apellido</span>
                        </label>
                        <input id="lastname" type="text" placeholder="******" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Rut</span>
                        </label>
                        <input id="rut" type="text" placeholder="11.111.111-1" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Correo Electrónico</span>
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="ejemplo@gmail.com"
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Teléfono/Celular</span>
                        </label>
                        <input id="phone" type="text" placeholder="12345678" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Contraseña</span>
                        </label>
                        <input id="pass" type="text" placeholder="******" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirmar Contraseña</span>
                        </label>
                        <input type="text" placeholder="******" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input @click="createAccount()" type="button" value="Registrarse" class="btn btn-neutral mt-3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
const router = useRouter()
const createAccount = () => {
    axios.post('http://localhost:8080/CreateAccount', {
        headers: {
            "Content-type": "application/json"
        },
        data: {
            user_rut: rut.value,
            user_type_id: 2,
            user_name: thename.value,
            user_last_name: lastname.value,
            user_email: email.value,
            user_phone: phone.value,
            user_password: pass.value,
            user_status: 'enabled'
        }
    }).then(function (response) {
        console.log(response)
        router.push('/Login')
    }).catch(function (error) {
        console.log(error)
    })
}
</script>