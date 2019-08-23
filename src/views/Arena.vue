<template>
  <div id="arena-container">
    <div class="arena">
      <Player 
        :player="player" 
        v-for="player in getPlayers" 
        :key="player.id" 
        :standbyState="getRoomStandByState"
        :roomId="roomId"
        :allPlayers="getPlayers"
        />
      <Time></Time>
      <button @click="startGame" v-if="!getRoomStandByState">Start</button>
    </div>
  </div>

</template>

<script>
import Player from '@/components/Player.vue'
import Time from '@/components/Time.vue'

export default {
  data() {
    return {
      standby: false,
      roomId: this.$route.params.id,
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
    },
    getRoomStandByState() {
      return this.$store.state.standby
    }
  },
  created() {
    this.$store.dispatch('fillPlayer', this.$route.params.id)
    this.$store.dispatch('findRoomState', this.$route.params.id)
    console.log(this.$route.params)
  },
  methods: {
    startGame() {
      this.$store.dispatch('startGame', {id: this.$route.params.id, players: this.$store.state.players})
    }
  },
  mounted() {
    this.playSound('../assets/bg-sound.mp3')
  },
   
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Knewave&display=swap');

#arena-container{
  font-family: 'Knewave', cursive;
  background-image: url('../assets/arena-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed !important;
  z-index: 2 !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 100%;
}
.arena{
  width: 1000px;
  height: 500px;
  position: relative;
  bottom: 30px;
}
</style>
