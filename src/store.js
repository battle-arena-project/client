import Vue from 'vue'
import Vuex from 'vuex'
import db from './apis/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    getAllRooms(state, payload) {
      state.rooms = payload
      console.log(state.rooms)
    }
  },
  actions: {
    createRoom(context, payload) {
      console.log(payload, 'ini payload nya')
      let dict = 'abcdefghijklmnopqrstuvwxyz'
      let randomId = ''
      for (let i = 0; i < 10; i++) {
        randomId += dict[Math.floor(Math.random() * dict.length)]
      }
      console.log(randomId)
      let player = {
        id: randomId,
        username: payload.roomMasterName,
        hp: 200,
      }

      db.collection('rooms')
        .add({
          name: payload.roomName,
          players: [player],
          status: false
        })
        .then(function (docRef) {
          console.log(docRef, 'ini roomnya <<<<<<<<<<<<<<<<<')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllRooms({
      commit
    }) {
      let rooms = []
      db.collection('rooms')
        .onSnapshot(querySnapshot => {

          querySnapshot.forEach(doc => {
            let data = {
              id: doc.id,
              ...doc.data()
            };

            rooms.push(data)
          });
          
          commit('getAllRooms', rooms)
        })
    }
  }
})
