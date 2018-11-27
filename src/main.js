// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GlsxVueComponents from 'glsx-vue-components'
import 'glsx-vue-components/dist/glsx-vue-components.css'
import VueResource from 'vue-resource'
import { prototypes, consts, detailed } from './components'
Vue.component('prototypes', prototypes)
Vue.component('consts', consts)
Vue.component('detailed', detailed)
Vue.use(GlsxVueComponents)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
