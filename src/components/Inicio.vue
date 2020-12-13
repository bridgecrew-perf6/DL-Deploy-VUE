<template>
  <div class="text-center">
    <b-jumbotron lead="">
      <h1 class="display-4">Bienvenidos</h1>
      <h2 class="display-4">Juguetería Otto Klaus</h2>
          <b-button variant="info" :to="{ name: 'Login' }">Iniciar Sesión</b-button>
          <b-button variant="light" :to="{ name: 'Register' }" class="mx-3">Registro de Usuario</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    name: 'Inicio',

  }
</script>

<style scoped lang="scss">

</style>
