import detailed from './src/detailed'
/* istanbul ignore next */
detailed.install = function (Vue) {
  Vue.component(detailed.name, detailed)
}
export default detailed
