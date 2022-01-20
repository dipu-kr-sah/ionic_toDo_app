import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import TaskFullDetails from "../views/TaskDetailsById/FullDetailsOfTask";
import NewTask from "../views/NewTask";
import RouteNotFound from "../views/RouteNotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/new",
    name: "NewTaskCreate",
    component: NewTask,
  },
  {
    path: "/task/:taskId",
    name: "TaskFullDetails",
    component: TaskFullDetails,
  },
  {
    path: "/:pathMatch(.*)*",
    component: RouteNotFound,
    name: "NoRoutePath",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
