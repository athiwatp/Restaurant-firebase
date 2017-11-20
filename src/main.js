// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuefire from 'vuefire'
import Vuetify from 'vuetify'
import { ref, auth } from './config/firebase'
import './stylus/main.styl'
import App from './App'
import { routes } from './router/index'
import moment from 'moment'


Vue.use(Vuetify)
Vue.use(Vuefire)

Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes,
});

export const EventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
