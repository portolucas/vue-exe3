import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { store } from "./store";

import MovieDetail from "./pages/MovieDetail";
import MoviesList from "./pages/MoviesList";
import Favorites from "./pages/Favorites";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/movie/:id", component: MovieDetail },
    { path: "/", component: MoviesList },
    { path: "/favorites", component: Favorites },
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
