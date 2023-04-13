<template>
  <!-- Index Post -->
<div class="container max-w-7xl mx-auto mt-8">
  <div class="mb-4">
    <h1 class="font-serif text-3xl font-bold underline decoration-gray-400"> User Management</h1>

  </div>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                ID</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Username</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Firstname</th>
              <th
                class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Lastname</th>
              <th class="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colspan="3">
                Action</th>
            </tr>
          </thead>
          
          <tbody class="bg-white">

        
            <tr v-for="user in users" :key="user.User_id">
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  {{ user.User_id }}
                </div>

              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">{{ user.Username }}
                </div>
              </td>

              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">{{ user.Firstname }}
                </div>
              </td>

              <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-900">{{ user.Lastname }}
                </div>
              </td>
              <td class="text-sm font-medium leading-3 text-center border-b border-gray-200 ">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </a>

              </td>
            
              <td class="text-sm font-medium leading-5  border-b border-gray-200 ">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600 hover:text-red-800"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg></a>

              </td>
              
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


</template>

<script>
  import axios from "axios";
import { RouterLink } from "vue-router";
  export default {
    data() {
        return {
           users: null // add blogs variable
        };
    },
    // methods: {
    //     addLike(Boss) {
    //         axios.post(`http://localhost:3000/blogs/addlike/${Boss.id}`).then((response) => {
    //             response;
    //             Boss.like++
    //             // this.$router.push({path: '/'})
    //             // window.location.reload();
    //         });
    //     }
    // },
    created() {
        axios.get("http://localhost:3001/user")
            .then((response) => {
            this.users = response.data.user;
            console.log(this.users);
           
        })
            .catch((err) => {
            console.log(err);
        });
    },
    components: { RouterLink }
}


  </script>
  <style>
</style>
  