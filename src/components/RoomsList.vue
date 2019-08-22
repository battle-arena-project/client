<template>
  <div class="room-list d-flex flex-wrap">
    <RoomCard></RoomCard>
    <RoomCard></RoomCard>
    <RoomCard></RoomCard>
    <RoomCard></RoomCard>
    <RoomCard></RoomCard>
    <RoomCard></RoomCard>
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";

export default {
  components: {
    RoomCard
  }
};
</script>

<style scoped>
</style>