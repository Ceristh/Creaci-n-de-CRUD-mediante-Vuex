<template>
  <div>    
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Agregar nuevo usuario</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Nombre:</label>
                <input v-model="user.name" type="text" class="form-control" id="recipient-name"/>
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label">Correo electronico:</label>
                <input v-model="user.email" type="text" class="form-control" id="recipient-name" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-info" data-dismiss="modal" @click="createUser">Agregar</button>
            <button type="button" class="btn btn-dark">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "modal",
  data: function () {
    return {
      user:{
        name:"",
        email:"",
      }
    };
  },
  methods: {
    ...mapActions(['addUser', 'getUsers']),
    createUser(){
      this.addUser(this.user).then(()=>{
        this.getUsers()
        alert('Usario agregado exitosamente!')
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  
};
</script>