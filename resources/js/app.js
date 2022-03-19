require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

/*
window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
});*/
import 'bootstrap/dist/js/bootstrap.js'