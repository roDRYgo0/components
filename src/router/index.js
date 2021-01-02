import { createRouter, createWebHistory } from 'vue-router';
import Buttons from '../views/Buttons.vue';

const routes = [
  {
    path: '/buttons',
    alias: '/',
    name: 'Buttons',
    component: Buttons,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
