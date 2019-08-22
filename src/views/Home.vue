<template>
  <div class="home d-flex flex-column align-items-center p-5">
    <div class="options mb-4">
      <button v-b-modal.modal-1 class="btn btn-primary">Create Room</button>
      <div>
        <b-modal id="modal-1" title="Create Room">
          <form>
            <b-form-input placeholder="Enter room name"></b-form-input>
            <input type="submit" v-show="false" />
          </form>
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

export default {
  name: "home",
  components: {
    RoomsList
  }
};
</script>
<style scoped>
</style>
