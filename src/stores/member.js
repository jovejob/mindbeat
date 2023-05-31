import { defineStore } from 'pinia';
import axios from 'axios';
import members from '../data/members'; // todo remove it after

export const useMemberStore = defineStore('member', {
  state: () => ({
    members: [],
    loading: false,
  }),
  getters: {
    getMembers: (state) => state.members,
    isLoading: (state) => state.loading,
  },
  actions: {
    async fetchMembers() {
      try {
        this.loading = true;
        // TODO: Replace the URL with your actual API endpoint to fetch members
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.$patch((state) => {
          state.members = data;
          state.loading = false;
        });
      } catch (error) {
        alert(error);
        console.log(error);
        this.loading = false;
      }
    },
    // todo remove this after the API implementation
    async fetchMembersJson() {
      try {
        this.loading = true;
        this.$patch((state) => {
          state.members = members;
          state.loading = false;
        });
      } catch (error) {
        alert(error);
        console.log(error);
        this.loading = false;
      }
    },
  },
});
