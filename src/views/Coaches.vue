<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Coaches</h2>
    <div v-if="isLoading">Loading...</div>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        v-for="coach in coaches"
        :key="coach.id"
        :to="{
          name: 'CoachSessions',
          params: {
            id: coach.id,
            coach: coach,
          },
        }"
        class="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200"
        :class="{ 'bg-gray-200': selectedCoach && selectedCoach.id === coach.id }"
      >
        <div class="p-4">
          <div class="flex justify-center items-center h-24">
            <img
              class="object-cover w-20 h-20 rounded-full bg-gray-300"
              :src="getDummyPhotoUrl(coach.id)"
              alt="Coach Photo"
            />
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2">
              {{ coach.firstName }} {{ coach.lastName }}
            </h3>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { useCoachStore } from "../stores/coach";
import { onMounted, computed } from "vue";

const store = useCoachStore();
const coaches = computed(() => store.getCoaches);
const isLoading = computed(() => store.isLoading);
const selectedCoach = null; // You may initialize this with a selected coach if needed

// Fetch coaches on component mount
onMounted(() => {
  store.fetchCoachesJson(); // todo replace it with fetchCoaches when api is done
});

function getDummyPhotoUrl(coachId) {
  // Replace this with the actual URL generator logic for dummy photos
  // Here, we're using a placeholder URL with the coachId appended to it
  return `https://xsgames.co/randomusers/avatar.php?g=male&id=${coachId}`;
}
</script>
