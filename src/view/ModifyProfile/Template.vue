<template>
  <div class="grid grid-cols-3 content-center">
      <div></div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input type="text" placeholder="Name" class="input input-bordered" />
       <label class="label">
        <span class="label-text">LastName</span>
      </label>
      <input type="text" placeholder="Apellido" class="input input-bordered" />
       <label class="label">
        <span class="label-text">Rut</span>
      </label>
      <input type="text" placeholder="Rut" class="input input-bordered" />
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input type="text" placeholder="Email" class="input input-bordered" />
       <label class="label">
        <span class="label-text">Phone</span>
      </label>
      <input type="text" placeholder="Phone" class="input input-bordered" />
       <button
              @click=""
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50"
            >
              Change Password
            </button>
            <button
              @click=""
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50"
            >
              Delete Account
            </button>
            <button
              @click=""
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50"
            >
              Update Date
            </button>
    </div>
   
    <div></div>
  </div>
</template>

<style src="./Style.css"></style>
<script src="./Component.js"></script>

