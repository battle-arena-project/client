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
    clickable: true,
    player: {},
    hp: 500,
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
    },
    clickableAttack(state, payload) {
      state.clickable = payload
    },
    setPlayer(state, payload){
     state.player = payload
    },
    newHP(state, payload) {
      state.player.hp = payload.health
      for(let i = 0; i < state.players.length; i++) {
        if(payload.id === state.players[i].id) {
          state.players[i].hp = state.player.hp
          // console.log(state.players[i].id, state.player.id  , "ketemu yang sama")
          break;
        }
      }
      // console.log(state.players, "semuaaaaaaaaaaaaaaaaa")
    }
  },
  actions: {
    createRoom({commit}, payload) {
      let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
      let randomId = ''
      for (let i = 0; i < 10; i++) {
        randomId += dict[Math.floor(Math.random() * dict.length)]
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
        hp: 500
      }

      commit('setPlayer', player)
      
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
    },
    startGame(context, payload) {
        setTimeout(function() {
            context.commit('clickableAttack', false)
            // console.log(payload)
            db.collection('rooms')
              .doc(payload.id)
              .update({
                players: payload.players
              })
            setTimeout(function() {
              context.commit('clickableAttack', true)
            }, 5000)
        }, 5000)
      
    } 
  }
})
