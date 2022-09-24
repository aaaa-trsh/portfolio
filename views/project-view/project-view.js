import Projects from "../../projects/projects.js";

export default {
    template:
    /* html */`
    <div class="article-wrapper">
        <div class="article-container">
            <h1 class="article-title" v-html="project.title"></h1>
            <p class="article-text" v-html="project.article.summary"></p>
            <div 
                class="article-gallery-wrapper"
                v-if="project[project.type].screenshots"
            >   
                <div class="article-gallery">
                    <img 
                        class="article-gallery-item"
                        :src="screenshotSrc"
                        v-for="screenshotSrc in project[project.type].screenshots"
                    />
                </div>
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
            const candidates = this.projects.filter((project) => project.id === this.$route.params.id);
            return candidates.length > 0 ? candidates[0] : null;
        },
        article() {
            return this.project.article.description.replaceAll("\n", "<br/>");
        },
    },
    created() {
        this.$emit("setUtilityBar", null);
    },
};
