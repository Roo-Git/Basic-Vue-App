<template>
  <div class="menu">
    <h1>Vue</h1>
    <h2>Menú</h2>
    <button class="button" @click="$router.push('crear-componente')">
      Crear Componente
    </button>
    <button class="button" @click="$router.push('variables')">Variables</button>
    <button class="button" @click="$router.push('bucle-v-for')">
      Bucle v-for
    </button>
    <button class="button" @click="$router.push('sentencia-if-else')">
      Sentencia v-if, v-else
    </button>
    <button class="button" @click="$router.push('evento-onclick')">
      Evento onClick
    </button>
    <button class="button" @click="$router.push('binding')">
      Binding
    </button>
    <button class="button" @click="$router.push('props-a-componentes')">
      Pasando Props entre Componentes
    </button>
    <button class="button" @click="$router.push('funciones-por-props')">
      Pasando Funciones por las Props
    </button>
    <button class="button" @click="$router.push('crear-ruta')">
      Crear Ruta
    </button>
    <button class="button" @click="$router.push('ruta-dinamica')">
      Crear Ruta Dinámica
    </button>
    <button class="button" @click="$router.push('ruta-scripts')">
      Cambio de Ruta desde Scripts
    </button>
    <button class="button" @click="$router.push('error-404')">
      Crear View Error 404
    </button>
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
