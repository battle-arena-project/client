<template>
  <div id="arena-container">
    <div class="arena">
      <Player></Player>
      <Player></Player>
      <Player></Player>
      <Player></Player>
      <Time></Time>
    </div>
  </div>

</template>

<script>
import Player from '@/components/Player.vue'
import Time from '@/components/Time.vue'

export default {
  components : {
    Player,
    Time
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Knewave&display=swap');

#arena-container{
  font-family: 'Knewave', cursive;
  background-image: url('../assets/arena-bg.jpg');
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed !important;
  z-index: 999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 100%;
}
.arena{
  width: 1000px;
  height: 600px;
  position: relative;
}
</style>
