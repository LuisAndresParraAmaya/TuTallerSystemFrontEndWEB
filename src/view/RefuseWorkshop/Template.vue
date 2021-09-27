<template>
  <div class="grid grid-cols-1 md:grid-cols-3 content-center text-center p-3">
    <div></div>
    <div>
      <h1 class="my-3 text-4xl font-bold">
          Rechazo de Taller
      </h1>
      <form @submit.prevent class="mt-12">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Razon de rechazo </span>
          </label>
          <textarea style="resize:none"
            class="input-bordered textarea"
            name="descriptionArea"
            id="postulation_message"
            cols="30"
            rows="5"
          ></textarea>
          <button
            v-on:click="sendCode"
            class="w-full px-8 py-3 rounded-md btn text-coolGray-50 mt-5"
          >
            Rechazar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>