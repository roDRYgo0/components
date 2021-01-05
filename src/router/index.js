import { createRouter, createWebHistory } from 'vue-router';
import Buttons from '../views/Buttons.vue';
import Inputs from '../views/Inputs.vue';

const routes = [
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons,
  },
  {
    path: '/inputs',
    alias: '/',
    name: 'Inputs',
    component: Inputs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
