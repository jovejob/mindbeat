import { defineStore } from 'pinia';
import axios from 'axios';
import memberCoachingSessions from '../data/memberCoachingSessions'; // todo remove it after

export const useMemberSessionsStore = defineStore('memberSessions', {
  state: () => ({
    sessions: [],
    loading: false,
  }),
  getters: {
    getSessions: (state) => state.sessions,
    isLoading: (state) => state.loading,
  },
  actions: {
    async fetchMemberSessions(memberId) {
      try {
        this.loading = true;
        // TODO: Replace the URL with your actual API endpoint to fetch member sessions
        const { data } = await axios.get(`https://example.com/api/members/${memberId}/sessions`);
        this.$patch((state) => {
          state.sessions = data;
          state.loading = false;
        });
      } catch (error) {
        alert(error);
        console.log(error);
        this.loading = false;
      }
    },
    // todo remove this after the API implementation
    async fetchMemberSessionsJson(memberId) {
      try {
        this.loading = true;
        // Simulating fetching member sessions from the memberCoachingSessions data
        const member = memberCoachingSessions.find((m) => m.id === memberId);
        const sessions = member ? member.sessions : [];
        this.$patch((state) => {
          state.sessions = sessions;
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
