import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// import routes from '~pages';
import 'element-plus/theme-chalk/src/message.scss';
import 'element-plus/theme-chalk/src/notification.scss';

// import { ViteSSG } from 'vite-ssg';
// import routes from '~pages';
// export const createApp = ViteSSG(App, { router });


createApp(App).use(router).use(store).mount('#app')

