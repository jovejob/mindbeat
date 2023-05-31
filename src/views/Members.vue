<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Members</h2>
    <div v-if="isLoading">Loading...</div>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <router-link
        v-for="member in members"
        :key="member.id"
        :to="{
          name: 'MemberSessions',
          params: {
            id: member.id,
            member: member,
          },
        }"
        class="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-200"
        :class="{ 'bg-gray-200': selectedMember && selectedMember.id === member.id }"
      >
        <div class="p-4">
          <div class="flex justify-center items-center h-24">
            <img
              class="object-cover w-20 h-20 rounded-full bg-gray-300"
              :src="getDummyPhotoUrl(member.id)"
              alt="Member Photo"
            />
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold mb-2">
              {{ member.firstName }} {{ member.lastName }}
            </h3>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useMemberStore } from "../stores/member";

const store = useMemberStore();
const members = computed(() => store.getMembers);
const isLoading = computed(() => store.isLoading);
const selectedMember = null; // You may initialize this with a selected member if needed

// Fetch members on component mount
onMounted(() => {
  store.fetchMembersJson(); // todo replace it with fetchMembers when api is done
});

function getDummyPhotoUrl(memberId) {
  // Replace this with the actual URL generator logic for dummy photos
  // Here, we're using a placeholder URL with the memberId appended to it
  return `https://xsgames.co/randomusers/avatar.php?g=female&id=${memberId}`;
}
</script>
