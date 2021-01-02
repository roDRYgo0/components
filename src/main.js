import '@/bootstrap';
import components from '@/components';
import { createApp } from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';

const app = createApp(App).use(store).use(router);

components.forEach(({ name, component }) => {
  console.log(name);
  app.component(name, component);
});

app.mount('#app');
