import Projects from "../../projects/projects.js";
import ProjectUtilityBar from "./project-utility-bar.js";

export default {
    components: {
        ProjectUtilityBar,
    },
    template:
    /* html */`
    <div>
        <div class="article-container">
            <h1 class="article-title">{{project.title}}</h1>
            <p class="article-text" v-html="project.article.summary"></p>
            <div 
                class="article-gallery"
                v-if="project[project.type].screenshots"
            >
                <img 
                    class="article-gallery-item"
                    :src="screenshotSrc"
                    v-for="screenshotSrc in project[project.type].screenshots"
                />
            </div>
            <p class="article-text" v-html="article"/>
        </div>
    </div>
    `,
    data() {
        return {
            projects: Projects,
        };
    },
    computed: {
        project() {
            const candidates = this.projects.filter((project) => project.title === this.$route.params.id);
            return candidates.length > 0 ? candidates[0] : null;
        },
        article() {
            return this.project.article.description.replaceAll("\n", "<br/>");
        },
    },
    created() {
        this.$emit("setUtilityBar", ProjectUtilityBar);
    },
};
