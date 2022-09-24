export default {
    props: {
        project: Object,
        id: Number,
    },
    template:
    /* html */`
    <div class="projects-grid-item" v-if="enabled">
        <router-link :to="{ path: '/project/' + project.title }">
            <img 
                :src="project.thumbnail.image"
                :style="{
                    transformOrigin: project.thumbnail.origin,
                    transform: project.thumbnail.transform,
                    filter: project.thumbnail.filter,
                }"
            />
        </router-link>
    </div>
    `,
    data() {
        return {
            enabled: false,
        };
    },
    created() {
        setTimeout(() => {
            this.enabled = true;
        }, this.id * 1000);
    },
};
