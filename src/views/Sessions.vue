<template>
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-4">Coaching Sessions</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="session in sessions"
        :key="session.id"
        class="p-4 bg-white rounded-lg shadow-md"
        :class="getBackgroundClass(session.status)"
      >
        <h3 class="text-lg font-semibold mb-2">
          {{ session.coach.firstName }} {{ session.coach.lastName }} (Coach)
        </h3>
        <p class="text-sm text-gray-500 mb-2">
          {{ session.member.firstName }} {{ session.member.lastName }} (Member)
        </p>
        <p class="text-sm text-gray-500 mb-2">{{ session.scheduledDateTime }}</p>
        <p class="text-sm text-gray-500 mb-2">{{ session.duration }}</p>
        <p class="text-sm text-gray-500">{{ session.status }}</p>

        <router-link
          v-if="session.status !== 'canceled'"
          :to="`/sessions/${session.id}`"
          class="inline-block px-4 py-2 mt-4 rounded-md text-white bg-purple-500 hover:bg-purple-600"
        >
          View Session
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "../router";
import sessions from "../data/sessions"; // todo retreive this from the store (hit the api to retreive the sessions)
import { getBackgroundClass } from "../utils";
</script>

<style scoped>
.bg-purple-custom {
  background-color: #6348ff2a;
}

.bg-orange-custom {
  background-color: #fa9231;
}

.bg-gray-custom {
  background-color: #2081d025;
}
</style>
