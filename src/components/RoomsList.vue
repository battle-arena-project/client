<template>
  <div class="room-list d-flex flex-wrap">
    <RoomCard v-for="room in rooms" :key="room.id" :room="room"></RoomCard>
  </div>
</template>

<script>
import RoomCard from "@/components/RoomCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    RoomCard
  },
  data() {
    return {};
  },
  computed: {
    rooms() {
      return this.$store.state.rooms
    }
  },
  created() {
    this.$store.dispatch("getAllRooms");
  }
};
</script>

<style scoped>
</style>