import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import PageNotFound from "@/pages/NotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    { path: "*", component: PageNotFound },
  ],
});