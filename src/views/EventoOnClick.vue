<template>
  <div>
    <h2>Evento on Click</h2>
    <p>
      Para realizar el evento on Click pasamos las funciones por el script, las
      retornamos y las llamamos en el template con con un boton y la
      nomenclatura @clik="funcion(ev)"
    </p>
    <p>Marca: {{ brand }}</p>
    <p>Modelo: {{ model }}</p>
    <p>Potencia: {{ power }}</p>
    <button class="button" @click="upPower(200)">Aumentar Potencia</button>
    <button class="button" @click="downPower(200)">Disminuir Potencia</button>
    <p>Nota: Checkear console.log</p>
    <img src="../assets/EventoOnClick.png" alt="Evento on Click" />
  </div>
</template>

<script>
export default {
  setup() {
    const brand = "Audi";
    const model = "A4";
    const power = 40;

    const upPower = (newPower) => {
      console.log("Aumentar potencia..." + newPower);
    };
    const downPower = (newPower) => {
      console.log("Disminuir potencia..." + newPower);
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
