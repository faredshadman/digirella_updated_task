import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/pages//HomeView.vue";
import MainLayout from "../views/layouts/MainLayout.vue";
const routes = [
  {
    path: "/",
    name: "Layout",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
