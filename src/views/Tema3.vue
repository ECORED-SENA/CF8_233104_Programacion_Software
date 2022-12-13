<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 SQL para manipulación de datos - DML 
    
    .bloque-texto-g.color-acento-contenido.bloque-40.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Una base de datos sin datos no es muy útil, de manera que #[b se verá cómo añadir, modificar o eliminar los datos que poseen las bases de datos].

    p Se creará una tabla con la que seguiremos #[b ejemplificando la sintaxis del SQL].

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-2.col-4.BG04.p-2.mb-lg-0.mb-4
        img(src='@/assets/curso/tema3/img02.svg')
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">gente</span> (
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre</span> VARCHAR(<span style="color: #D15B98">50</span>) KEY, 
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">fecha</span> DATE DEFAULT '<span style="color: #D15B98">2020-02-02</span>', 
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">edad</span> INT DEFAULT <span style="color: #D15B98">0</span>);
        p.text-AB.mb-4 Query OK, 0 rows affected (0.025 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span>

    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Inserción de registros
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img03.png")
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/img05.png")
          .col
            p.mb-0 La forma más directa de implantar una fila nueva en una tabla es por medio de una sentencia #[b INSERT]. De la manera más sencilla de esta sentencia se debe indicar la tabla a la que se quiere agregar filas, y los valores de cada columna. Las columnas de tipo cadena o fechas tienen que estar entre comillas sencillas o dobles, esto no es obligatorio para las columnas numéricas, aunque también pueden estar entrecomilladas.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> INSERT INTO <span style="color: #fff">gente</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span>, <span style="color: #fff">fecha</span>, <span style="color: #fff">edad</span><span style="color: #F4A338">)</span> VALUES <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Fulano</span>','<span style="color: #D15B98">1974-04-12</span>', <span style="color: #D15B98">18</span><span style="color: #F4A338">)</span>;
        p.text-AB.mb-4 Query OK, 1 row affected (0.05 sec<span style="color: #F4A338">)</span>
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> INSERT INTO <span style="color: #fff">gente</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span>, <span style="color: #fff">fecha</span>, <span style="color: #fff">edad</span><span style="color: #F4A338">)</span> VALUES <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Mengano</span>','<span style="color: #D15B98">1978-06-15</span>', <span style="color: #D15B98">20</span><span style="color: #F4A338">)</span>;
        p.text-AB.mb-4 Query OK, 1 row affected (0.04 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> INSERT INTO <span style="color: #fff">gente</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span>, <span style="color: #fff">fecha</span>, <span style="color: #fff">edad</span><span style="color: #F4A338">)</span> VALUES
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Tulano</span>','<span style="color: #D15B98">2000-12-02</span>', '<span style="color: #D15B98">22</span>'<span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">(</span>'<span style="color: #D15B98">Pegano</span>','<span style="color: #D15B98">1993-02-10</span>', '<span style="color: #D15B98">33</span>'<span style="color: #F4A338">)</span>;
        p.text-AB.mb-0 Query OK, 2 rows affected (0.02 sec)
        p.text-AB.mb-4 Records: 2  Duplicates: 0  Warnings: 0
        p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img04.svg')
        p.text-AB.mb-4 4 rows in set (0.08 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span>

    p Si no se requiere determinar un valor preciso para alguna columna, se puede determinar el valor por defecto indicado para esa columna cuando la tabla fue creada, usando la palabra <span style="background-color: #FDEDBC; padding: 3px">DEFAULT:</span>

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> INSERT INTO <span style="color: #fff">gente</span> (<span style="color: #fff">nombre</span>, <span style="color: #fff">fecha</span>, <span style="color: #fff">edad</span>)  VALUES ('<span style="color: #D15B98">Perillo</span>', <span style="color: #D15B98">DEFAULT</span>, <span style="color: #D15B98">DEFAULT</span>);
        p.text-AB.mb-4 Query OK, 1 row affected (0.005 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 

    p Mire como Perillo tiene el valor por defecto definido en la columna fecha y edad.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img05.svg')
        p.text-AB.mb-4 5 rows in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span>

    p El orden en la sentencia <span style="background-color: #FDEDBC; padding: 3px">INSERT</span> es muy importante, conserve una correspondencia como se muestra en la siguiente imagen.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8
        img(src='@/assets/curso/tema3/img06.svg')
    
    p Finalmente, estamos listos para aprender cómo se actualizan los datos que se han registrado.

    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Edición de registros
    
    p Tenemos la posibilidad de cambiar valores de las filas de una tabla utilizando la sentencia <span style="background-color: #FDEDBC; padding: 3px">UPDATE.</span> En su manera más fácil, los cambios se usan a cada una de las filas, y a las columnas que se les especifique.
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-2.col-4.BG04.p-2.mb-4
        img(src='@/assets/curso/tema3/img02.svg')
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 UPDATE <span style="color: #F4A338">[</span><span style="color: #fff">LOW_PRIORITY</span><span style="color: #F4A338">]</span> <span style="color: #F4A338">[</span><span style="color: #fff">IGNORE</span><span style="color: #F4A338">]</span> <span style="color: #fff">tbl_name</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;SET <span style="color: #fff">col_name1</span>=<span style="color: #fff">expr1</span> <span style="color: #F4A338">[</span>, <span style="color: #fff">col_name2</span>=<span style="color: #fff">expr2</span> ...<span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>WHERE <span style="color: #fff">where_definition</span><span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>ORDER BY ...<span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>LIMIT row_count<span style="color: #F4A338">]</span> 
      .col-lg-10.BG02.p-4
        p.mb-0 (MySQL 8.0 Reference Manual, 2021)

    p Que todas las personas de la tabla gente tengan la misma fecha utilizando esta sentencia <span style="background-color: #FDEDBC; padding: 3px">UPDATE:</span>

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> UPDATE <span style="color: #fff">gente</span> SET <span style="color: #fff">fecha</span>= '<span style="color: #D15B98">2012-12-12</span>';
        p.text-AB.mb-0 Query OK, 5 rows affected (0.005 sec)
        p.text-AB.mb-4 Rows matched: 5  Changed: 5  Warnings: 0
        p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-4.col-lg-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img07.svg')
        p.text-AB.mb-4 5 rows in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 

    p Al suponer que se necesita ponerle el incrementar la edad por 10 años a cada fila de la tabla gente:
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> UPDATE <span style="color: #fff">gente</span> SET <span style="color: #fff">edad</span> = <span style="color: #fff">edad</span> +<span style="color: #D15B98">10</span>;
        p.text-AB.mb-0 Query OK, 5 rows affected (0.005 sec)
        p.text-AB.mb-4 Rows matched: 5  Changed: 5  Warnings: 0
        p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img08.svg')
        p.text-AB.mb-4 5 rows in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span>

    p Sin embargo no se tienen que actualizar todas filas de la tabla, ya que se tiene la posibilidad de definir cuales filas se desean actualizar.
    p La primera es por medio de la cláusula <span style="background-color: #FDEDBC; padding: 3px">WHERE.</span> Utilizando esta cláusula se tiene la posibilidad de entablar una condición. Únicamente las filas que cumplan dicha condición van a ser actualizadas:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> UPDATE <span style="color: #fff">gente</span> SET <span style="color: #fff">edad</span> = <span style="color: #D15B98">55</span>, <span style="color: #fff">fecha</span> = '<span style="color: #D15B98">1970-12-31</span>'  WHERE <span style="color: #fff">nombre</span> = '<span style="color: #D15B98">Tulano</span>';
        p.text-AB.mb-0 Query OK, 1 row affected (0.005 sec)
        p.text-AB.mb-4 Rows matched: 1  Changed: 1  Warnings: 0
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img09.svg')
        p.text-AB.mb-4 5 rows in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 

    p Otro ejemplo sería que se actualice la fecha al día 2012-12-12 para todos lo que sean mayores de 40 años de edad, esto se podría hacer así:
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> UPDATE <span style="color: #fff">gente</span> SET <span style="color: #fff">fecha</span>  = '<span style="color: #D15B98">2012-12-12</span>' WHERE <span style="color: #fff">edad</span> &gt; <span style="color: #D15B98">30</span>;
        p.text-AB.mb-0 Query OK, 2 rows affected (0.005 sec)
        p.text-AB.mb-4 Rows matched: 2  Changed: 2  Warnings: 0
        p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img10.svg')
        p.text-AB.mb-4 5 rows in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 

    separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.3 Borrado de registros
    
    p Para borrar filas se utiliza la sentencia <span style="background-color: #FDEDBC; padding: 3px">DELETE.</span> La sintaxis es muy similar a la de <span style="background-color: #FDEDBC; padding: 3px">UPDATE:</span>
    
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-2.col-4.BG04.p-2.mb-4
        img(src='@/assets/curso/tema3/img02.svg')
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 DELETE <span style="color: #F4A338">[</span><span style="color: #fff">LOW_PRIORITY</span><span style="color: #F4A338">]</span> <span style="color: #F4A338">[</span><span style="color: #fff">QUICK</span><span style="color: #F4A338">]</span> <span style="color: #F4A338">[</span><span style="color: #fff">IGNORE</span><span style="color: #F4A338">]</span> FROM <span style="color: #fff">table_name</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>WHERE <span style="color: #fff">where_definition</span><span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>ORDER BY ...<span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>LIMIT row_count<span style="color: #F4A338">]</span> 

    p Para borrar el registro que tiene por nombre Perillo se procede de la siguiente forma.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> DELETE FROM <span style="color: #fff">gente</span> WHERE <span style="color: #fff">nombre</span> = '<span style="color: #D15B98">Perillo</span>';
        p.text-AB.mb-4 Query OK, 1 row affected (0.005 sec)
        p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img11.svg')
        p.text-AB.mb-4 4 rows in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span>

    p A continuación, se debe borrar aquello que tenga edad comprendida entre 30 (incluyendo 30) y 50 años (incluyendo 50), para eso se usa un operador llamado <span style="background-color: #FDEDBC; padding: 3px">AND,</span> se verán con más detalle estos operadores.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4.mb-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> DELETE FROM <span style="color: #fff">gente</span> WHERE <span style="color: #fff">edad</span> &gt;= 30 AND <span style="color: #fff">edad</span> &lt;= <span style="color: #D15B98">50</span>;
        p.text-AB.mb-4 Query OK, 2 rows affected (0.005 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT * FROM <span style="color: #fff">gente</span>;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img12.svg')
        p.text-AB.mb-4 2 rows in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 
      .col-lg-10.BG02.p-4
        p.mb-0 Nota. MySQL 8.0 Reference Manual (2021).

    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema3/img13.png")
        .col-lg-8
          .h4 Vaciar una tabla
          p.mb-0 Cuando se deseen borrar todas las filas de una tabla, se puede utilizar una sentencia <span style="background-color: #FDEDBC; padding: 3px">DELETE</span> sin condiciones, como se vio en el punto anterior. Pero existe una sentencia alternativa, <span style="background-color: #FDEDBC; padding: 3px">TRUNCATE,</span> que hace la misma tarea de una forma mucho más veloz. La diferencia es que <span style="background-color: #FDEDBC; padding: 3px">DELETE</span> hace un borrado secuencial de la tabla, fila por fila y <span style="background-color: #FDEDBC; padding: 3px">TRUNCATE</span> elimina la tabla y la vuelve a crear desocupada, lo que es mucho más eficaz.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> TRUNCATE <span style="color: #fff">gente</span>;
        p.text-AB.mb-4 Query OK, 0 rows affected (0.037 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">gente</span>;
        p.text-AB.mb-4 Empty set (0.001 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 

</template>

<script>
export default {
  name: 'Tema3',
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
