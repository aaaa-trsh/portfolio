import NavigationBar from "./components/navigation-bar.js";
import UtilityBar from "./components/utility-bar.js";
import HeroView from "./views/hero-view/hero-view.js";
import ProjectsView from "./views/projects-view/projects-view.js";
import ProjectView from "./views/project-view/project-view.js";
import WorkView from "./views/work-view/work-view.js";

const routes = [
    {
        path: "/",
        component: HeroView,
    },
    {
        path: "/projects/:filter",
        component: ProjectsView,
        props: true,
    },
    {
        path: "/project/:id",
        component: ProjectView,
    },
    {
        path: "/work",
        component: WorkView,
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = Vue.createApp({
    components: {
        NavigationBar,
        UtilityBar,
    },
    router,
    data() {
        return {
            utilityBarComponent: UtilityBar,
            utilityBarData: {},
        };
    },
    methods: {
        onSetUtilityBar(value) {
            console.log("asd");
            this.utilityBarComponent = value;
        },
        onSetUtilityData(data) {
            this.utilityBarData = data;
        },
    },
});

app.use(router);
app.mount("#app");
