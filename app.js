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
            isMobile: false,
        };
    },
    methods: {
        onSetUtilityBar(value) {
            if (value === null) {
                this.utilityBarComponent = UtilityBar;
            } else {
                this.utilityBarComponent = value;
            }
        },
        onSetUtilityData(data) {
            this.utilityBarData = data;
        },
        onResize() {
            this.isMobile = window.innerWidth < 700;
        },
    },
    created() {
        window.addEventListener("resize", this.onResize);
        this.mobileQuery = window.matchMedia("(max-width: 700px)");
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
});

app.use(router);
app.mount("#app");
