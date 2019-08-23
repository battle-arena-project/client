<template>
  <div class="player-container">
    <div class="username">
      <h2>{{player.username}}</h2>
    </div>
    <div class="hp-container">
      <div class="hp" :style="
        'width:'+ (health/500) * 100 + '%;background-color:' + hpColor +' !important;'">
        <h1>{{health}}</h1>
      </div>
    </div>
    <div class="player">
      <img src="../assets/knight-idle.gif" v-if="status">
      <img src="../assets/knight-dead.gif" v-else>
    </div>
    <div class="position">
      <img src="../assets/player-position.png" alt="" srcset="">
    </div>
    <div @click="attack" class="player-attack" v-if="player.username !== getUsername && status && standbyState">
      <h2>Attack</h2>
    </div>
  </div>
</template>

<script>
import { setPriority } from 'os';
import { setInterval } from 'timers';
export default {
  data() {
    return {
      health: 500,
      status: true,
      clickable: true,
      hpColor: '#1bd82a'
    };
  },
  methods: {
    attack() {
      let damage = Math.floor(Math.random() * 6) + 5;
      this.health -= damage;
      console.log(this.player, "player attack")
      this.$store.commit('newHP', {health: this.health, id: this.player.id, username: this.player.username})
      if(this.health <= 0) {
        this.health = 0;
        this.status = false
      }

      if(this.health > 400){
        this.hpColor = '#1bd82a';
      }else if(this.health > 300){
        this.hpColor = '#C5FF00';
      }else if(this.health > 200){
        this.hpColor = '#FFE400';
      }else if(this.health > 100){
        this.hpColor = '#FF8000';
      }else{
        this.hpColor = '#FF0000';
      }
    }

  },
  props: ['player', 'standbyState'],
  computed: {
    getUsername() {
      return localStorage.getItem('player')
    },
    clickableAttack() {
      return this.$store.state.clickable
    },
 
  }
}
</script>

<style>
.player-container{
  position: absolute;
  width: 250px;
  height: 400px;
  animation-name: animate-position;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-direction: alternate-reverse;
}
@keyframes animate-position{
  from{
    bottom: 0;
  }
  to{
    bottom: 10px;
  }
}
.player-container:nth-child(1){
  bottom: 0;
  left: 0;
}
.player-container:nth-child(2){
  top: 20px;
  left: 200px;
}
.player-container:nth-child(3){
  bottom: 0;
  right: 0;
}
.player-container:nth-child(3) img{
  transform: scaleX(-1)
}
.player-container:nth-child(4){
  top: 30px;
  right: 0;
  right: 250px;
}
.player-container:nth-child(4) img{
  transform: scaleX(-1);
}
.player{
  position: absolute;
  bottom: 70px;
  z-index: 5;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
}
.position{
  position: absolute;
  bottom: 0;
  z-index: 3;
}
.hp-container{
  width: 200px;
  height: 30px;
  border: 2px solid #ffffff;
  position: absolute;
  top: 60px;
}
.hp{
  width: 80%;
  height: 100%;
  background-color: #1bd82a;
}
.hp h1{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 14pt;
  color: #ffffff;
  -webkit-text-stroke: 1px red;
}
.player-attack{
  background: linear-gradient(90deg, #fa7900, rgb(224, 30, 17));
  padding: 5px 20px;
  border: 3px solid #f89334;
  border-radius: 10pt;
  position: absolute;
  bottom: 30px;
  z-index: 22;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.player-attack:active{
  transform: translateX(-50%) scale(0.95);
}
.player-attack h2{
  font-size: 14pt;
  color: #ffffff;
  line-height: 1em;
}
.username{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
}
.username h2{
  color: #eb3f29;
  -webkit-text-stroke: 1px #ffe0c6;
}
</style>