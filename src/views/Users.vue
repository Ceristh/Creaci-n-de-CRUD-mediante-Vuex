<template>
  <div>
    <h1 class="m-5">Lista de Usuarios</h1>
    <table class="table container table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre de Usuario</th>
          <th scope="col">Correo electrónico</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row" class="userId">{{user.id}}</th>
          <td class="usuario"><router-link :to="`/users/${user.id}`">{{user.name}}</router-link></td>
          <td class="mail">{{user.email}}</td>
          <td><button class="btn btn-info boton mr-3">Editar</button>
          <button class="btn btn-danger boton" @click.prevent="eliminar(user.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-info mt-5" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Agregar nuevo usuario</button>
    <modal/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Modal from '../components/CreateModal.vue';

export default {
  name: "users-components",
  components:{
      'modal': Modal,
  },
  data: function () {
    return {};
  },
  computed: {
      ...mapState(['users'])
  },
  methods: {
      ...mapActions(['getUsers', 'deleteUser']),
      eliminar(id){
        let resp = confirm('¿Estas seguro de emilinar el usuario?')
        if(!resp){
          return
        }
        this.deleteUser(id).then(()=>{
          alert('Usuario eliminado')
          this.getUsers()
        }).catch(error=>{
          console.log(error)
        })
      }
  },
  created(){
      this.getUsers()
  },

};
</script>

<style scoped>
.boton{
  font-size: 24px;
}
.userId {
  vertical-align: middle;
}
.usuario {
  vertical-align: middle;
}
.mail {
  vertical-align: middle;
}
</style>