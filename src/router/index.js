import Vue from 'vue'
import Router from 'vue-router'
import Attendance from '../components/Attendance.vue'
import ScareCode from '../components/ScareCode.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ScareCode,
      name: 'ScareCode'
    },
    {
      path: '/ScareCode',
      component: ScareCode,
      name: 'ScareCode'
    },
    {
      path: '/Attendance',
      component: Attendance,
      name: 'Attendance'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})
