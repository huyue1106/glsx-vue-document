<template>
  <div>
    <gl-table :table="constsData"></gl-table>
  </div>
</template>

<script>
export default {
  name: 'prototypes',
  data () {
    return {
      constsData: {
        // border: true,
        export: true,
        height: parseInt(window.screen.height - 580),
        align: 'center',
        data: [{}],
        column: [{
          label: 'Key',
          prop: 'key'
        }, {
          label: '描述',
          prop: 'description'
        }, {
          label: '使用说明',
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
