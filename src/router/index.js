import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children : [
      {path : "show" ,component : () => import("../components/show.vue")},
      {path : "list" ,component : () => import("../components/list.vue")}
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {path : "/study",component : () => import("@/views/study.vue")},
  {path : "/team",component : () => import("@/views/team.vue")},
  {path : "/eco",component : () => import("@/views/eco.vue")}
];

const router = new VueRouter({
  routes,
  mode : "history"
});

export default router;
