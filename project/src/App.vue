<script setup>
import { RouterView } from 'vue-router'
// import Nav from './components/Nav.vue'

</script>

<template>
  <!-- <Nav /> -->
  <RouterView />
</template>

<style scoped>
/* General styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 2rem;
}

.booking-form {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 5px;
}

.card-header {
    background-color: #007bff;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
}

.card-body {
    padding: 20px;
}

.label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

.form-control {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
}

.btn {
    cursor: pointer;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-outline-primary {
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
}

.btn-outline-primary.active {
    background-color: #007bff;
    color: #fff;
}

.btn-primary:hover,
.btn-outline-primary:hover {
    background-color: #0056b3;
    color: #fff;
    border-color: #0056b3;
}

.mb-3 {
    margin-bottom: 1rem;
}

.mt-5 {
    margin-top: 3rem;
}

.card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 2rem;
}

.card-body {
    padding: 20px;
}

.card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-text {
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 20px;
}

.card-text small {
    font-size: 12px;
    color: #adb5bd;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-primary:hover {
    background-color: #0056b3;
    color: #fff;
}
</style>
