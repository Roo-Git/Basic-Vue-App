<template>
  <div class="home">
    <h1>Vue</h1>
    <h2>Menú</h2>
    <button class="button">Crear Componente</button>
    <button class="button">Variables</button>
    <button class="button">Bucle v-for</button>
    <button class="button">Sentencia v-if, v-else</button>
    <button class="button">Evento onClick</button>
    <button class="button">Binding</button>
    <button class="button">Pasando Props entre componentes</button>
    <button class="button">Pasando Funciones por los props</button>
    <button class="button">Crear View</button>
    <button class="button">Crear Ruta Dinámica</button>
    <button class="button">Cambio de Ruta desde Scripts</button>
    <button class="button">Crear View Error 404</button>
  </div>
</template>

<style lang="scss" scoped>
.home {
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
