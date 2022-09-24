export default {
    template:
    /* html */`
    <div class="navigation-bar-container">
        <ul>
            <li>
                <div class="strikethrough" :class="{ active: $route.path == '/projects/game' }"/>
                <router-link to="/projects/game">PROJECTS</router-link>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: $route.path == '/work' }"/>
                <router-link to="/work">WORK</router-link>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: $route.path == '/contact' }"/>
                <router-link to="/contact">CONTACT</router-link>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: $route.path == '/resume' }"/>
                <router-link to="/resume">RESUME</router-link>
            </li>
        </ul>
    </div>
    `,
    data() {
        return {
            ha: null,
        };
    },
};
