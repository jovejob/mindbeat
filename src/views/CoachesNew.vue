<template>
  <div>
    <router-link
      v-for="coach in coaches"
      :key="coach.id"
      :to="{
        name: 'CoachSessions',
        params: { coachId: coach.id },
        props: { coach: coach, coachSessions: getCoachSessions(coach.id) },
      }"
      class="cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200"
      :class="{ 'bg-gray-200': selectedCoach && selectedCoach.id === coach.id }"
    >
      {{ coach.firstName }} {{ coach.lastName }}
    </router-link>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import coaches from "../data/coaches";

export default defineComponent({
  setup() {
    const coachesList = ref(coaches);
    const selectedCoach = ref();

    const sessionsByCoach = ref({
      // your coach sessions data here
    });

    function getCoachSessions(coachId) {
      // Return the coach sessions based on the coachId
      return sessionsByCoach.value[coachId] || [];
    }

    return {
      coaches: coachesList,
      sessionsByCoach,
      getCoachSessions,
      selectedCoach,
    };
  },
});
</script>
