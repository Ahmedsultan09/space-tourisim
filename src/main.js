import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeVue from "./components/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: HomeVue },
    {
      path: "/destination",
      name: "Destination",
      component: () => import("./components/Destination/Destination.vue"),
    },
    {
      path: "/crew",
      name: "Crew",
      component: () => import("./components/Crew/Crew.vue"),
    },
    {
      path: "/technology",
      name: "Technology",
      component: () => import("./components/Technology/Technology.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
