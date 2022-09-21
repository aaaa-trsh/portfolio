import NavigationBar from "./components/navigation-bar.js";
import UtilityBar from "./components/utility-bar.js";
import ProjectsView from "./views/projects-view.js";

const routes = [
    { path: '/', component: ProjectsView },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, 
});

var app = Vue.createApp({
    components: {
        NavigationBar,
        UtilityBar
    },
    router,
    data() {
        return {};
    }
});

app.use(router);
app.mount("#app")
