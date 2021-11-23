import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue';

import Login from './components/Login.vue'
import SingUp from './components/SingUp.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/login',
    name: "login",
    component:  Login
  },{
    path: '/user/signUp',
    name: "signUp",
    component: SingUp
  }
  
];
  
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
