<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <!-- Hamburger menu for mobile maybe? -->
    <Header />
    <div class="container mx-auto py-8">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style scoped></style>
