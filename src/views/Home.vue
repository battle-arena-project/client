<template>
  <div class="home d-flex flex-column align-items-center p-5">
    <div class="options mb-4">
      <button v-b-modal.modal-1 class="btn btn-primary">Create Room</button>
      <!-- modal -->
      <div>
        <b-modal id="modal-1" title="Create Room">
          <form @submit.prevent="createRoom(roomName)">
            <b-form-input placeholder="Enter room name" v-model="roomName"></b-form-input>
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
      roomName: ""
    };
  },
  methods: {
    createRoom(payload) {
      this.roomName = ""
      this.$bvModal.hide('modal-1')
      this.$store.dispatch('createRoom', payload)
    }
  }
};
</script>

<style scoped>
</style>
