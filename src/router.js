import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    name: "Dashboard",
    component: AppDashboard
  },
  {
    path: "/dc/:id",
    alias: "/dc",
    name: "Form",
    component: AppForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
