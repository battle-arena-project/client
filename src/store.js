import Vue from 'vue'
import Vuex from 'vuex'
import db from './apis/firebase'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    getAllRooms(state, payload) {
      state.rooms = []
      state.rooms = payload
    },
    emptyRooms(state) {
      state.rooms = []
    }
  },
  actions: {
    createRoom(context, payload) {
      let dict = 'abcdefghijklmnopqrstuvwxyz'
      let randomId = ''
      for (let i = 0; i < 10; i++) {
        randomId += dict[Math.floor(Math.random() * dict.length)]
      }

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
          commit('emptyRooms')
          commit('getAllRooms', rooms)
        })
    },
    joinRoom({
      commit
    }, payload) {
      let dict = 'abcdefghijklmnopqrstuvwxyz'
      let randomId = ''
      for (let i = 0; i < 10; i++) {
        randomId += dict[Math.floor(Math.random() * dict.length)]
      }
      let player = {
        id: randomId,
        username: payload.username,
        hp: 200
      }

      db.collection('rooms')
        .doc(payload.roomId)
        .update({
          players: firebase.firestore.FieldValue.arrayUnion(player)
        })
        .then(() => {
          console.log('Successfuly join room')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
