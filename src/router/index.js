import { createRouter, createWebHistory } from 'vue-router';
import VueMenu from '../views/VueMenu.vue';
import CrearComponente from '../views/CrearComponente.vue';


const routes = [
  {
    path: '/',
    name: 'Vue',
    component: VueMenu,
  },

  {
    path: '/crear-componente',
    name: 'Crear Componente',
    component: CrearComponente,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
