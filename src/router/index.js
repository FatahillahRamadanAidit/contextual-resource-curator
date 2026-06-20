import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProfileView from "../views/ProfileView.vue";
import RecommendationView from "../views/RecommendationView.vue";
import HistoryView from "../views/HistoryView.vue";

const routes = [
  {
    path: "/",
    component: LoginView
  },
  {
    path: "/register",
    component: RegisterView
  },
  {
    path: "/profile",
    component: ProfileView
  },
  {
    path: "/recommendations",
    component: RecommendationView
  },
  {
  path: "/history",
  component: HistoryView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;