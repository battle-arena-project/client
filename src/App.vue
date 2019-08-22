<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view class="mt-5"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
#app {
  background-image: url("./assets/funky-lines.png");
  height: 100vh;
}
</style>
