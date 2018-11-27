import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Prototypes = { template: '<prototypes />' }
const Consts = { template: '<consts />' }
const Detailed = { template: '<detailed />' }

export const routes = [
  {
    path: '/',
    redirect: 'prototypes'
  },
  {
    path: '/prototypes',
    component: Prototypes
  },
  {
    path: '/consts',
    component: Consts
  },
  {
    path: '/detailed',
    component: Detailed
  }
]
export default new Router({
  routes
  // linkActiveClass: 'active'
})
