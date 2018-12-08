import Vue from "vue";
import Router from "vue-router";
import { routerBaseUrl } from "@/config/env.js";
import HelloWorld from "@/pages/HelloWorld";
// const HelloWorld = () => import('@/pages/HelloWorld')

const list = () => import(/* webpackPrefetch: true */ "@/pages/list");

Vue.use(Router);

export default new Router({
    mode: "hash",
    base: routerBaseUrl,
    routes: [
        {
            path: "/",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/list",
            name: "list",
            component: list
        }
    ]
});
