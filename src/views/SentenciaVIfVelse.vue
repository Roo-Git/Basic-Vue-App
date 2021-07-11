<template>
  <div>
    <h2>Renderizado Condicional: Sentencia v-if / v-else-if / v-esle.</h2>
    <p>
      En Vue, podemos renderizar con la sentencia if, else if, else, como
      podemos observar a continuación:
    </p>
    <p>Marca: {{ brand }}</p>
    <p>Modelo: {{ model }}</p>
    <p>Potencias urbanas, hibridas y de carrera:</p>
    <ul>
      <template v-for="(power, index) in powers" :key="index">
        <br />
        <li v-if="power < 280">Urbana: {{ power }}</li>
        <li v-else-if="power === 280">Hibrido: {{ power }}</li>
        <li v-else>Carrera: {{ power }}</li>
      </template>
    </ul>
    <img src="../assets/SentenciaIf.png" alt="Sentencia If" />
  </div>
</template>

<script>
export default {
  setup() {
    const brand = "Audi";
    const model = "A4";
    const powers = [60, 80, 120, 160, 200, 280, 300, 390, 540, 600];

    return {
      brand,
      model,
      powers,
    };
  },
};
</script>

<style lang="scss" scoped></style>
