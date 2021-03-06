import Vue from "vue";
import Router from "vue-router";

import Splash from "@/components/Splash";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Splash",
            component: Splash
        },
    ],
    mode: "history" // Eliminates #/ from the URL
});