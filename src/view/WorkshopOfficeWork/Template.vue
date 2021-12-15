<template>
  <div style="display: flex; justify-content: center">
    <div class="border mockup-window bg-base-300" style="width: 65%">
      <div v-if="nombreservicio == null || nombreservicio == 'null'">
        <h1 class="my-3 text-4xl font-bold text-center mb-12">Servicio</h1>
      </div>
      <div v-else>
        <h1 class="my-3 text-4xl font-bold text-center mb-12">
          {{ nombreservicio }}
        </h1>
      </div>
      <div>
        <div class="bg-base-200 flex justify-center">
          <div class="w-3/5">
            <div class="mt-6 mb-10">
              <div v-if="userType == 4" class="m-5 p-5">
                <div>
                  <div>
                    <div class="flex space-x-3">
                      <div v-for="m in milestone" :key="m">
                        <div
                          v-if="
                            status == 'confirmcompletiontechnician' &&
                            m.workshop_office_work_milestone_status ==
                              'completed' &&
                            m.workshop_office_work_milestone_name ==
                              'Recepción del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label
                            >El cliente debe confirmar la recepcion del
                            servicio</label
                          >
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Recepción del vehículo'
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="boton(m.id)"
                          >
                            CONFIRMAR RECEPCIÓN DE VEHÍCULO
                          </button>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Inspección del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="botonFicha(m.id)"
                          >
                            REALIZAR FICHA TECNICA
                          </button>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Realización del servicio'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TÉCNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="agregarAvance()"
                          >
                            AGREGAR AVANCE
                          </button>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="botonFin(m.id)"
                          >
                            INFORMAR RETIRO DEL VEHÍCULO
                          </button>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Retiro del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="agregarAvance()"
                          >
                            AGREGAR AVANCE
                          </button>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="confirmRetiro(m.id)"
                          >
                            CONFIRMAR RETIRO DEL VEHÍCULO
                          </button>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'completed' &&
                            m.workshop_office_work_milestone_name ==
                              'Retiro del vehículo' &&
                            status == 'working'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="agregarAvance()"
                          >
                            AGREGAR AVANCE
                          </button>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="confirmFin(m.id)"
                          >
                            CONFIRMAR FINALIZACIÓN DEL SERVICIO
                          </button>
                        </div>
                        <div
                          v-if="
                            status == 'confirmcompletioncustomer' &&
                            m.workshop_office_work_milestone_status ==
                              'completed' &&
                            m.workshop_office_work_milestone_name ==
                              'Recepción del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label>El servicio se encuentra finalizado</label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="userType == 2" class="m-5 p-5">
                <div>
                  <div>
                    <div class="flex space-x-3">
                      <div v-for="m in milestone" :key="m">
                        <div
                          v-if="
                            status == 'confirmcompletiontechnician' &&
                            m.workshop_office_work_milestone_status ==
                              'completed' &&
                            m.workshop_office_work_milestone_name ==
                              'Recepción del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label
                            >El cliente debe confirmar la recepcion del
                            servicio</label
                          >
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                          <button
                            @click="botonComprobarCliente()"
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                          >
                            COMPROBAR FINALIZACIÓN DEL SERVICIO
                          </button>
                        </div>
                        <div
                          v-if="
                            status == 'completeandevaluated' &&
                            m.workshop_office_work_milestone_status ==
                              'completed' &&
                            m.workshop_office_work_milestone_name ==
                              'Recepción del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label
                            >El servicio se encuentra finalizado y el cliente ya
                            lo ha evaluado</label
                          >

                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'completed' &&
                            m.workshop_office_work_milestone_name ==
                              'Retiro del vehículo' &&
                            status == 'working'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label>
                            El tecnico debe confirmar la finalizacion del
                            servicio
                          </label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          v-if="
                            status == 'confirmcompletioncustomer' &&
                            m.workshop_office_work_milestone_status ==
                              'completed' &&
                            m.workshop_office_work_milestone_name ==
                              'Recepción del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label>El servicio se encuentra finalizado</label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                          <button
                            @click="evaluarServicio()"
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                          >
                            EVALUAR SERVICIO RECIBIDO
                          </button>
                        </div>

                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Recepción del vehículo'
                          "
                        >
                          <svg
                            class="h-8 w-8 text-green-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Inspección del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Realización del servicio'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-8 w-8 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TÉCNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          v-if="
                            m.workshop_office_work_milestone_status ==
                              'working' &&
                            m.workshop_office_work_milestone_name ==
                              'Retiro del vehículo'
                          "
                        >
                          <div class="grid place-items-center">
                            <div class="flex space-x-5">
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              <svg
                                class="h-8 w-8 text-green-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                          </div>

                          <label>
                            {{ m.workshop_office_work_milestone_description }}
                          </label>
                          <button
                            class="
                              w-full
                              px-8
                              py-3
                              rounded-md
                              btn
                              text-coolGray-50
                              mt-5
                            "
                            @click="verFicha()"
                          >
                            VER FICHA TECNICA
                          </button>
                          <div>
                            <label class="font-bold label">Avances</label>
                            <br />
                            <ul class="list-disc">
                              <li v-for="a in list" :key="a">
                                {{
                                  a.workshop_office_service_advance_description
                                }}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div></div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Logic.js"></script>