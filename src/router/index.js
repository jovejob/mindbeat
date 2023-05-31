import Vue from 'vue'
import VueRouter from  'vue-router'

import Coaches from '../views/Coaches.vue';
import CoachSessions from '../views/CoachSessions.vue';
import Members from '../views/Members.vue';
import MemberSessions from '../views/MemberSessions.vue';
import Sessions from '../views/Sessions.vue';
import Session from '../views/Session.vue';
import NewSession from '../views/NewSession.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/coaches',
    name: 'Coaches',
    component: Coaches,
  },
  {
    path: '/coaches/:id/sessions',
    name: 'CoachSessions',
    component: CoachSessions,
    props: true,
  },
  {
    path: '/members',
    name: 'Members',
    component: Members,
  },
  {
    path: '/members/:id/sessions',
    name: 'MemberSessions',
    component: MemberSessions,
    props: true,
  },
  {
    path: '/sessions',
    name: 'Sessions',
    component: Sessions,
  },
  {
    path: '/sessions/:id',
    name: 'Session',
    component: Session,
    props: true,
  },
  {
    path: '/sessions/create',
    name: 'NewSession',
    component: NewSession,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router