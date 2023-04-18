<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-800">
    <div class="max-w-4xl mx-auto my-8 rounded-lg shadow-lg bg-white flex">
      <div class="w-1/2 p-6">
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/trains-steam-engine-1630-in-the-yard-vertical-thomas-woolworth.jpg" alt="Image description" class="max-w-full h-auto">
      </div>
      <div class="w-1/2 p-6">
        <h1 class="text-3xl font-bold mb-4 text-blue-900">Sign In</h1>
        <form class="max-w-md" @submit.prevent="signIn">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-bold mb-2">Username:</label>
            <input id="email" v-model="username" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
            <input type="password" id="password" v-model="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <p v-if="err != ''" style="color:red;">{{err}} !!</p>
          </div>
          
          <button type="submit" class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2">Sign In</button>
          <router-link to="/register" class="text-blue-900 hover:text-blue-700 text-center block">Create an account</router-link>
        </form>
      </div>
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
      err:''
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
          localStorage.setItem('user',this.username)
          localStorage.setItem('userType', response.data.user.Usertype);;
          console.log(response.data.user.Usertype)
         if(response.data.user.Usertype == "user"){
          
          console.log("eiei")
          this.$router.push('/home');
         }
         else if(response.data.user.Usertype == "admin"){
          this.$router.push('/admin');
         }
        
         
        }
        console.log(response.data);
        // redirect to another page or show a success message
      } catch (error) {
        console.error(error.response.data);
        this.err = error.response.data.message
      }
    },
  },
  created(){
    if(localStorage.getItem("user") != null){
      this.$router.push({path: '/home'})
    }
  }
};
</script>

<style>
/* add your tailwind styles here */
</style>
