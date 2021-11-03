import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/fireDataBase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    PRINT_USER(state, user){  
      state.users.push({
        id: user.id,
        name: user.data().name,
        email: user.data().email
      })
    },
      REMOVE_USER(state){
        state.users = []
      }
    },
  actions: {
    getUsers({commit}) {
      db.collection('Usuarios').get().then((resp) => {
        commit('REMOVE_USER')
        resp.forEach((doc) =>{
          console.log(`${doc.id} => ${doc.data()}`)
          commit('PRINT_USER', doc)
        })
      })
    },
    addUser({}, user){
      return db.collection('Usuarios').add(user)
    },
    getIdUser({}, id_user){
      return db.collection('Usuarios').doc(id_user).get()
    },
    deleteUser({},id_user){
      return db.collection('Usuarios').doc(id_user).delete()
    }
  },
  modules: {
  }
})
