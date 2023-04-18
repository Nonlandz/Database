<template>
<div>
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
     </button>
     
     <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
           <ul class="space-y-2 font-medium">
            
              <li>
                 <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap" @click="tab=1">Addtrain</span>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                 </a>
              </li>
              <li>
                 <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap" @click="tab = 2">Users</span>
                 </a>
              </li>
            
              
              <li>
                 <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap" @click="logout()">Log Out</span>
                 </a>
              </li>
           </ul>
        </div>
     </aside>
     <div v-if="tab == 1">
        <div class="p-4 sm:ml-64">
            <form class="w-full max-w-sm">
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                      Train Number
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="trainnum" class="bg-gray-200 appearance-none border-2 
                    border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
                     focus:bg-white focus:border-purple-500" name="trainnum" type="text">
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                      Date
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input type="date" v-model="date" class="bg-gray-200 appearance-none border-2
                     border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="date" >
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                      Select route
                    </label>
                  </div>
                
                  <div class="md:w-2/3" >
                    <select class="bg-gray-200 appearance-none border-2
                     border-gray-200 rounded w-full py-2 px-4 text-black leading-tight 
                     focus:outline-none focus:bg-white focus:border-purple-500" name="routeid"  v-model="routeid" > 
                     <option :value="index.route_id" v-for="index in boss" :key="index.route_id">{{ index.route_name }}</option>
                    </select>
                     
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
                     focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" @click=" submit()">
                      Add
                    </button>
                  </div>
                </div>
              </form>
         </div>
        
    </div>
     <div v-else-if="tab == 2">
        <div class="p-4 sm:ml-64">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">user_id</th>
                    <th scope="col">username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Tel</th>
                    <th scope="col">Point</th>

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in alluser" :key="user.user_id">
                    <th scope="row">{{user.User_id}}</th>
                    <td>{{user.Username}}</td>
                    <td>{{user.Firstname}}</td>
                    <td>{{ user.Lastname }}</td>
                    <td>{{user.Tel}}</td>
                    <td>{{user.Point}}</td>
                  </tr>
                 
                </tbody>
              </table>
        </div>
     </div>
     </div>
    
</template>

<script>
import axios from 'axios';
export default {
      data() {
        return {
          tab:1,
          boss:"",
          alluser:'',
      }
        },
        methods: {
            logout(){
      localStorage.removeItem("user");
      this.$router.push('/')

    },
      submit(){
          var formData = new FormData();
          formData.append("date", this.date)
          formData.append("routeid", this.routeid)
          formData.append("trainnum", this.trainnum);

          console.log(formData);
          axios.post('http://localhost:3001/addtrain', formData, {
              headers: {
              'Content-Type': 'application/json'
              }
          }).then(response => {
            console.log(response)
            if (response.status === 200) {
                        this.formSubmitted = true;
                        Swal.fire({
                            icon: 'success',
                            title: "Add Train succesfully",
                            confirmButtonText: '<h1>X</h1>',

                        })
                    }
          })
          .catch(error => {
              console.log(error.message);
          })
          .finally(() => {
    console.log("Request completed");
  });;
      },
      
  },
  created() {
        axios.get("http://localhost:3001/route")
            .then((response) => {
            this.boss = response.data.route;
            console.log(this.boss);
           
        })
            .catch((err) => {
            console.log(err);
        });

        axios.get("http://localhost:3001/getalluser")
            .then((response) => {
            this.alluser = response.data.alluser;
        
           
        })
            .catch((err) => {
            console.log(err);
        });


        
    }
  }
</script>

<style>
</style>