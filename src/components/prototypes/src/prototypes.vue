<template>
  <div>
    <p>Key可以自行设置，也可使用已有的Key</p>
    <gl-table :table="tableData"></gl-table>
  </div>
</template>

<script>
export default {
  name: 'prototypes',
  data () {
    return {
      tableData: {
        border: true,
        // export: true,
        height: parseInt(window.screen.height - 350),
        align: 'center',
        data: [{}],
        column: [{
          label: '方法',
          prop: 'method'
        }, {
          label: '参数',
          prop: 'parameter'
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
      this.tableData.data = res.body.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
