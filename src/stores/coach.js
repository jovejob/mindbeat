import { defineStore } from 'pinia';
import axios from 'axios';
import coaches from '../data/coaches'; // todo remove it after

export const useCoachStore = defineStore('coach', {
  state: () => ({
    coaches: [],
    loading: false,
  }),
  getters: {
    getCoaches: (state) => state.coaches,
    isLoading: (state) => state.loading,
  },
  actions: {
    async fetchCoaches() {
      try {
        this.loading = true;
        // TODO: Replace the URL with your actual API endpoint to fetch coaches
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.$patch((state) => {
          state.coaches = data;
          state.loading = false;
        });
      } catch (error) {
        alert(error);
        console.log(error);
        this.loading = false;
      }
    },
    // todo remove this after the API implementation
    async fetchCoachesJson() {
      try {
        this.loading = true;
        this.$patch((state) => {
          state.coaches = coaches;
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
