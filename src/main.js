import { createApp } from 'vue'
import App from './App.vue'

import {routes} from './routes/routes'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
  })
  
  createApp(App)
  .use(routes)
  .use(vuetify)
  .mount('#app')