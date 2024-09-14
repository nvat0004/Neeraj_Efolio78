// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from '/firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6MQ1GcKvKDIADzfrmpkHLbqsVkDalxHU',
  authDomain: 'week7-neeraj.firebaseapp.com',
  projectId: 'week7-neeraj',
  storageBucket: 'week7-neeraj.appspot.com',
  messagingSenderId: '667498709323',
  appId: '1:667498709323:web:80c0cd2de1d577061168ce'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
