import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router'
import Home from './components/Home.vue'
import collect from 'collect.js'

// Registra o collect globalmente


const app = createApp(App)
window.collect = collect;


//? HOME
app.component('Home', Home)

app.use(router)
app.mount('#app')