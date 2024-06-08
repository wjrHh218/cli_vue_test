import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/Layout.vue";
import Params from "../views/main/Params.vue";
import ADCategory from "../views/main//ADCategory.vue";
import Product from "../views/main/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "params",
        name: "Params",
        component: Params,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "adCategory",
        name: "ADCategory",
        component: ADCategory,
        meta: {
          isLogin: true,
        },
      },
      {
        path: "/product",
        name: "Product",
        component: Product,
        meta: {
          isLogin: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
