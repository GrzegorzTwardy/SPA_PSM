import {createApp, computed} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
            weight: 0,
            height: 0,
            bmiMessage: computed(() => {return (this.weight / ((this.height / 100)**2)).toFixed(1);
        })
    }}
}).mount('#app');


