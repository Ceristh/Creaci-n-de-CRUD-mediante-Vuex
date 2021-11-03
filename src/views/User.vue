<template>
<div>
    <h1 class="mt-5">Usuario</h1>
    <br>
    <p><strong>Id:</strong>{{id}}</p>
    <p><strong>Nombre:</strong></p>
    <p><strong>Correo electrónico:</strong></p>
    <input type="text" value="">
</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'user',
    props:['id'],
    data: function(){
        return {}
    },
    computed: {
    },
    methods: {
        ...mapActions(['getIdUser']),
        async editUser(){
            let resp = await getIdUser(this.id)
            console.log(resp.data())
        }
    },
    created(){
        this.editUser()
    }
}
</script>