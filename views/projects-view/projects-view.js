import Projects from "../../projects/projects.js";
import ProjectThumbnail from "./project-thumbnail.js";
import ProjectsUtilityBar from "./projects-utility-bar.js";

export default {
    props: ["filter"],
    components: {
        ProjectThumbnail,
        ProjectsUtilityBar,
    },
    template:
    /* html */`
    <div>
        <div class="projects-grid">
            <project-thumbnail
                v-for="[idx, project] in filteredProjects.entries()"
                :project="project"
                :id="idx/50"
            />
        </div>
    </div>
    `,
    data() {
        return {
            projects: Projects,
        };
    },
    computed: {
        filteredProjects() {
            return this.projects.filter((project) => project.type === this.filter);
        },
    },
    created() {
        this.$emit("setUtilityBar", ProjectsUtilityBar);
    },
};
