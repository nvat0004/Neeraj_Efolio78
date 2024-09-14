import { createRouter, createWebHistory } from 'vue-router'
//import register from "./components/register.vue";
//import signin from './components/signin.vue';
//import loginsignup from './components/loginsignup.vue'
import loginsignup from '../loginsignup.vue'
import AddBookView from '@/view/AddBookView.vue'

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: loginsignup
  },

  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
