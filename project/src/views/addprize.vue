<template>
    <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Item name
                </label>
            </div>
            <div class="md:w-2/3">
                <input v-model="itemname" class="bg-gray-200 appearance-none border-2 
          border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none
           focus:bg-white focus:border-purple-500" name="itemname" type="text">
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Item description
                </label>
            </div>
            <div class="md:w-2/3">
                <input v-model="itemdes"
                    class="bg-gray-200 appearance-none border-2 
           border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="itemdes">
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Point
                </label>
            </div>

            <div class="md:w-2/3">
                <input v-model="point"
                    class="bg-gray-200 appearance-none border-2 
           border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    name="itemdes">


            </div>
            
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Item imagen
                </label>
            </div>

            <div class="mb-4">

        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" id="file" ref="file" @change="handleFileUpload()">
           
             
          </label>
        </div>
      </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
                <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
           focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" @click="submit()">
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
            itemname: null,
            itemdes: null,
            point: "",
            file: null,
        }
    },
    methods: {
        handleFileUpload(){
          this.file = this.$refs.file.files[0];
          console.log(this.file)
      },
        addLike() {

        },
        submit() {
            var formData = new FormData();
            formData.append("itemname", this.itemname)
            formData.append("itemdes", this.itemdes)
            formData.append("point", this.point)
            formData.append("item_img", this.file)

            console.log(formData);
            axios.post('http://localhost:3001/addprize', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                console.log(response)
            })
                .catch(error => {
                    console.log(error.message);
                });
        },

    },
    
}
</script>

