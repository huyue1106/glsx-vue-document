<template>
  <div id="app">
    <gl-header :height='"100px"'>
      <div>
        <div class="img"><img src="./assets/logo.png"></div>
        <h1><span>glsx-vue-common使用文档</span></h1>
      </div>
    </gl-header>
    <div class="app-main">
    <gl-container style="margin-top: 100px;">
      <gl-aside class="aside" :width='"270px"'>
        <ul class="pure-menu-list">
          <li>
            <router-link to="/prototypes">方法</router-link>
          </li>
          <li>
            <router-link to="/consts">Key</router-link>
          </li>
          <li>
            <router-link to="/detailed">详细说明</router-link>
          </li>
        </ul>
      </gl-aside>
      <gl-main class="main">
        <router-view/>
      </gl-main>
    </gl-container>
    </div>
    <gl-footer ref="top">Copyright © 2012-2022 深圳广联赛讯有限公司 版权所有</gl-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style>
.el-header,.el-footer {
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
#app .el-header{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2001;
    background: #fff;
    text-align: center;
  }
#app .el-header>div,.el-container{
  width: 1240px;
  height: 100%;
  margin: 0 auto;
}
.p-t-20 {
  padding-top: 20px;
}
.aside{
    position: fixed;
    top: 0;
    bottom: 0;
    margin-top: 100px;
    margin-bottom: -17px;
    overflow-x:auto;
    transition: all 1s;
    z-index: 1999;
  }
  .main{
    margin-left:270px;
  }
  .pure-menu-list  li{
    list-style-type: none;
  }
  .pure-menu-list li a{
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    text-decoration: none;
    font-weight: bold;
  }
  .pure-menu-list li .router-link-active{
    color: #409eff;
  }
  .el-table .cell {
    text-align: left;
  }
</style>
