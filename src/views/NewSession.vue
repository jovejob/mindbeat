<template>
  <div class="container mx-auto px-4">
    <h2 class="text-2xl font-bold mb-4">(TODO) Create New Coaching Session</h2>
    <form @submit.prevent="createSession">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="coach">
          Coach
        </label>
        <select v-model="coachId" id="coach" class="form-select w-full">
          <option v-for="coach in coaches" :value="coach.id" :key="coach.id">
            {{ coach.firstName }} {{ coach.lastName }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="member">
          Member
        </label>
        <select v-model="memberId" id="member" class="form-select w-full">
          <option v-for="member in members" :value="member.id" :key="member.id">
            {{ member.firstName }} {{ member.lastName }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="datetime">
          Date and Time
        </label>
        <input
          v-model="datetime"
          id="datetime"
          type="datetime-local"
          class="form-input w-full"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="duration">
          Duration (minutes)
        </label>
        <input
          v-model.number="duration"
          id="duration"
          type="number"
          class="form-input w-full"
        />
      </div>
      <div class="text-right">
        <button
          type="submit"
          class="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Create Session
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSessionsStore } from "../stores/sessions";
import { useCoachStore } from "../stores/coach";
import { useMemberStore } from "../stores/member";

const sessionsStore = useSessionsStore();
const coachesStore = useCoachStore();
const membersStore = useMemberStore();

const coachId = ref("");
const memberId = ref("");
const datetime = ref("");
const duration = ref(0);

const coaches = coachesStore.getCoaches;
const members = membersStore.getMembers;

const createSession = () => {
  sessionsStore.createSession({
    coachId: coachId.value,
    memberId: memberId.value,
    datetime: datetime.value,
    duration: duration.value,
  });

  // Reset form values
  coachId.value = "";
  memberId.value = "";
  datetime.value = "";
  duration.value = 0;
};
</script>

<style scoped></style>
