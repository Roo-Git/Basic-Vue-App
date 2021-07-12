<template>
  <div>
    <h2>Pasando Props entre Componentes</h2>
    <p>
      Los props es simple información que se pasa de un componente a otro, suele
      ser de un componente padre al componente hijo. El componente padre enviará
      una variable y y componente hijo recibira esa variable mediante los props.
    </p>
    <br />
    <h4>
      Componente Padre
    </h4>
    <p>
      Enviando informacion de la variable power, en este caso 30, al componente
      hijo...
    </p>
    <HijoPropsEntreComp :power="power" />
    <br />
    <h4>
      Imágen Componente Padre
    </h4>
    <img src="../assets/PropsEntreComp1.png" alt="Componente Padre" />
    <h4>
      Imágen Componente Hijo
    </h4>
    <img src="../assets/PropsEntreComp2.png" alt="Componente Hijo" />
  </div>
</template>

<script>
import HijoPropsEntreComp from "../components/HijoPropsEntreComp.vue";
export default {
  components: {
    HijoPropsEntreComp,
  },
  setup() {
    let power = 30;

    return {
      power,
    };
  },
};
</script>

<style lang="scss" scoped></style>
