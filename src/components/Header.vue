<template>
  <div class="section">
      <div class="banner">
        <div class="buttons">
          <router-link to="/home"><button v-if="!is_auth">Home</button></router-link> 
          <router-link to="/user/login"><button v-if="!is_auth">Iniciar Sesión</button></router-link> 
          <router-link to="/user/signUp"><button v-if="!is_auth">Registrarse</button></router-link>  
          <button v-if="is_auth" v-on:click="loadReservas">Reservas</button>
          <button v-if="is_auth" v-on:click="loadDomicilios">Domicilios</button>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name:"Header",
  data:function(){
    return{
      is_auth:false
    }
  },

  methods:{
  
  }
}
</script>

<style>
.buttons {
  float: right;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding-top: 23px;
  margin-right: 50px;
}
.buttons button {
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  height: 50px;
  width: 100px;
  border: none;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
}
.buttons button:hover {
  background-color: rgb(238, 236, 236);
}

.section {
  height: 340px;
  width: 100%;
  background-color: white;
}
.banner {
  height: 340px;
  max-width: 1349px;
  background-image: url("../assets/banner.png");
  position: relative;
}
</style>