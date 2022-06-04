import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import css from './assets/main.css' //...guessed this

import './assets/main.css'

createApp(App).use(router).mount('#app')
