<template>
  <div>
    <div>
      <h3>按需引入</h3>
      <p>import { GlConst } from 'glsx-vue-common'</p>
      <p>const { AppConst, AsideConst, HeaderConst, FooterConst } = GlConst</p>
    </div>
    <div>
      <h3>使用介绍</h3>
      <gl-table :table="constsData"></gl-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prototypes',
  data () {
    return {
      constsData: {
        border: true,
        // export: true,
        height: parseInt(window.screen.height - 450),
        align: 'center',
        data: [{}],
        column: [{
          label: 'Key',
          prop: 'Key'
        }, {
          label: '描述',
          prop: 'description'
        }, {
          label: '系统案例',
          prop: 'instructions'
        }]
      }
    }
  },
  mounted () {
    this.$http.get('../../static/data.json').then(res => {
      this.constsData.data = res.body.consts
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
