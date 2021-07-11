<template>
  <div class="menu">
    <h1>Vue</h1>
    <h2>Menú</h2>
    <button class="button" @click="$router.push('crear-componente')">
      Crear Componente
    </button>
    <button class="button">Variables</button>
    <button class="button">Bucle v-for</button>
    <button class="button">Sentencia v-if, v-else</button>
    <button class="button">Evento onClick</button>
    <button class="button">Binding</button>
    <button class="button">Pasando Props entre Componentes</button>
    <button class="button">Pasando Funciones por las Props</button>
    <button class="button">Crear View</button>
    <button class="button">Crear Ruta Dinámica</button>
    <button class="button">Cambio de Ruta desde Scripts</button>
    <button class="button">Crear View Error 404</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button {
  background-color: lightgreen;
  width: 400px;
  font-size: 20px;
  cursor: pointer;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
