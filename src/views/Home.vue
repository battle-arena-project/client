<template>
  <div class="home d-flex flex-column align-items-center p-5">
    <div class="options mb-4">
      <button v-b-modal.modal-1 class="btn btn-primary">Create Room</button>
      <!-- modal -->
      <div>
        <b-modal id="modal-1" title="Create Room">
          <form @submit.prevent="createRoom()">
            <b-form-input placeholder="Enter room name" v-model="initRoom.roomName"></b-form-input>
            <label for class="mt-3">Player Name:</label>
            <b-form-input placeholder="Your name" v-model="initRoom.roomMasterName"></b-form-input>
            <input type="submit" v-show="false" />
          </form>
          <div slot="modal-footer"></div>
        </b-modal>
      </div>
    </div>
    <div class="roomlist">
      <RoomsList></RoomsList>
    </div>
  </div>
</template>

<script>
import RoomsList from "@/components/RoomsList.vue";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    RoomsList
  },
  data() {
    return {
      initRoom: {
        roomName: "",
        roomMasterName: ""
      }
    };
  },
  methods: {
    createRoom(payload) {
      this.roomName = "";
      this.$bvModal.hide("modal-1");
      this.$store.dispatch("createRoom", this.initRoom);
    }
  }
};
</script>

<style scoped>
</style>
