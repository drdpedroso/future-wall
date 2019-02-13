import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import VDragged from "v-dragged";
import Croppa from 'vue-croppa';


Vue.use(Router);
Vue.use(VDragged);

Vue.use(Croppa);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
