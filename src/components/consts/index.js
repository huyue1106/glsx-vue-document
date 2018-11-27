import consts from './src/consts'
/* istanbul ignore next */
consts.install = function (Vue) {
  Vue.component(consts.name, consts)
}
export default consts
