import {createApp} from 'vue'
import App from './App.vue'
import {createI18n} from 'vue-i18n'


const i18n = createI18n({
    locale: 'en',
    legacy: true // NOTE: If set to false, then translations from <i18n> blocks are not available. Why?
})

createApp(App)
    .use(i18n)
    .mount('#app');