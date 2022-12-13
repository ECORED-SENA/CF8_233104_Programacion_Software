<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/intro/img01.png")
    
    .row.justify-content-center
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/intro/img02.png")
      .col-lg-9(data-aos="fade-left")
        p.mb-0 Las siglas #[b SQL], vienen del inglés #[b Structured Query Language], es un lenguaje estándar que permite manipular los datos de una base de datos relacional. Casi todos los Sistemas de Gestión de Bases de Datos Relacionales (SGBD) implementan este lenguaje y mediante él se realizan todo tipo de actividad en la base de datos. En este punto se hace una presentación del #[b lenguaje SQL], enfocándose en las sentencias de consulta de datos, empleando la interfaz de consola de línea de comandos con el fin de fortalecer las técnicas de administración remota. #[b Finalmente se presentará la interfaz de administración gráfica para hacer las mismas operaciones].
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
