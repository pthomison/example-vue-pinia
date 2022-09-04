import * as Vue from 'Vue';

import { createPinia } from 'pinia';

import App from './app.vue';
import Component from './component.vue';

const root = Vue.createApp({});

const pinia = createPinia();
root.use(pinia);

root.component('app', App);
root.component('component', Component);

const vm = root.mount('#app');

