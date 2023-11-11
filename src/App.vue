<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1 text-white">Weather App</span>
      <RouterLink to="/" class="">Home</RouterLink>
      <RouterLink to="/settings" class="">Settings</RouterLink>
    </div>
  </nav>
  <br/>
  <div class="d-flex flex-row justify-content-center">
    
  </div>
  <br/>
  <RouterView />
</template>

<style scoped>
  .navbar a {
      color:gray;
      text-decoration: none;
    }
</style>
