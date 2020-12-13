<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">OTTO KLAUS</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!uid" to="/">Inicio</b-nav-item>
          <b-nav-item v-if="!uid" :to="{ name: 'Login' }">Iniciar Sesión</b-nav-item>
          <b-nav-item v-if="!uid" :to="{ name: 'Register' }">Registro</b-nav-item>
          <b-nav-item v-if="uid" :to="{ name: 'Agregar' }">Agregar</b-nav-item>
          <b-nav-item v-if="uid" :to="{ name: 'Juguetes' }">Juguetes</b-nav-item>
           <b-nav-item v-if="uid" href="#" @click="salir">Salir</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "App",
  data() {
    return {
      uid: "",
    };
  },
  methods: {
    salir(){
        firebase.auth().signOut().then(() => {
            this.$router.replace('/');
        }).catch((error) => {
            console.error(error);
        });
      }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user.displayName);
        this.uid = user.uid;
        // console.log("Si hay usuario con sesión activa");
      } else {
        // console.log("No hay usuario con sesión activa...");
        this.uid = "";
      }
    });

    this.$store.dispatch("traerData");
  },
};
</script>

<style lang="scss">
</style>
