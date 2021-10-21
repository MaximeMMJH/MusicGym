import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import ProfileEdit from "../views/ProfileEdit.vue";
import Register from "@/views/Register.vue";
import RoutineShow from "@/views/RoutineShow.vue";
import CreateOptions from "@/views/CreateOptions.vue";
import Search from "@/views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/profile/edit",
    name: "profileEdit",
    component: ProfileEdit,
  },
  {
    path: "/routine/:id",
    name: "routine-show",
    component: RoutineShow,
    props: true,
  },
  {
    path: "/create",
    name: "create-options",
    component: CreateOptions,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
