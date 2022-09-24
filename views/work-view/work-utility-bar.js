export default {
    template:
    /* html */`
    <div>
        <ul>
            <li>
                <div class="strikethrough" :class="{ active: current === 'chatter' }"/>
                <span>Chatter</span>
            </li>
            <li>
                <div class="strikethrough" :class="{ active: current === 'joathrent' }"/>
                <span>Joathrent Studios</span>
            </li>
        </ul>
    </div>
    `,
    data() {
        return {
            current: "chatter",
        };
    },
};
