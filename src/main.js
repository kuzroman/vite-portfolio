import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';
import { createI18n } from 'vue-i18n'
import { default as messages } from './translate/index'
import i18nPlugin from './plugins/i18n'

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'ru', // set fallback locale
  messages, // set locale messages
  legacy: false,
})


createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .use(i18nPlugin, {
    greetings: {
      hello: 'Bonjour!'
    }
  })
  .mount('#app')

