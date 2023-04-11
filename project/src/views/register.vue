<template>
  <div>
    <b-container class="mt-5">
      <b-row class="justify-content-md-center">
        <b-col md="6">
          <b-card class="shadow">
            <b-card-title class="text-center mb-4">Register</b-card-title>
            <b-form @submit.prevent="register">
              <b-form-group label="Username" label-for="username">
                <b-form-input id="username" v-model="user.username" type="text" required />
              </b-form-group>

              <b-form-group label="Password" label-for="password">
                <b-form-input id="password" v-model="user.password" type="password" required />
              </b-form-group>

              <b-form-group label="First Name" label-for="firstName">
                <b-form-input id="firstName" v-model="user.firstName" type="text" required />
              </b-form-group>

              <b-form-group label="Last Name" label-for="lastName">
                <b-form-input id="lastName" v-model="user.lastName" type="text" required />
              </b-form-group>

              <b-form-group label="Telephone Number" label-for="telNumber">
                <b-form-input id="telNumber" v-model="user.telNumber" type="tel" required />
              </b-form-group>

              <b-button type="submit" variant="primary" class="w-100 mt-3">Register</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
        telNumber: '',
      },
    };
  },
  methods: {
    register() {
      console.log(this.user);
      // Perform registration logic here
    },
  },
};
</script>

<style>
.card {
  border-radius: 1rem;
}
</style>
