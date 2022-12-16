<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Interface de línea de comandos de MySQL
    
    .row.justify-content-center
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img01.png")
      .col-lg-9(data-aos="fade-left")
        p Al iniciar a trabajar con el SGBD, existen varias maneras de enlazar una comunicación con el servidor de MySQL. Generalmente en el software, se usará un API para hacer las consultas y otras operaciones con el servidor. Por ejemplo, en PHP, esta API está integrada con el lenguaje.
        .cajon.color-acento-botones.p-4
          p.mb-0 En este punto se usará MySQL de forma directa, por medio de un cliente ejecutándose desde una consola (una ventana de comandos en Windows). En otras secciones se explicarán los distintos APIs.

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Aplicación cliente de MySQL
    
    p Se debe seguir las siguientes instrucciones para conectarse a la base de datos a través del cliente de línea de comandos. 

    .BGIMG01.p-4.mb-4(data-aos="zoom-out")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .BGNumber01.p-2
              .h4.mt-5 Paso 1
              p.mb-5 Debe abrir inicio y buscar MySQL o teclear “mysql” y se hace Clic en MySQL #[em Command Line Client].
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img02.jpg")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img03.jpg")
          .col-lg-6
            .BGNumber02.p-2
              .h4.mt-5 Paso 2
              p.mb-5 Ingresa la contraseña de #[em root] usada en el proceso de instalación de MySQL.
        .row.justify-content-center.align-items-center
          .col-lg-6.order-lg-1.order-2
            .BGNumber03.p-2
              .h4.mt-5 Paso 3
              p.mb-5 Una vez autenticado en la interface comando de línea vemos este resultado.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/img04.jpg")

    p En adelante los resultados de interface de línea de comandos #[b se presentarán como sigue]:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AB.mb-0 Enter password: <span style="color: #fff">***********</span>
        p.text-AB.mb-0 Welcome to the MySQL monitor.  Commands end with; or \g.
        p.text-AB.mb-0 Your MySQL connection id is 90
        p.text-AB.mb-5 Server version: 8.0.25 MySQL Community Server - GPL
        p.text-AB.mb-5 Copyright (c) 2000, 2021, Oracle and/or its affiliates.
        p.text-AB.mb-0 Oracle is a registered trademark of Oracle Corporation and/or its
        p.text-AB.mb-0 affiliates. Other names may be trademarks of their respective
        p.text-AB.mb-5 owners.
        p.text-AB.mb-5 Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
        p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span>

    p Para salir de la consola de comando se usa el comando quit (en mayúscula o minúscula).

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span> <span style="color: #fff">QUIT</span>
        p.text-AB.mb-0 Bye
        p.text-AB.mb-0 C:\mysql\bin<span style="color: #4ADBD1">&gt;</span>
    
    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Prueba de consultas básicas
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img05.png")
      .col-lg-8
        p Ya que se sabe entrar y salir del cliente #[b MySQL], y se tiene la posibilidad de realizar consultas. Lo más fácil es consultar varias variables del sistema o el valor de varias funcionalidades de #[b MySQL]. Para realizar esta clase de consultas se utiliza la sentencia SQL SELECT, por ejemplo:
        .BG01.p-4.mb-4(data-aos="flip-up")
          p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span> <span style="color: #fff">SELECT VERSION (), CURRENT_DATE;</span>
          p.text-AB.mb-0 +———————+—————————+
          p.text-AB.mb-0 | VERSION ()&nbsp;&nbsp;| CURRENT_DATE |
          p.text-AB.mb-0 +———————+—————————+
          p.text-AB.mb-0 |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.0.25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2021-06-12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
          p.text-AB.mb-0 +———————+—————————+
          p.text-AB.mb-0 1 row in set (0.02 sec)
          p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span>
        p #[b SELECT] es la sentencia SQL para elegir datos de bases de datos, además se puede utilizar, como en esta situación, para consultar cambiantes del sistema o resultados de funcionalidades. En esta situación se ha consultado el resultado de la función #[b VERSION], se sabe que es una función porque tiene paréntesis” ()”, y de la variable #[b CURRENT_DATE].
        .cajon.color-acento-botones.p-4(data-aos="fade-left")
          p.mb-0 #[b NOTA]: toda sentencia debe finalizar con punto y coma (;), luego debe dar enter.

    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 SQL - Standard Query Language
    
    p En nivel teórico, hay dos lenguajes para el uso de bases de datos:

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR02A.hg03.p-4
            .h4.ms-5 DDL (#[em Data Definition Language])
            p.mb-0.ms-5 Es el lenguaje que se emplea para establecer bases de datos y tablas, y para transformar sus estructuras. Este lenguaje trabaja sobre ciertas tablas especiales llamadas diccionario de datos.
      .col-lg-6.col-10(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR02B.hg03.p-4
            .h4.ms-5 DML (#[em Data Manipilation Language]) 
            p.mb-0.ms-5 Es lo que se usa para cambiar y obtener datos desde las bases de datos.

    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p SQL abarca ambos lenguajes DDL+DML y serán estudiados en esta unidad, ya que ambos hacen parte del conjunto de sentencias de SQL.
        .cajon.color-acento-botones.p-4
          p.mb-0 En este punto se explicará el proceso para convertir del modelo lógico relacional, al modelo físico, empleando sentencias SQL. Ya no se empleará (por ahora), MySQL Workbeach, y se observarán las particularidades específicas de MySQL.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img08.svg")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
