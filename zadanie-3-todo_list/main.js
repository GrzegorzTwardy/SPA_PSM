import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            list: [
                "Purchase two tickets to cinema",
                "Buy present for my wife",
                "Zoom meeting at 14:45",
                "Something else"
            ]
        }
    }
}).mount('#app');