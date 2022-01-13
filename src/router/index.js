import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import ProfileEdit from "../views/ProfileEdit.vue";
import Register from "@/views/Register.vue";
import RoutineShow from "@/views/RoutineShow.vue";
import CreateOptions from "@/views/CreateOptions.vue";
import Search from "@/views/Search.vue";
import ExerciseCreate from "@/views/ExerciseCreate.vue";
import RoutineCreate from "@/views/RoutineCreate.vue";
import RoutineFollow from "@/views/RoutineFollow.vue";
import ExerciseShow from "@/views/ExerciseShow.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { auth: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: true,
    meta: { auth: false },
  },
  {
    path: "/exercise/create/:id?",
    name: "exercise-create",
    component: ExerciseCreate,
    props: true,
    meta: { auth: true },
  },
  {
    path: "/routine/create/:id?",
    name: "routine-create",
    component: RoutineCreate,
    props: true,
    meta: { auth: true },
  },
  {
    path: "/routine/follow/:id",
    name: "routine-follow",
    component: RoutineFollow,
    props: true,
    meta: { auth: true },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { auth: false },
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: Profile,
    props: true,
    meta: { auth: true },
  },
  {
    path: "/profile/edit",
    name: "profileEdit",
    component: ProfileEdit,
    meta: { auth: true },
  },
  {
    path: "/routine/:id",
    name: "routine-show",
    component: RoutineShow,
    props: true,
    meta: { auth: true },
  },
  {
    path: "/exercise/:id",
    name: "exercise-show",
    component: ExerciseShow,
    props: true,
    meta: { auth: true },
  },
  {
    path: "/create",
    name: "create-options",
    component: CreateOptions,
    meta: { auth: true },
  },
  {
    path: "/search",
    name: "search",
    component: Search,
    meta: { auth: true },
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
    meta: { auth: false },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters["auth/isUserAuthenticated"]) {
    next("/login");
  }

  if (!to.meta.auth && store.getters["auth/isUserAuthenticated"]) {
    next("/");
  }

  next();
});

export default router;
