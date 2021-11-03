<template>
  <nav>
    <button class="btn btn-dark mt-5" @click="logout">Cerrar sesión</button>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  name: "navbar",
  data: function () {
    return {};
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>