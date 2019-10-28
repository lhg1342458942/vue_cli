<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link to="/show">show</router-link>| 
    <router-link to="/list">list</router-link>
    <router-view></router-view>
  </div>
  
</template>

<script>
import HelloWorld from "@/components/index.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
	a {
		color : red;
		margin-right: 10px;
	}
</style>
