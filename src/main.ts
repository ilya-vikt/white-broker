import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { register } from 'swiper/element/bundle';
import FloatingVue from 'floating-vue';
import '@/assets/styles/main.scss';
import 'floating-vue/dist/style.css';
register();

const app = createApp(App);
app.use(router);
app.use(FloatingVue, {
  themes: {
    'info-dropdown': {
      $extend: 'dropdown',
      $resetCss: 'true',
      placement: 'bottom-start',
      delay: 100
    }
  }
});
app.mount('#app');
