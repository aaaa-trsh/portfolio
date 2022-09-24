export default {
    template:
    /* html */`
    <div>
        <ul>
            <li>
                <div class="strikethrough" :class="{ active: $route.params['filter'] === 'game' }" />
                <router-link to="/projects/game">games</router-link>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: $route.params['filter'] === 'web' }" />
                <router-link to="/projects/web">web</router-link>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: $route.params['filter'] === 'robotics' }" />
                <router-link to="/projects/robotics">robotics</router-link>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: $route.params['filter'] === 'ai' }" />
                <router-link to="/projects/ai">ai</router-link>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: $route.params['filter'] === 'misc' }" />
                <router-link to="/projects/misc">misc</router-link>
            </li>
        </ul>
    </div>
    `,
    data() {
        return {
            filter: "games",
        };
    },
    methods: {
        setFilter(filter) {
            this.filter = filter;
            this.$emit("setUtilityData", this.$data);
        },
    },
};
