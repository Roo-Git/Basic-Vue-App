<template>
  <div>
    <h2>Binding (Traductor)</h2>
    <p>
      El binding sirve para traducir los datos a nuestro componente y estos sean
      renderizados. Para llevar a cabo el binding tenemos que importar ref de
      vue en scpripts y declararlo en una variable con el paramaetro que
      queramos y acceder al objeto que contiene esta variable, en este caso
      .value
    </p>
    <p>Marca: {{ brand }}</p>
    <p>Modelo: {{ model }}</p>
    <p>Potencia: {{ power }}</p>
    <button class="button" @click="upPower(20)">Aumentar Potencia</button>
    <button class="button" @click="downPower">Disminuir Potencia</button>
    <img src="../assets/Binding.png" alt="Binding" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const brand = "Audi";
    const model = "A4";
    let power = ref(40);

    const upPower = (newPower) => {
      console.log("Aumentar potencia...");
      power.value = power.value + newPower;
    };
    const downPower = () => {
      console.log("Disminuir potencia...");
      power.value--;
    };
    return {
      brand,
      model,
      power,
      upPower,
      downPower,
    };
  },
};
</script>

<style lang="scss" scoped>
.button {
  background-color: lightgreen;
  width: 300px;
  font-size: 20px;
  cursor: pointer;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
