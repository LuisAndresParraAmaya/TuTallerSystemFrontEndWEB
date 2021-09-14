import Vue from 'vue'
import main from './main.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
new Vue({router, render: h=>h(main)}).$mount('#app')