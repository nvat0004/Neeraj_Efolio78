<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const emailSignIn = ref('')
const passwordSignIn = ref('')
const auth = getAuth()

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log('Register successful', userCredential.user)
      // Handle post-registration (e.g. clear form, navigate, show message)
    })
    .catch((error) => {
      console.error(error.message)
      // Handle errors (e.g. show error message)
    })
}

const signin = () => {
  signInWithEmailAndPassword(auth, emailSignIn.value, passwordSignIn.value)
    .then((userCredential) => {
      console.log('Sign in successful', userCredential.user)
      // Handle post-sign-in (e.g. navigate to dashboard)
    })
    .catch((error) => {
      console.error(error.message)
      // Handle errors (e.g. show error message)
    })
}
</script>

<template>
  <div class="container">
    <!-- Registration Section -->
    <div class="form-container">
      <h1>Sign-Up</h1>
      <p><input type="text" placeholder="Email" v-model="email" /></p>
      <p><input type="password" placeholder="Password" v-model="password" /></p>
      <p><button @click="register">Save to firebase</button></p>
    </div>

    <!-- Sign-in Section -->
    <div class="form-container">
      <h1>Sign-in</h1>
      <p><input type="text" placeholder="Email" v-model="emailSignIn" /></p>
      <p><input type="password" placeholder="Password" v-model="passwordSignIn" /></p>
      <p><button @click="signin">Sign-in via firebase</button></p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
}
.form-container {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}
</style>
