import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useKakao } from 'vue3-kakao-maps'

useKakao('9bcb550d13755ed83d0adf3827343873')
createApp(App).use(store).use(router).mount('#app')
