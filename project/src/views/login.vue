<script setup>
import Nav from '../components/Nav.vue'
</script>
<template>
   <div v-if="isLogin == false">

    <div class="max-w-lg mx-auto my-8 p-6 rounded-lg shadow-lg bg-white">
      <h1 class="text-3xl font-bold mb-4">Sign In</h1>
      <form class="max-w-md" @submit.prevent="signIn">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
          <input  id="email" v-model="username" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
          <input type="password" id="password" v-model="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
        <router-link to="/signup" class="ml-2 text-blue-600 hover:text-blue-800">Create an account</router-link>
      </form>
    </div>
  </div>
  
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        isLogin : false,
      };
    },
    methods: {
      async signIn() {
        try {
          const response = await axios.post('http://localhost:3001/signin', {
            username: this.username,
            password: this.password,
          });
          if (response.status === 200) {
                         
                          console.log(this.isLogin)
                          Swal.fire({
                              icon: 'success',
                              title: "Welcome " + response.data.user.Firstname + '!',
                              confirmButtonText: "OK",

  
                          })
                          localStorage.setItem('user',this.username);
                          this.$router.push('/home');
                        
                          
                      }
          console.log(response.data);
          // redirect to another page or show a success message
        } catch (error) {
          console.error(error.response.data);
          alert(error.response.data);
        }
      },
    },
  };
  </script>
  
  <style>
  /* add your tailwind styles here */
  </style>
  