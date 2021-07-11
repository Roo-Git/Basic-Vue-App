<template>
  <div>
    <h2>
      Crear Componente
    </h2>
    <PrimerComponente />
    <p>
      Creamos un archivo vue.js en la carpeta components o en views si es un
      componente vista.
    </p>
    <p>
      Añadimos la estructura básica (template, scripts y style) con el comando
      vbase.
    </p>
    <p>Template = Renderizado: Llamamos al componente por su nombre.</p>
    <p>Script = Lógica: Importamos y exportamos el componente.</p>
    <p>
      Style = Estilos CSS: Los estilos del componente se hacen en el propio
      componente.
    </p>
    <img
      class="img"
      src="../assets/CrearComponente.png"
      alt="Crear Componente"
    />
  </div>
</template>

<script>
import PrimerComponente from "../components/PrimerComponente.vue";

export default {
  components: {
    PrimerComponente,
  },
};
</script>

<style lang="scss" scoped>
.img {
  width: 1000px;
}
</style>
