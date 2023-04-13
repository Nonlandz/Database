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
</template>
<script>
  import axios from 'axios';
  export default {
      data() {
        return {
          trainnum: null,
          date: null,
          routeid: null,
          selected:"",
          boss:"",
      }
        },
        methods: {
      addLike(){
        
      },
      submit(){
          var formData = new FormData();
          formData.append("date", this.date)
          formData.append("routeid", this.routeid)
          formData.append("trainnum", this.trainnum);

          console.log(formData);
          axios.post('http://localhost:3000/addtrain', formData, {
              headers: {
              'Content-Type': 'application/json'
              }
          }).then(response => {
            console.log(response)
          })
          .catch(error => {
              console.log(error.message);
          });
      },
      
  },
  created() {
        axios.get("http://localhost:3000/route")
            .then((response) => {
            this.boss = response.data.route;
            console.log(this.boss);
           
        })
            .catch((err) => {
            console.log(err);
        });
    }
  }
  </script>

