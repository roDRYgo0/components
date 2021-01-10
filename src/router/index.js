import { createRouter, createWebHistory } from 'vue-router';
import Buttons from '../views/Buttons.vue';
import Inputs from '../views/Inputs.vue';
import Switchs from '../views/Switchs.vue';

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
  {
    path: '/switchs',
    alias: '/',
    name: 'Switchs',
    component: Switchs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
