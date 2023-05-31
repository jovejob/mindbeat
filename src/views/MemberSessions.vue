<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">
      Coaching Sessions for {{ member.firstName }} {{ member.lastName }}
    </h2>
    <div class="flex items-center mb-4">
      <router-link
        to="/members"
        class="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md mb-4"
      >
        Back to Members
      </router-link>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="session in sessions"
        :key="session.id"
        class="p-4 bg-white rounded-lg shadow-md"
        :class="getBackgroundClass(session.status)"
      >
        <h3 class="text-lg font-semibold mb-2">
          {{ session.coach.firstName }} {{ session.coach.lastName }}
        </h3>
        <p class="text-sm text-gray-500 mb-2">{{ session.scheduledDateTime }}</p>
        <p class="text-sm text-gray-500">{{ session.status }}</p>
        <router-link
          v-if="session.status !== 'canceled'"
          :to="`/sessions/${session.id}`"
          class="inline-block px-4 py-2 mt-4 rounded-md text-white bg-purple-500 hover:bg-purple-600"
        >
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, onMounted } from "vue";
import { useMemberSessionsStore } from "../stores/memberSessions";
import { getBackgroundClass } from "../utils";

// todo retreive it from the store, getting the id from the route instead of working with props
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});

const sessionsStore = useMemberSessionsStore();
const sessions = computed(() => sessionsStore.getSessions);

onMounted(() => {
  sessionsStore.fetchMemberSessionsJson(props.member.id); // todo replace it with fetchMemberSessions when api is done
});

const backgroundClass = computed(() => getBackgroundClass);
</script>

<!-- todo extract this (tailwind custom theme maybe?) -->
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
