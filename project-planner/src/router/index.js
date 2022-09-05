import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Addproject from '../views/addProject.vue'
import Edit from '../views/edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddProject',
    component: Addproject
  },
  {
    path: '/projects/:id',
    name: 'Edit',
    component: Edit,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
