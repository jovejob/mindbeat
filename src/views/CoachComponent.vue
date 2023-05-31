<template>
  <div class="bg-gray-100 min-h-screen py-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-4">NEWWW {{ user.name }}</h2>

      <!-- List of Coaches -->
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/3">
          <h3 class="text-xl font-semibold mb-2">Coaches</h3>
          <ul class="space-y-2">
            <router-link
              v-for="coach in coaches"
              :key="coach.id"
              :to="`/coaches/${coach.id}/sessions`"
              :class="{ 'bg-purple-500': selectedCoach && selectedCoach.id === coach.id }"
              class="cursor-pointer px-4 py-2 rounded-md hover:bg-purple-200"
            >
              {{ coach.firstName }} {{ coach.lastName }}
            </router-link>
          </ul>
        </div>

        <!-- Coach Sessions -->
        <div class="md:w-2/3 md:ml-8 mt-4 md:mt-0" v-if="selectedCoach">
          <h3 class="text-xl font-semibold mb-2">
            Coaching Sessions by {{ selectedCoach.firstName }}
            {{ selectedCoach.lastName }}
          </h3>
          <ul class="space-y-2">
            <li
              v-for="session in selectedCoach.coachingSessions"
              :key="session.id"
              :class="{
                'bg-orange-500': session.status === 'upcoming',
                'bg-purple-500': session.status === 'ongoing',
                'bg-gray-500': session.status === 'held',
                'bg-red-500': session.status === 'canceled',
              }"
              class="px-4 py-2 rounded-md shadow-md"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-semibold">{{ session.scheduledDateTime }}</p>
                  <p class="text-sm text-gray-500">{{ session.status }}</p>
                </div>
                <button
                  v-if="session.status === 'upcoming'"
                  class="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                  @click="cancelSession(session.id)"
                >
                  Cancel
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "../stores/user";
import coaches from "../data/coaches";

export default defineComponent({
  setup() {
    const user = useUserStore();

    function cancelSession(sessionId) {
      // Implement your cancellation logic here
      console.log(`Canceling session with ID ${sessionId}`);
    }

    return {
      user,
      coaches,
      selectedCoach: null,
      cancelSession,
    };
  },
});
</script>

<style>
/* Add any custom styles here */
</style>
