import Vue from "vue";
import Router from "vue-router";
import Random from "./views/Random.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "random",
      component: Random
    },
    {
      path: "/search",
      name: "search",
      // route level code-splitting
      // this generates a separate chunk (search.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "search" */ "./views/Search.vue")
    }
  ]
});
