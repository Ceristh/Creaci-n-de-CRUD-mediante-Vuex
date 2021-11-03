<template>
  <div class="home">
      <users/>
      <logout/>
    </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
import Users from '@/views/Users.vue'

export default {
  name: "Home",
  components:{
    'logout': Logout,
    'users': Users,
  },
  methods: {
    
  },
};
</script>

<style scoped>
.title{
  margin-top: 90px;
  font-size: 70px;
}
</style>
