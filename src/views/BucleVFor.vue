<template>
  <div>
    <h2>Bucle v-for</h2>
    <p>A continuación podemos observar un bucle v-for de botones:</p>
    <button class="button" v-for="(color, index) in colors" :key="index">
      El boton en la posición {{ index }} no es de color {{ color }}.
    </button>
    <button class="button">
      El boton en la posicion 3 si es de color Verde.
    </button>
    <p>
      Para realizar un bucle v-for declaramos y retoramos una variable en el
      script que contenga un array, en este caso de colores.
    </p>
    <p>Después añadimos la sintaxis de un bucle for en el template.</p>
    <p>Por color en colores me devuelves el valor del array.</p>
    <p>Le añadimos una clave única "key", porque el valor es dinámico</p>
    <p>
      En este caso, le hemos pasado index, para que nos devuelva el indice del
      array.
    </p>
    <img src="../assets/BucleVfor.png" alt="Bucle v-for" />
  </div>
</template>

<script>
export default {
  setup() {
    const colors = ["Azul", "Rojo", "Amarillo"];
    console.log(colors);
    return {
      colors,
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: lightgreen;
  width: 700px;
  font-size: 20px;
  cursor: pointer;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
