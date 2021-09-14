<template>
  <div class="grid grid-cols-3 content-center">
      <div></div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Current Password </span>
      </label>
      <input type="text" placeholder="Current Password" class="input input-bordered" />
       <label class="label">
        <span class="label-text">New Password</span>
      </label>
      <input type="text" placeholder="New Password" class="input input-bordered" />
       <label class="label">
        <span class="label-text">Confirm New Password</span>
      </label>
      <input type="text" placeholder="Confirm New Password" class="input input-bordered" />
      
       <button
              @click=""
              class="w-full px-8 py-3 rounded-md btn text-coolGray-50"
            >
              Change Password
            </button>
            
    </div>
   
    <div></div>
  </div>
</template>

<style src="./Style.css"></style>
<script src="./Component.js"></script>

