import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark, faPhone, faChevronRight, faLocationCrosshairs, faCommentDots, faEnvelope as faEnvelopeSolid, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import './_style.scss';
import App from './App.vue';

library.add(faXmark, faPhone, faChevronRight, faFacebook, faInstagram, faEnvelope, faLocationCrosshairs, faCommentDots, faEnvelopeSolid, faBars);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
