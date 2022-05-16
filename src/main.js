import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style/_color.scss"
import "./assets/style/main.scss"

createApp(App).use(store).use(router).mount('#app')
