import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/user/List";
import Profile from "../views/user/Profile";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/main",
      component: Main,

      children: [
        {
          path: "../views/user/Profile",
          component: Profile
        }
      ]
    }
  ]
});
