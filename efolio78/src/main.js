import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from 'firebase/app'




// Adjust this according to your project structure
import router from './components/router'







// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA6MQ1GcKvKDIADzfrmpkHLbqsVkDalxHU',
    authDomain: 'week7-neeraj.firebaseapp.com',
    projectId: 'week7-neeraj',
    storageBucket: 'week7-neeraj.appspot.com',
    messagingSenderId: '667498709323',
    appId: '1:667498709323:web:80c0cd2de1d577061168ce'
  }
  
  initializeApp(firebaseConfig)


  createApp(App).use(router).mount('#app')

