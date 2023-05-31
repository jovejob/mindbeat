<template>
  <header class="bg-gray-900 text-white">
    <div
      class="container mx-auto py-4 px-8 flex flex-col md:flex-row items-center justify-between"
    >
      <h1 class="text-2xl font-bold">My Coaching Web</h1>
      <nav class="mt-4 md:mt-0">
        <router-link
          to="/coaches"
          class="ml-0 md:ml-4 px-2 py-1 rounded-md hover:bg-purple-700"
          active-class="bg-purple-700"
        >
          Coaches
        </router-link>
        <router-link
          to="/members"
          class="ml-0 md:ml-4 px-2 py-1 rounded-md hover:bg-purple-700"
          active-class="bg-purple-700"
        >
          Members
        </router-link>
        <router-link
          to="/sessions"
          class="ml-0 md:ml-4 px-2 py-1 rounded-md hover:bg-purple-700"
          active-class="bg-purple-700"
        >
          Coaching Sessions
        </router-link>
        <router-link
          to="/sessions/create"
          class="ml-0 md:ml-4 px-2 py-1 rounded-md hover:bg-purple-700"
          active-class="bg-purple-700"
        >
          Create Coaching Session
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
