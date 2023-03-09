import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//router
import AddMenuPage from './views/AddMenuPage.vue'
import HomePageSample2 from './views/HomePageSample2.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/AddMenuPage', component: AddMenuPage },
  { path: '/', component: HomePageSample2 },
]

// Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// router
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(vuetify).use(router).mount('#app')
// createApp(App).use(vuetify).mount('#app')
