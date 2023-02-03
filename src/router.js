import { createRouter, createWebHistory } from 'vue-router'
import People from './components/PeopleList.vue'
import AddPerson from './components/AddPerson.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: People,
    },
    {
      path: '/add',
      component: AddPerson,
    },
  ],
})

export default router