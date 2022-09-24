import WorkUtilityBar from "./work-utility-bar.js";

export default {
    components: {
    },
    template:
    /* html */`
    <div>
        <div class="article-container">
            <h1 class="article-title">Chatter.dev&emsp;</h1>
            <p class="article-text">
                Machine Monitoring and Analytics <br/><br/>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    </div>
    `,
    data() {
        return {
        };
    },
    created() {
        this.$emit("setUtilityBar", WorkUtilityBar);
    },
};
