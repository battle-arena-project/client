<template>
  <div id="arena-container">
    <div class="arena">
      <Player :player="player" v-for="player in getPlayers" :key="player.id"></Player>
      <Time></Time>
      <button @click="startGame">Start</button>
    </div>
  </div>

</template>

<script>
import Player from '@/components/Player.vue'
import Time from '@/components/Time.vue'

export default {
  data() {
    return {
      
    };
  },
  components : {
    Player,
    Time
  },
  computed: {
    getPlayers() {
      const players = this.$store.state.players;
      console.log(players)
      return this.$store.state.players;
    }
  },
  created() {
    this.$store.dispatch('fillPlayer', this.$route.params.id)
    console.log(this.$route.params)
  },
  methods: {
    startGame() {
      this.$store.dispatch('startGame', {id: this.$route.params.id, players: this.$store.state.players})
    }
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
