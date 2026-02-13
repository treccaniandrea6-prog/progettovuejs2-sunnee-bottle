import { createRouter, createWebHistory } from "vue-router"
import Welcome from "../pages/Welcome.vue"
import ConfiguratorStep from "../pages/ConfiguratorStep.vue"
import ThankYou from "../pages/ThankYou.vue"

const routes = [
  { path: "/", name: "welcome", component: Welcome },
  { path: "/step/:part", name: "step", component: ConfiguratorStep },
  { path: "/thank-you", name: "thankyou", component: ThankYou },
  { path: "/:pathMatch(.*)*", redirect: "/" },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
