<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Consulta multitablas - DML
    
    .bloque-texto-g.color-acento-contenido.bloque-inv.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img.d-none.d-lg-flex(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.png')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__img.d-lg-none.d-flex(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img13.png')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Para explicar este tipo de ejercicios, crearemos una base de datos de empleados llamada ehr, y las tablas empleados y áreas, se relacionan si: un empleado pertenece a un área y un área puede tener varios empleados como se muestra en el siguiente diagrama:
    
    p Note que area_id en la tabla empleados puede ser nuleable:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE IF NOT EXISTS <span style="color: #fff">areas</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id_area</span> TINYINT NOT NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">area</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">45</span><span style="color: #F4A338">)</span> NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> PRIMARY KEY <span style="color: #F4A338">(</span><span style="color: #fff">id_area</span><span style="color: #F4A338">))</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> ENGINE = <span style="color: #fff">InnoDB</span>;
        p.text-AB.mb-4 Query OK, 0 rows affected (0.019 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE IF NOT EXISTS <span style="color: #fff">empleados</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre_empleado</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> NOT NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">area_id</span> TINYINT NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> PRIMARY KEY <span style="color: #F4A338">(</span><span style="color: #fff">nombre_empleado</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> INDEX <span style="color: #fff">fk_empleados_areas_idx</span> <span style="color: #F4A338">(</span><span style="color: #fff">area_id ASC</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> CONSTRAINT <span style="color: #fff">fk_empleados_areas</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> FOREIGN KEY <span style="color: #F4A338">(</span><span style="color: #fff">area_id</span><span style="color: #F4A338">)</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> REFERENCES areas <span style="color: #F4A338">(</span><span style="color: #fff">id_area</span><span style="color: #F4A338">)</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> ON DELETE NO ACTION
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> ON UPDATE NO ACTION<span style="color: #F4A338">)</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> ENGINE = <span style="color: #fff">InnoDB</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.023 sec) 

    p Se insertarán los siguientes datos:
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 INSERT INTO <span style="color: #fff">areas</span> <span style="color: #F4A338">(</span><span style="color: #fff">id_area</span>, <span style="color: #fff">area</span><span style="color: #F4A338">)</span> VALUES <span style="color: #F4A338">(</span>'<span style="color: #D15B98">17</span>', '<span style="color: #D15B98">Ventas</span>'<span style="color: #F4A338">)</span>, <span style="color: #F4A338">(</span>'<span style="color: #D15B98">19</span>', '<span style="color: #D15B98">Producción</span>'<span style="color: #F4A338">)</span>,  <span style="color: #F4A338">(</span>'<span style="color: #D15B98">20</span>', '<span style="color: #D15B98">Ingeniería</span>'<span style="color: #F4A338">)</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">21</span>', '<span style="color: #D15B98">Mercadeo</span>'<span style="color: #F4A338">)</span>;
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> INSERT INTO `<span style="color: #fff">areas</span>` <span style="color: #F4A338">(</span>`<span style="color: #fff">id_area</span>`, `<span style="color: #fff">area</span>`<span style="color: #F4A338">(</span> VALUES 
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">17</span>', '<span style="color: #D15B98">Ventas</span>'<span style="color: #F4A338">(</span>, 
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">19</span>', '<span style="color: #D15B98">Producción</span>'<span style="color: #F4A338">(</span>, 
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">(</span><span style="color: #D15B98">20</span>, '<span style="color: #D15B98">Ingeniería</span>'<span style="color: #F4A338">(</span>, 
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">(</span><span style="color: #D15B98">21</span>, '<span style="color: #D15B98">Mercadeo</span>'<span style="color: #F4A338">(</span>;
        p.text-AB.mb-0 Query OK, 4 rows affected, 2 warnings (0.015 sec)
        p.text-AB.mb-4 Records: 4  Duplicates: 0  Warnings: 2
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span>

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> INSERT INTO <span style="color: #fff">empleados</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre_empleado</span>, <span style="color: #fff">area_id</span><span style="color: #F4A338">)</span> VALUES
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Andrade</span>', '<span style="color: #D15B98">17</span>'<span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Jordan</span>', '<span style="color: #D15B98">20</span>'<span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Steinberg</span>', '<span style="color: #D15B98">20</span>'<span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Robinson</span>', '<span style="color: #D15B98">19</span>'<span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Zolano</span>', '<span style="color: #D15B98">19</span>'<span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Gaspar</span>', <span style="color: #D15B98">NULL</span><span style="color: #F4A338">)</span>;
        p.text-AB.mb-0 Query OK, 6 rows affected, 2 warnings (0.006 sec)
        p.text-AB.mb-0 Records: 6  Duplicates: 0  Warnings: 2

    p Los datos quedan así: 

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BG11.p-2.mb-2
          .h4.text-center.mb-0 Empleados
        .BG01.hg02.p-4
          p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">empleados</span>;
          .row.mb-4
            .col-xxl-8.col-lg-11.col-md-8.col-sm-10
              img(src='@/assets/curso/tema5/img02.svg')
          p.text-AB.mb-4 6 rows in set (0.000 sec)
          p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span>
      .col-lg-5.col-10(data-aos="fade-left")
        .BG12.p-2.mb-2
          .h4.text-center.text-white.mb-0 Areas
        .BG01.hg02.p-4
          p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">areas</span>;
          .row.mb-4
            .col-xxl-6.col-xl-8.col-lg-9.col-md-6.col-sm-8.col-10
              img(src='@/assets/curso/tema5/img03.svg')
          p.text-AB 4 rows in set (0.000 sec)
          p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [ehr]</span><span style="color: #4ADBD1">&gt;</span> 

    separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.1 Combinación interna (INNER JOIN)
    
    .row.justify-content-center
      .col-12(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img04.png")
      .col-lg-10.BGR07.img01.p-4(data-aos="fade-left")
        p.mb-0 Con esta operación, cada fila en la tabla #[b empleados] es combinada (o unida) con los correspondientes de la tabla #[b areas] que satisface la condición que se especifica en el predicado del #[b JOIN]. Cualquier fila de la tabla #[b empleados] o de la tabla #[b areas] que no tenga uno correspondiente en la otra tabla (#[b areas]) es excluido y solo aparecerán los que tengan correspondencia en la otra tabla. Este es el tipo de #[b JOIN] más utilizado, por lo que es considerado el tipo de combinación predeterminado.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        .BG01.p-4
          p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>
          p.text-AC.mb-0 FROM <span style="color: #fff">empleados</span> AS <span style="color: #fff">e</span>
          p.text-AC.mb-0 INNER JOIN <span style="color: #fff">areas</span> AS <span style="color: #fff">a</span> ON <span style="color: #fff">a.id_area</span> = <span style="color: #fff">e.area_id</span> 
      .col-lg-5.col-10(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img05.jpg')

    .row.justify-content-center.mb-4
      .col-lg-10.BGR10
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-lg-0.p-4.mb-4(data-aos="fade-right")
            p.mb-0 La condición de la relación <span style="background-color: #FDEDBC; padding: 3px">(a.id_area= e.area_id)</span> consiste en que debe estar presente en ambas tablas el valor. Cuando el empleado tiene <span style="background-color: #FDEDBC; padding: 3px">NULL</span> en <span style="background-color: #FDEDBC; padding: 3px">area_id</span> no aparece ya que no puede cumplirla. Esto se representa con un Diagrama de Venn en la conjunción porque el valor debe estar en ambas tablas.
          .col-lg-5.col-10.BG13.p-2(data-aos="fade-left")
            img(src='@/assets/curso/tema5/img06.svg')
    
    p Existen otros tipos de consultas, las <span style="background-color: #FDEDBC; padding: 3px">FULL JOIN, FULL OUTER JOIN, CROSS JOIN</span> que no se verán porque son muy poco empleadas, sin embargo, con el concepto principal se puede acceder a la documentación en la Web para comprobar su funcionamiento.
    p A través de la siguiente imagen se representan también otros tipos de relaciones, Diagramas de Venn que  permiten visualizar resultados retornados. Se puede usar para ayudar a comprender los resultados que se deben esperar con cada variante de las sentencias <span style="background-color: #FDEDBC; padding: 3px">JOIN.</span>

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-8
        figure
          img(src='@/assets/curso/tema5/img07.svg')
          figcaption Nota. GermanX (2017)

    separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.2 Combinación externa
    
    p Es una variedad de composición de tablas que permite seleccionar algunas filas de una tabla aunque éstas no tengan correspondencia con las filas de la otra tabla con la que se combina.
    .h4 <i class="fas fa-square" style="color: #4ADBD1" data-aos="fade-right"></i> LEFT JOIN
    p La sintaxis es muy similar a la anterior.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>
        p.text-AC.mb-0 FROM <span style="color: #fff">empleados</span> AS <span style="color: #fff">e</span>
        p.text-AC.mb-0 LEFT JOIN <span style="color: #fff">areas</span> AS <span style="color: #fff">a</span> ON <span style="color: #fff">a.id_area</span> = <span style="color: #fff">e.area_id</span> 

    .row.justify-content-center
      .col-lg-8.p-4.order-lg-1.order-2(data-aos="fade-right")
        p El resultado de este tipo de consulta contiene todos los registros de la tabla de la izquierda (la primera tabla que se define en el #[b FROM] en la consulta), independiente de si existe un registro correspondiente en la tabla de la derecha (la que se define en el #[b JOIN]).
        .row.justify-content-center.align-items-center.mb-4
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/img05.png")
          .col
            p.mb-0 La sentencia #[b LEFT JOIN] devuelve la pareja de todos los valores de la tabla izquierda (#[b empleados]), con los valores de la tabla de la derecha (áreas) correspondientes, si los hay, o retorna un valor nulo #[b NULL] en los campos de la tabla derecha cuando no haya correspondencia.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 A diferencia del resultado presentado en el ejemplo #[b INNER JOIN] donde no se mostraba el #[b empleado] cuya área no existía, en el ejemplo que siguiente se presentarán los empleados con su respectiva área, y adicionalmente se presentará un #[b empleado] cuya #[b área] no existe.
        p.mb-0 El empleado que no tiene área se encuentra en la región amarilla del diagrama de la derecha, mientras que los empleados con área están en la franja naranja, en la intersección de empleados y áreas.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img08.svg")

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.BGR10.BG13.p-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img09.svg')
      .col-lg-5.col-10(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img10.jpg")
        
    .h4 <i class="fas fa-square" style="color: #4ADBD1" data-aos="fade-right"></i> RIGTH JOIN
    p La sentencia #[b RIGHT JOIN] retorna todos los valores de la tabla derecha (#[b áreas]) con los valores de la tabla de la izquierda (#[b empleados]) correspondientes, si existen, o retorna un valor nulo #[b NULL] para los campos de la tabla izquierda cuando no haya correspondencia.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>
        p.text-AC.mb-0 FROM <span style="color: #fff">empleados</span> AS <span style="color: #fff">e</span>
        p.text-AC.mb-0 RIGHT JOIN <span style="color: #fff">areas</span> AS <span style="color: #fff">a</span> ON <span style="color: #fff">a.id_area</span> = <span style="color: #fff">e.area_id</span>

    p En el diagrama las áreas que no tienen empleados están en el área verde mientras que las áreas con empleados están en el área anaranjada, en la intersección de empleados y áreas.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.BGR10.BG13.p-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img11.svg')
      .col-lg-5.col-10(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img12.jpg")

</template>

<script>
export default {
  name: 'Tema5',
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
