import { defineStore } from 'pinia';
import sessionsData from "../data/sessions";

export const useSessionsStore = defineStore('sessions', {
  state: () => ({
    // TODO: Replace the URL with your actual API endpoint to fetch sessions
    sessions: sessionsData,
  }),
  getters: {
    getSessions: (state) => state.sessions,
    getSessionById: (state) => (sessionId) => {
      return state.sessions.find((session) => session.id === sessionId);
    },
  },
});
