import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { createApp } from 'vue';
import VCalendar from 'v-calendar';
import App from './App.vue';
import router from './router';
import 'v-calendar/style.css';
import './assets/main.css';

const app = createApp(App);
// Use plugin with optional defaults
app.use(VCalendar, {});
app.use(router);
app.mount('#app');
