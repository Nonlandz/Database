<template>
  <div id="app">
    <div class="container">
      <h2 class="title">Register</h2>
      <form @submit.prevent="register" class="register-form">
        <div class="input-group">
          <label for="username">Username</label>
          <input id="username" v-model="user.username" type="text" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input id="password" v-model="user.password" type="password" required />
        </div>

        <div class="input-group">
          <label for="firstName">First Name</label>
          <input id="firstName" v-model="user.firstName" type="text" required />
        </div>

        <div class="input-group">
          <label for="lastName">Last Name</label>
          <input id="lastName" v-model="user.lastName" type="text" required />
        </div>

        <div class="input-group">
          <label for="telNumber">Telephone Number</label>
          <input
            id="telNumber"
            v-model="user.telNumber"
            type="tel"
            pattern="^[0][0-9]{9}$"
            required
          />
        </div>

        <button type="submit" class="register-button" @click="register()">Register</button>
      </form>
      <div class="text sign-up-text">
        Already have an account?
        <router-link to="/"><label for="flip">Login now</label> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        telNumber: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async register() {
      if (this.isSubmitting) return
      this.isSubmitting = true

      try {
        const userData = {
          Username: this.user.username,
          Password: this.user.password,
          Firstname: this.user.firstName,
          Lastname: this.user.lastName,
          Usertype: 'user', // Set the default user type
          Tel: this.user.telNumber,
          Point: 0 // Set the default points
        }

        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })

        if (response.ok) {
          const user = await response.json()
          console.log(user)
          // Redirect to login or dashboard page
        } else {
          const error = await response.json()
          console.error(error)
          alert(error.error);
        }
      } catch (err) {
        console.error(err)
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.container {
  max-width: 500px;
  margin: 50px auto;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.register-button {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #3f51b5;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.register-button:hover {
  background-color: #283593;
}
</style>
