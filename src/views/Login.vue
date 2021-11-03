<template>
  <div>
    <h1 class="my-5">Iniciar Sesión</h1>
    <form>
      <label class="my-2">Usaurio</label>
      <input type="text" v-model='user'/>
      <label class="my-2">Contraseña</label>
      <input type="password" v-model='pass'>
      <button class="btn mt-3" @click.prevent='login'>Ingresar</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "login",
  data: function () {
    return {
      user: "",
      pass: "",
    };
  },
  methods: {
      login(){
          firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
          .then((resp) =>{
              console.log(resp, 'login')
              this.$router.push('/')
          })
          .catch(error=>{
              let errorCode=error.code;
              let errorMessage=error.message;
              console.log(errorCode, errorMessage)
          })
      }
  },
};
</script>

<style scoped>
    form{
        display:grid;
        width:500px;
        margin:0 auto;
        border-radius: 10px;
        padding: 20px;
        background-color:rgb(244, 245, 245);
        border: 2px solid rgb(177, 177, 177);
    }
    label {
        margin: 20px;
        font-weight: 700;
    }
    input {
        background-color: rgb(236, 236, 236);
        height: 30px;
    }
    button {
        background-color: rgb(25, 110, 180);
        border-radius: 5px;
        height: 50px;
        font-weight: 700;
        color: #eeeeee;
    }
</style>