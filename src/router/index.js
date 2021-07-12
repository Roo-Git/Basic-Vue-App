import { createRouter, createWebHistory } from 'vue-router';
import VueMenu from '../views/VueMenu.vue';
import CrearComponente from '../views/CrearComponente.vue';
import Variables from '../views/Varialbes.vue';
import BucleVFor from '../views/BucleVFor.vue';
import SentenciaVifVelse from '../views/SentenciaVIfVelse.vue';
import EventoOnClick from '../views/EventoOnClick.vue';
import PropsEntreComponentes from '../views/PropsEntreComponentes.vue';
import FuncionesPorLasProps from '../views/FuncionesPorLasProps.vue';
import Ruta from '../views/Ruta.vue';
import RutaDinamica from '../views/RutaDinamica.vue';
import CambiarRutaScripts from '../views/CambiarRutaScripts.vue';
import Error404 from '../views/Error404.vue';
import Binding from '../views/Binding.vue';


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
  },

  {
    path: '/variables',
    name: 'Variables',
    component: Variables,
  },

  {
    path: '/bucle-v-for',
    name: 'BucleVFor',
    component: BucleVFor,
  },

  {
    path: '/sentencia-if-else',
    name: 'Sentencia v-if / v-else',
    component: SentenciaVifVelse,
  },
  
  {
    path: '/evento-onclick',
    name: 'Evento on Click',
    component: EventoOnClick,
  },
  {
    path: '/binding',
    name: 'Binding',
    component: Binding,
  },
  
  {
    path: '/props-a-componentes',
    name: 'Pasando Props entre Componentes',
    component: PropsEntreComponentes,
  },

  {
    path: '/funciones-por-props',
    name: 'Pasando Funciones por las Props',
    component: FuncionesPorLasProps,
  },

  {
    path: '/crear-ruta',
    name: 'Crear Ruta',
    component: Ruta,
  },

  {
    path: '/ruta-dinamica',
    name: 'Crear Ruta Dinámica',
    component: RutaDinamica,
  },
  {
    path: '/ruta-scripts',
    name: 'Cambiar Ruta desde Scripts',
    component: CambiarRutaScripts,
  },
  {
    path: '/error-404',
    name: 'Crear View 404',
    component: Error404,
  },
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
