<template>
  <div class="room m-4">
    <div class="image">
      <div class="layer d-flex justify-content-center align-items-center">
        <button class="btn btn-success px-5">JOIN</button>
      </div>
    </div>
    <div class="info p-2 d-flex flex-column">
      <h2 class="mb-3 align-self-center">{{room.name}}</h2>
      <h5 class="count pb-2">Players count: {{room.players.length}} / 4</h5>
      <h6>Player list:</h6>
      <ul>
        <li v-for="player in room.players" :key="player.id">{{player.username}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["room"]
};
</script>

<style scoped>
.room {
  font-family: "Oswald";
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.602);
  border-radius: 5px;
  position: relative;
  top: 0;
  transition: 0.2s;
  height: 100%;
}

button {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.507);
}

.layer {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 5px 5px 0 0;
  transition: 0.2s;
}
.room:hover {
  top: -4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.301);
}

.room:hover .layer {
  background-color: rgba(0, 0, 0, 0.479);
}

.count {
  border-bottom: 1px solid rgb(42, 42, 42);
}

.image {
  width: 250px;
  height: 180px;
  background-image: url("../assets/brand.jpeg");
  background-size: cover;
  border-radius: 5px 5px 0 0;
}
.info {
  color: rgb(13, 48, 65);
  border-radius: 0 0 5px 5px;
  background-color: rgba(219, 181, 11, 0.65);
}

li {
  list-style: none;
}
</style>