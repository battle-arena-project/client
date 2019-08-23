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
  background-image: url('./assets/arena-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  overflow: auto;
}
</style>
