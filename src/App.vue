<template>
  <div id="app">
    <gl-header>
      <div>
        <div class="img"><img src="./assets/logo.png"></div>
        <h1><span>glsx-vue-common使用文档</span></h1>
      </div>
    </gl-header>
    <gl-main>
      <div>
        <h3>使用Key时引入</h3>
        <p>import { GlConst } from 'glsx-vue-common'</p>
        <p>const { AppConst, AsideConst, HeaderConst, FooterConst } = GlConst</p>
      </div>
      <div>
        <h3>使用介绍</h3>
        <gl-tabs v-model="activeName" @tab-click="handleClick">
            <gl-tab-pane label="方法" name="first">
              <prototypes class="p-t-20"></prototypes>
            </gl-tab-pane>
            <gl-tab-pane label="Key" name="second">
              <consts class="p-t-20"></consts>
              <!-- <prototypes class="p-t-20"></prototypes> -->
            </gl-tab-pane>
        </gl-tabs>
      </div>
      <!-- <router-view/> -->
    </gl-main>
    <gl-footer ref="top">Copyright © 2012-2022 深圳广联赛讯有限公司 版权所有</gl-footer>
    <!-- <img class="" src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import prototypes from './components/prototypes'
import consts from './components/consts'
export default {
  name: 'App',
  components: {
    prototypes,
    consts
  },
  data () {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>

<style>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  width: 100%;
}

.el-footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  height: 20px !important;
  line-height: 30px;
}
#app .el-header .img {
  width: 270px;
  height: 100%;
  float: left;
  box-sizing: border-box;
  /* padding: 20px 25px 25px 0; */
}
#app .el-header .img img {
  width: 100%;
}

.p-t-20 {
  padding-top: 20px;
}
</style>
