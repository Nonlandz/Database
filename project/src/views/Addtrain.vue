<template>
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
        Route Id
      </label>
    </div>
    <div class="md:w-2/3">
      <input v-model="routeid" class="bg-gray-200 appearance-none border-2
       border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight 
       focus:outline-none focus:bg-white focus:border-purple-500" name="routeid" >
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
</template>
<script>
  import axios from 'axios';
  export default {
      data() {
        return {
          trainnum: '',
          date: '',
          routeid: '',
      }
        },
        methods: {
      addLike(){
        
      },
      submit(){
          var formData = new FormData();
          formData.append("trainnum", this.trainnum);
          formData.append("date", this.date)
          formData.append("routeid", this.routeid)

          console.log(formData);
          axios.post('http://localhost:3001/addtrain', formData, {
              headers: {
              'Content-Type': 'multipart/form-data'
              }
          }).then(response => {
            console.log(response)
          })
          .catch(error => {
              console.log(error.response.data);
          });
      },
      
  }
  }
  </script>

