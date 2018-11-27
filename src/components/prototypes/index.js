import prototypes from './src/prototypes'
/* istanbul ignore next */
prototypes.install = function (Vue) {
  Vue.component(prototypes.name, prototypes)
}
export default prototypes
