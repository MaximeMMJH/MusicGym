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
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/exercise/create",
    name: "exercise-create",
    component: ExerciseCreate,
  },
  {
    path: "/routine/create/:id?",
    name: "routine-create",
    component: RoutineCreate,
    props: true,
  },
  {
    path: "/routine/follow/:id",
    name: "routine-follow",
    component: RoutineFollow,
    props: true,
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
    path: "/exercise/:id",
    name: "exercise-show",
    component: ExerciseShow,
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
