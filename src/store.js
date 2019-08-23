import Vue from 'vue'
import Vuex from 'vuex'
import db from './apis/firebase'
import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    roomId: '',
    players: [],
  },
  mutations: {
    getAllRooms(state, payload) {
      state.rooms = []
      state.rooms = payload
    },
    emptyRooms(state) {
      state.rooms = []
    },
    fillRoomId(state, payload) {
      state.roomId = payload
    },
    fill(state, payload) {
      state.players = payload
    }
  },
  actions: {
    createRoom({commit}, payload) {
      let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
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
          players: [],
          status: true
        })
        .then(function (docRef) {
          // console.log(docRef, 'ini roomnya <<<<<<<<<<<<<<<<<')
          commit("fillRoomId", docRef.id)
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
          rooms = []
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
          return db.collection('rooms').doc(payload.roomId).get()
        })
        .then(doc => {
          // console.log(doc.data(), 'this data <<<<<<<<<<<<<<')
          if (doc.data().players.length >= 4) {
            db.collection('rooms').doc(payload.roomId).update({status: false})
          } else {
            console.log('Successfuly join room')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    fillPlayer(context, id) {
      db.collection('rooms').doc(id)
        .onSnapshot(doc => {
          context.commit('fill', doc.data().players)
        })
    }
  }
})
