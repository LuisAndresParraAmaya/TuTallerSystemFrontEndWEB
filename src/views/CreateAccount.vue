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
                            type="text"
                            placeholder="ejemplo@gmail.com"
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Apellido</span>
                        </label>
                        <input type="text" placeholder="******" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Rut</span>
                        </label>
                        <input type="text" placeholder="11.111.111-1" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Correo Electrónico</span>
                        </label>
                        <input
                            type="text"
                            placeholder="ejemplo@gmail.com"
                            class="input input-bordered"
                        />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Teléfono/Celular</span>
                        </label>
                        <input type="text" placeholder="12345678" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Contraseña</span>
                        </label>
                        <input type="text" placeholder="******" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirmar Contraseña</span>
                        </label>
                        <input type="text" placeholder="******" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="button" value="Registrarse" class="btn btn-neutral mt-3" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>