import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Issue1 from "../src/components/Issue1.vue";
import { createRouter, createWebHistory, useRouter } from "vue-router";
import Menu from "/src/components/Menu.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Menu",
      component: Menu,
    },
    {
      path: "/Introduction",
      name: "Introduction",
      component: Issue1,
    },
  ],
});

createApp(App).use(router).mount("#app");
