import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import bulma from 'bulma'

const app = createApp(App);

app.use(bulma).use(store).use(router).mount('#app');
