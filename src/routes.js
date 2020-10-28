/** *This Page for routers.{@link name}
 * *@authorAuthor/cho brandone
 *@date Aug 11/10/2020
 *Contibutors : Contributors name,
 **/
import Sector from "./components/Sectors/Sector.vue";
import Home from "./components/Home/Home.vue";

import Question from "./components/Questions/Question.vue";
import Result from "./components/Results/Result.vue";
import Platform from "@/components/Platform/Platform";
import ThankYouPage from "./components/Results/ThankYouPage.vue";

export const routes = [
    { path: "", component: Home },
    {
        path: "/start",
        component: Sector,
    },
    { path: "/platform/:id", component: Platform },
    { path: "/question/:id", component: Question },
    { path: "/result", component: Result },
    { path: "/thankYou", component: ThankYouPage },
];