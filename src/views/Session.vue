<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Session Details</h2>
    <div class="flex items-center mb-4">
      <router-link
        to="/sessions"
        class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md mb-4"
      >
        Back to Sessions
      </router-link>
    </div>
    <div
      v-if="session"
      :class="getBackgroundClass(session.status) + ' p-4 rounded-lg shadow-md'"
    >
      <h3 class="text-lg font-semibold mb-2">
        {{ session.coach.firstName }} {{ session.coach.lastName }}
      </h3>
      <p class="text-sm text-gray-500 mb-2">{{ session.scheduledDateTime }}</p>
      <p class="text-sm text-gray-500">{{ session.status }}</p>
    </div>
    <div v-else class="bg-white p-4 rounded-lg shadow-md">
      <p>Loading session...</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useSessionsStore } from "../stores/sessions";
import { getBackgroundClass } from "../utils";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const sessionsStore = useSessionsStore();
const session = computed(() => sessionsStore.getSessionById(props.id));

if (!session.value) {
  console.log("Session not found!"); // Handle the case when session is not found
}
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
