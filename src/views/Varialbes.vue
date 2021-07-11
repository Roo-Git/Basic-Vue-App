<template>
  <div>
    <h2>Variables</h2>
    <p>
      A continuación podemos observar la declaración de unas variables, con
      valores tipo string, number, array u objeto en VUE 3.
    </p>
    <br />
    <p class="parrafo-estilo">Marca: {{ brand }}</p>
    <p class="parrafo-estilo">Modelo: {{ model }}</p>
    <p class="parrafo-estilo">Color: {{ color[1] }}</p>
    <p class="parrafo-estilo">Precio: {{ price }}</p>
    <p class="parrafo-estilo">Potencia: {{ power }}</p>
    <p class="parrafo-estilo">
      Mensaje: {{ message.title }} {{ message.text }}
    </p>
    <br />
    <p>
      Para declarar una variable realizamos una función dentro del script
      llamada setup()
    </p>
    <p>
      Despues hacemos un objecto donde declaramos las variables y finalmente las
      retornamos.
    </p>
    <p>
      Llamamos a estas variables en el template asignandole el nombre de la
      variable con doble corchetes.
    </p>
    <img class="img" src="../assets/Variables.png" alt="Variables" />
  </div>
</template>
<script>
export default {
  setup() {
    const brand = "Audi";
    const model = "A4";
    const color = ["Azul", "Rojo", "Negro"];
    const price = "45.000 €";
    const power = 240;
    const message = {
      title: "Soy un objeto",
      text: "declarado desde una variable. ",
    };
    return {
      brand,
      model,
      color,
      price,
      power,
      message,
    };
  },
};
</script>

<style lang="scss" scoped>
.parrafo-estilo {
  color: darkred;
}
.img {
  width: 1750px;
}
</style>
