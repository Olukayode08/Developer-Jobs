import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import Job from '../views/Job.vue'
import NotFound from '../views/NotFound.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../views/EditJob.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: Job,
    },
    {
      path: '/jobs/add',
      name: 'addJob',
      component: AddJob,
    },
    {
      path: '/jobs/edit/:id',
      name: 'editJob',
      component: EditJob,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound,
    },
  ],
})
export default router
