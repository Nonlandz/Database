<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-800">
      <form class="max-w-lg mx-auto my-8 p-6 rounded-lg shadow-lg bg-white" @submit.prevent="submitForm">
          <h2 class="text-2xl font-bold mb-4 text-blue-900">Sign Up</h2>
          <div class="grid grid-cols-2 gap-4 mb-4">
              <div>
                  <label class="block text-gray-700 font-bold mb-2" for="first-name">
                      First Name
                  </label>
                  <input v-model="form.firstName" :class="{ 'border-red-500': formErrors.firstName }"
                      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="first-name" type="text" placeholder="First Name" />
                  <p v-if="formErrors.firstName" class="text-red-500 text-xs italic">{{ formErrors.firstName }}</p>
              </div>
              <div>
                  <label class="block text-gray-700 font-bold mb-2" for="last-name">
                      Last Name
                  </label>
                  <input v-model="form.lastName" :class="{ 'border-red-500': formErrors.lastName }"
                      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="last-name" type="text" placeholder="Last Name" />
                  <p v-if="formErrors.lastName" class="text-red-500 text-xs italic">{{ formErrors.lastName }}</p>
              </div>
          </div>
  
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">
                  Username
              </label>
              <input v-model="form.username" :class="{ 'border-red-500': formErrors.username }"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username" type="username" placeholder="username Address" />
              <p v-if="formErrors.username" class="text-red-500 text-xs italic">{{ formErrors.username }}</p>
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="phone-number">
                  Phone Number
              </label>
              <input v-model="form.phoneNumber" :class="{ 'border-red-500': formErrors.phoneNumber }"
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone-number" type="text" placeholder="Phone Number" />
            <p v-if="formErrors.phoneNumber" class="text-red-500 text-xs italic">{{ formErrors.phoneNumber }}</p>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
            </label>
            <input v-model="form.password" :class="{ 'border-red-500': formErrors.password }"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="**********" />
            <p v-if="formErrors.password" class="text-red-500 text-xs italic">{{ formErrors.password }}</p>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="confirm-password">
                Confirm Password
            </label>
            <input v-model="form.confirmPassword" :class="{ 'border-red-500': formErrors.confirmPassword }"
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password" type="password" placeholder="**********" />
            <p v-if="formErrors.confirmPassword" class="text-red-500 text-xs italic">{{ formErrors.confirmPassword }}</p>
        </div>
        <div class="flex items-center justify-between">
            <button :disabled="formSubmitted"
                class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                {{ formSubmitted ? 'Submitting...' : 'Sign Up' }}
            </button>
            <p class="text-sm text-gray-600 mt-2">
                Already have an account? <router-link :to="{ name: 'login' }">Log in here</router-link>.
            </p>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                username: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
            },
            formErrors: {},
            formSubmitted: false,
        };
    },
    methods: {
        validateForm() {
            // validation logic
        },
        async submitForm() {
            // form submission logic
        },
    },
};
</script>

<style>
/* add your tailwind styles here */
</style>

  