<template>
  <div>
    <h4>
      Componente Hijo
    </h4>
    <p>Potencia: {{ power }}</p>
  </div>
</template>

<script>
export default {
  props: {
    power: {
      type: Number,
      default: 60,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped></style>
