<template>
    <div style="display: flex; justify-content: center">
        <div class="border mockup-window bg-base-300" style="width: 65%">
            <h1 style="text-align: center; font-size: 45px; margin-bottom: 3%">Finalizar servicio</h1>
            <div class="bg-base-200 flex justify-center">
                <div class="w-3/5">
                    <form class="mt-6 mb-10">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-justify">
                                    La sucursal automotriz ha confirmado que ha finalizado el
                                    servicio que te han prestado. Sin embargo, requerimos de tu
                                    confirmación para finalizarlo definitivamente y así enviarles
                                    el dinero que has pagado.
                                </span>
                            </label>

                            <label class="label">
                                <span class="label-text text-justify">
                                    En el caso de que se haya presentado un problema que afectara
                                    negativamente a la calidad del servicio prestado por parte de
                                    la sucursal automotriz, entonces puedes abrir un caso de
                                    disputa con el fin de que los administradores de TuTaller
                                    evalúen la posibilidad de devolverte tu dinero
                                </span>
                            </label>

                            <button
                                class="w-auto p-2 rounded-md btn bg-white text-black border mt-5 hover:text-white"
                            >ABRIR CASO DE DISPUTA</button>
                            <button
                            @click="fin()"
                                class=" p-2 w-auto rounded-md btn btn-success text-coolGray-50 mt-5"
                            >CONFIRMAR FINALIZACIÓN DEL SERVICIO</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Logic.js"></script>
