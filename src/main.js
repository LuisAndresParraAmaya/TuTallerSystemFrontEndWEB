import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router.js'
// Creating App
const app = createApp(App)
// Adding Plugins To App
app.use(router)
// Mounting App
app.mount('#app')
