import { createApp } from 'vue'
import App from './App'
import { store } from './store/store'

import "xp.css/dist/XP.css"

createApp(App).use(store).mount('#app')
