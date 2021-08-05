import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGithub, faInstagram, faVk, faMarkdown,} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faAngleDown, faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faInstagram, faVk, faMarkdown, faArrowDown, faArrowUp, faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
