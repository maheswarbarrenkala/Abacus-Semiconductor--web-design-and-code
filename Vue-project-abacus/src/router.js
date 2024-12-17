import Vue from "vue";
import Router from "vue-router";
import DesktopView from "./components/DesktopView";
import MobileView from "./components/MobileView";
import Frame1 from "./components/Frame1";
import { desktopViewData, mobileViewData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/desktop-view",
      component: DesktopView,
      props: { ...desktopViewData },
    },
    {
      path: "/mobile-view",
      component: MobileView,
      props: { ...mobileViewData },
    },
    {
      path: "*",
      component: Frame1,
      props: {
        group9:
          "https://cdn.animaapp.com/projects/675a88540eabbabe97d7bd9e/releases/675a886177c386e816e9ec3c/img/group-6@2x.png",
        group10:
          "https://cdn.animaapp.com/projects/675a88540eabbabe97d7bd9e/releases/675a886177c386e816e9ec3c/img/group-10@2x.png",
      },
    },
  ],
});
