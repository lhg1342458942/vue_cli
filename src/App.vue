<template>
  <div id="app">
    <Head></Head>
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>|
      <router-link to="/study">学习</router-link>|
      <router-link to="/team">团队</router-link>|
      <router-link to="/eco">生态系统</router-link>
    </div>
    <router-view />
    <Foot></Foot>
  </div>
</template>
<script>
import Head from "./components/header.vue";
import Foot from "./components/foot.vue";
export default {
  components :{
    Head,
    Foot
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding : 0 15px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
footer {
  background : #abf;
  text-align : left;
  img {
    width : 150px;
  }
}
body,html {
  height : 100%;
}

</style>
