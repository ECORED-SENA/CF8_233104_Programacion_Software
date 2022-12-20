<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 SQL para consulta de datos - DML 
    
    .row.justify-content-center
      .col-12(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img01.png")
      .col-lg-10.BGR07.img01.p-4(data-aos="fade-left")
        p.mb-0 Para encontrar la información dentro de una base de datos, es preciso escudriñar dentro de la estructura de los datos su estructura y su naturaleza, por ejemplo, el tipo de datos fecha tiene una estructura YYYY-MM-DD,  y si necesito listar los registros de un año determinado, se necesita una función que refiera a ese dato particular dentro de la columna; por este motivo se necesita revisar algunas funciones antes de empezar a trabajar consultas de datos.

    separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Funciones en MySQL
    
    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema4/img02.png")
        .col-lg-8(data-aos="fade-left")
          p Considerando que MySQL es rico en lo que respecta a operadores y en lo que se refiere a funciones es también muy amplio, MySQL dispone de multitud de funciones. Sólo se explicarán algunas funciones necesarias para entender cómo funcionan en general.
          .row.justify-content-center.align-items-center.mb-4
            .col-auto.d-none.d-lg-flex
              img(src="@/assets/curso/temas/img07.png")
            .col
              p.mb-0 Una lista completa de Funciones en MySQL, se puede encontrar en la siguiente referencia: 
          a.anexo.mb-4.mb-lg-0(href="https://www.w3schools.com/mysql/mysql_ref_functions.asp" target="_blank" style="background-color: #FFFAD8")
            .anexo__icono
              img(src="@/assets/template/icono-link2.svg")
            .anexo__texto
              p.mb-0 #[b Enlace web.] www.w3schools.com - MySQL Functions

    p Se listarán las que se usarán en adelante para el ejemplo que sigue:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tabla-a.color-secundario
          table
            thead
              tr
                th(style="background-color: #5573C6; width: 30%").text-center.text-white FUNCION
                th(style="background-color: #5573C6; width: 70%").text-center.text-white Descripción
            tbody
              tr
                th(style="background-color: #F6F6F6;") #[em LENGTH]
                td(style="background-color: #F6F6F6;") Devuelve la longitud de una cadena (en bytes).
              tr
                th(style="background-color: #FFF;") #[em SUM]
                td(style="background-color: #FFF;") Calcula la suma de un conjunto de valores.
              tr
                th(style="background-color: #F6F6F6;") #[em MAX]
                td(style="background-color: #F6F6F6;") Devuelve el valor máximo en un conjunto de valores.
              tr
                th(style="background-color: #FFF;") #[em MIN]
                td(style="background-color: #FFF;") Devuelve el valor mínimo en un conjunto de valores.
              tr
                th(style="background-color: #F6F6F6;") #[em CEIL]
                td(style="background-color: #F6F6F6;") Redondea el valor entero más pequeño que es mayor o igual que un número.
              tr
                th(style="background-color: #FFF;") #[em COUNT]
                td(style="background-color: #FFF;") Devuelve el número de registros devueltos por una consulta de selección.
              tr
                th(style="background-color: #F6F6F6;") #[em AVG]
                td(style="background-color: #F6F6F6;") Devuelve el valor medio de una expresión.
              tr
                th(style="background-color: #FFF;") #[em YEAR]
                td(style="background-color: #FFF;") Devuelve la parte del año para una fecha determinada.
              tr
                th(style="background-color: #F6F6F6;") #[em MONTH]
                td(style="background-color: #F6F6F6;") Devuelve la parte del mes para una fecha determinada.
              tr
                th(style="background-color: #FFF;") #[em DAY]
                td(style="background-color: #FFF;") Devuelve el día del mes para una fecha determinada.
              tr
                th(style="background-color: #F6F6F6;") #[em DATE]
                td(style="background-color: #F6F6F6;") Extrae la parte de la fecha de una expresión de fecha y hora.
              tr
                th(style="background-color: #FFF;") #[em TIME]
                td(style="background-color: #FFF;") Extrae la parte de tiempo de una hora / fecha y hora determinadas.
              tr
                th(style="background-color: #F6F6F6;") #[em SEC_TO_TIME]
                td(style="background-color: #F6F6F6;") Devuelve un valor de tiempo basado en los segundos especificados.

    p Para este ejemplo se usará una base de datos de llamadas telefónicas, esta base de datos tiene la estructura que se verá a continuación y con ella se aprenderá a hacer consultas.

    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4(data-aos="fade-right")
        .col-lg-10
          .h4.mb-0 Ejemplo llamadas telefónicas:
      
      .row.justify-content-center.mb-4
        .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema4/img03.svg")
        .col-lg-8(data-aos="fade-left")
          ol.lista-ol--cuadro(data-aos="fade-left")
            li 
              .lista-ol--cuadro__vineta(style="color: #000")
                span 1
              | Descargue el archivo para crear la base de datos cdr (recuerde que debe descomprimirlo) y de él extraiga el archivo cdr.sql. Este archivo crea una base de datos llamadas cdr y dentro una tabla con el mismo nombre.
            li 
              .lista-ol--cuadro__vineta(style="color: #000")
                span 2
              | Importe el archivo con la sentencia source &lt;ruta  del archivo sql&gt;.
          .BG01.p-4(data-aos="flip-up")
            p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> source <span style="color: #D15B98">D:/Peter/Downloads/cdr.sql</span>;

    .BGR06.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img08.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-white.mb-2 Crear la base de datos cdr 
              p.text-white Estimado aprendiz a continuación descargar el siguiente documento para su consulta.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/cdr.zip')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    p Conozca los datos de prueba con los que se trabajará.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="zoom-in")
        .tabla-a.color-secundario
          table
            thead
              tr
                th(style="background-color: #5573C6;" colspan="6").text-center.text-white Diccionario de datos
            tbody
              tr
                th(style="background-color: #F6F6F6;" colspan="2") Tabla
                td(style="background-color: #F6F6F6;" colspan="4") CDR (#[em Call Data Records]).
              tr
                th(style="background-color: #FFF;" colspan="2") Fecha
                td(style="background-color: #FFF;" colspan="4") DD/MM/YYY.
              tr
                th(style="background-color: #F6F6F6;" colspan="2") Propósito
                td(style="background-color: #F6F6F6;" colspan="4") Guarda el registro de llamadas entrantes y salientes de un sistema de telefonía PBX.
        .tabla-a.color-secundario
          table
            thead(style="border-top: initial")
              tr
                th(style="background-color: #5573C6; width: 16%").text-center.text-white Campo
                th(style="background-color: #5573C6; width: 16%").text-center.text-white Tipo
                th(style="background-color: #5573C6; width: 16%").text-center.text-white Longitud
                th(style="background-color: #5573C6; width: 52%").text-center.text-white Descripción
            tbody
              tr
                th(style="background-color: #F6F6F6;") Registro
                td(style="background-color: #F6F6F6;") #[em DATETIME]
                td(style="background-color: #F6F6F6;") 0
                td(style="background-color: #F6F6F6;") Fecha y hora de registro de la llamada.
              tr
                th(style="background-color: #FFF;") Origen
                td(style="background-color: #FFF;") #[em VARCHAR]
                td(style="background-color: #FFF;") 80
                td(style="background-color: #FFF;") Número de teléfono o extensión del llamante.
              tr
                th(style="background-color: #F6F6F6;") Destino
                td(style="background-color: #F6F6F6;") #[em VARCHAR]
                td(style="background-color: #F6F6F6;") 80
                td(style="background-color: #F6F6F6;") Número de teléfono o extensión del llamado o destino.
              tr
                th(style="background-color: #FFF;") Estado
                td(style="background-color: #FFF;") #[em VARCHAR]
                td(style="background-color: #FFF;") 30
                td(style="background-color: #FFF;") ANSWERED, BUSY, FAILED, NO ANSWER, que representa lo que sucede finalmente con la llamada.
              tr
                th(style="background-color: #F6F6F6;") Duración
                td(style="background-color: #F6F6F6;") INT
                td(style="background-color: #F6F6F6;") 10
                td(style="background-color: #F6F6F6;") Lo que dura la llamada incluyendo el tiempo de timbrado.
              tr
                th(style="background-color: #FFF;") Facturar
                td(style="background-color: #FFF;") INT
                td(style="background-color: #FFF;") 10
                td(style="background-color: #FFF;") Lo que dura la llamada desde el momento en que es contestada la llamada.

    p.mb-5 A partir de este punto usaremos MySQL WorkBeach para visualizar mejor los resultados.

    .row.justify-content-center.align-items-center.mb-4
      .col-xl-5.col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 1
            | De clic en la pestaña de uso de bases de datos.
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 2
            | Cree una nueva conexión.
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 3
            | Póngale un nombre que usted prefiera a esa conexión.
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 4
            | Ponga el usuario root.
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 5
            | Digite el nombre de la base de datos que usará: cdr. 
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 6
            | Dele clic en ok.
          li 
            .lista-ol--cuadro__vineta(style="color: #000")
              span 7
            | Ahora debe conectar dando doble clic.
      .col-xl-5.col-lg-6(data-aos="fade-left")
        .BGIMG02.p-4
          SlyderA(tipo="b")
            div
              img(src="@/assets/curso/tema4/img04.jpg")
            div
              img(src="@/assets/curso/tema4/img05.jpg")
            div
              img(src="@/assets/curso/tema4/img06.jpg")

    .row.justify-content-center.mb-4
      .col-lg-2.col-4.BG09.p-4.mb-lg-0.mb-4(data-aos="fade-right")
        img.w-75(src="@/assets/curso/tema4/img07.png")
      .col-lg-10.BG08.p-4(data-aos="fade-left")
        p Ya se dispone de bases de datos y se sabe cómo agregar y cambiar datos. A continuación se aprenderá a extraer datos de una base de datos. Para ello se volverá a utilizar la sentencia SELECT. 
        p.mb-0 La sintaxis de SELECT  es complicada, Sin embargo, en este punto no se explicará todas sus opciones. Una manera más general reside en la siguiente sintaxis:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 SELECT <span style="color: #F4A338">[</span>ALL <span style="color: #F4A338">|</span> DISTINCT <span style="color: #F4A338">|</span> DISTINCTROW<span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #fff">expresion_select</span>,...
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; FROM <span style="color: #fff">referencias_de_tablas</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; WHERE <span style="color: #fff">condiciones</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #F4A338">[</span>GROUP BY <span style="color: #F4A338">{</span><span style="color: #fff">nombre_col</span> <span style="color: #F4A338">|</span> <span style="color: #fff">expresion</span> <span style="color: #F4A338">|</span> <span style="color: #fff">posicion</span><span style="color: #F4A338">}</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #F4A338">[</span>ASC <span style="color: #F4A338">|</span> DESC<span style="color: #F4A338">]</span>, ... <span style="color: #F4A338">[</span>WITH ROLLUP<span style="color: #F4A338">]</span><span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #F4A338">[</span>HAVING <span style="color: #fff">condiciones</span><span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #F4A338">[</span>ORDER BY <span style="color: #F4A338">{</span><span style="color: #fff">nombre_col</span> <span style="color: #F4A338">|</span> <span style="color: #fff">expresion</span> <span style="color: #F4A338">|</span> <span style="color: #fff">posicion</span><span style="color: #F4A338">}</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #F4A338">[</span>ASC <span style="color: #F4A338">|</span> DESC<span style="color: #F4A338">]</span> ,...<span style="color: #F4A338">]</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #F4A338">[</span>LIMIT <span style="color: #F4A338">{</span><span style="color: #F4A338">[</span><span style="color: #fff">desplazamiento</span>,<span style="color: #F4A338">]</span> <span style="color: #fff">contador</span> <span style="color: #F4A338">|</span> <span style="color: #fff">contador</span> OFFSET <span style="color: #fff">desplazamiento</span><span style="color: #F4A338">}</span><span style="color: #F4A338">]</span> 
      .col-lg-8.BG02.p-4
        p.mb-0 Nota. MySQL 8.0 Reference Manual (2021).

    p Para listar todos los elementos de la tabla se debe usar la sentencia:

    .row.justify-content-center.mb-4
      .col-lg-10.BGR10.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-lg-7.p-4.order-lg-1.order-2
            .BG01.p-4.mb-4
              p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">cdr</span>
            p.mb-0 Escriba la sentencia anterior. Al decir * estamos diciendo que seleccione todas las columnas de la tabla cdr:
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img08.jpg")

      .col-lg-10.BGR10(data-aos="fade-right")
        .row.justify-content-center
          .col-lg-7.p-4.order-lg-1.order-2
            p.mb-4 También se pueden seleccionar solo algunas, para esto, se deben separar por una coma así:
            .BG01.p-4
              p.text-AC.mb-0 SELECT <span style="color: #fff">origen</span>, <span style="color: #fff">destino</span>, <span style="color: #fff">duracion</span> FROM <span style="color: #fff">cdr</span>            
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img09.jpg")
          
    p También cabe mencionar que es posible asignar un alias a cualquiera de las expresiones <span style="background-color: #FDEDBC; padding: 3px">SELECT</span> y se puede realizar empleando la palabra <span style="background-color: #FDEDBC; padding: 3px">AS</span> aunque esta palabra es opcional:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 SELECT <span style="color: #fff">origen</span> AS <span style="color: #fff">num_orig</span>, <span style="color: #fff">destino</span>, <span style="color: #fff">duracion</span> AS <span style="color: #fff">tiempo_llamada</span> FROM <span style="color: #fff">cdr</span>
      .col-lg-8
        img(src="@/assets/curso/tema4/img10.jpg")

    p Suponga que se necesita saber cuánto cobrar por las llamadas salientes realizadas a celular o larga distancia nacional (que el destino tenga 10 dígitos), sabiendo que el valor del minuto son $85 (ochenta y cinco pesos):
    p Lo primero que se necesita tener en cuenta, es que hay que filtrar las llamadas que tienen un destino de 10 dígitos. Esto se logra con la función <span style="background-color: #FDEDBC; padding: 3px">LENGTH</span> y el número de segundos que tiene la llamada desde que es atendida, se guarda en la columna <span style="background-color: #FDEDBC; padding: 3px">facturar.</span> Pero para saber cuántos minutos duró la llamada, se debe  dividir el número de segundos por 60 y eso nos da el número de minutos. Ahora, el número de minutos no es entero y tiene datos decimales se debe redondear hacia arriba con la función <span style="background-color: #FDEDBC; padding: 3px">CEIL</span> y este valor ya redondeado, se puede multiplicar por 85 que es el valor del minuto.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span> ,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span> AS <span style="color: #fff">minutos</span>, 
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> AS <span style="color: #fff">minutos_redondeado</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> * <span style="color: #D15B98">85</span> AS <span style="color: #fff">valor</span>
        p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span> WHERE <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">destino</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">10</span>
      .col-lg-5.col-10(data-aos="fade-left")
        img(src="@/assets/curso/tema4/img11.jpg")
    
    separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Operadores

    p.mb-5 SQL tiene muchos operadores diferentes según el tipo de columna. Esos operadores se emplean para construir expresiones que se usan en las consultas.

    ol.lista-ol--cuadro(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta(style="color: #000")
          span A
        .h4.mb-0 Operadores lógicos
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="fade-right")
        p Los operadores lógicos, se emplean para crear expresiones lógicas complejas. Permite el uso de álgebra booleana y ayuda a crear condiciones o filtros de información mucho más precisos.
        p Recuerde que en el álgebra booleana o álgebra de bool, existen dos valores posibles para ser operados y son los resultados: verdadero y falso. MySQL dispone de dos constantes para esos valores: <span style="background-color: #FDEDBC; padding: 3px">TRUE</span> y <span style="background-color: #FDEDBC; padding: 3px">FALSE</span> respectivamente.
        p En SQL se añade un tercer valor. Esto es para hacer posible trabajar con valores <span style="background-color: #FDEDBC; padding: 3px">NULL.</span> El valor verdadero se implementa como 1 o <span style="background-color: #FDEDBC; padding: 3px">TRUE,</span> el falso como 0 o <span style="background-color: #FDEDBC; padding: 3px">FALSE</span> y el desconocido como <span style="background-color: #FDEDBC; padding: 3px">NULL.</span>
        p.mb-0 Se ejecuta la siguiente sentencia en la consulta para que mirar la naturaleza de los datos.  
      .col-lg-8.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT TRUE, FALSE, NULL;
        .row.mb-4
          .col-xxl-5.col-md-6.col-sm-7.col-8
            img(src='@/assets/curso/tema3/img12.svg')
        p.text-AB.mb-4 1 row in set (0.000 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 

    .row.justify-content-center.mb-5(data-aos="zoom-out")
      TabsA.color-acento-botones
        .BGR03A.p-4(titulo="Operador AND")
          p SQL puede usar el operador AND, que se trata de un operador binario, es decir, requiere de dos operandos. El resultado de la operación es verdadero, sólo si ambos operandos son verdaderos, falso si cualquier operando es falso o nulo si alguno de los dos es nulo. 
          p Esto se representa mediante la siguiente tabla de verdad:
          .tabla-a.color-secundario.mb-4
            table
              caption Nota. MySQL AND Operator By Examples (2020).
              thead
                tr
                  th(style="background-color: #5573C6;").text-center.text-white A
                  th(style="background-color: #5573C6;").text-center.text-white B
                  th(style="background-color: #5573C6;").text-center.text-white A AND B
              tbody
                tr
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  th(style="background-color: #F6F6F6;").text-center FALSO
                tr
                  td(style="background-color: #FFF;").text-center FALSO
                  td(style="background-color: #FFF;").text-center VERDADERO
                  th(style="background-color: #FFF;").text-center FALSO
                tr
                  td(style="background-color: #F6F6F6;").text-center VERDADERO
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  th(style="background-color: #F6F6F6;").text-center FALSO
                tr
                  td(style="background-color: #FFF;").text-center VERDADERO
                  td(style="background-color: #FFF;").text-center VERDADERO
                  th(style="background-color: #FFF;").text-center VERDADERO
                tr
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  td(style="background-color: #F6F6F6;").text-center NULL
                  th(style="background-color: #F6F6F6;").text-center FALSO
                tr
                  td(style="background-color: #FFF;").text-center NULL
                  td(style="background-color: #FFF;").text-center FALSO
                  th(style="background-color: #FFF;").text-center FALSO
                tr
                  td(style="background-color: #F6F6F6;").text-center VERDADERO
                  td(style="background-color: #F6F6F6;").text-center NULL
                  th(style="background-color: #F6F6F6;").text-center NULL
                tr
                  td(style="background-color: #FFF;").text-center NULL
                  td(style="background-color: #FFF;").text-center VERDADERO
                  th(style="background-color: #FFF;").text-center NULL
          .BG01.p-4
            p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #D15B98">1</span> AND <span style="color: #D15B98">0</span>, <span style="color: #D15B98">1</span> AND <span style="color: #D15B98">NULL</span>, <span style="color: #D15B98">0</span> AND <span style="color: #D15B98">NULL</span>, <span style="color: #D15B98">1</span> AND <span style="color: #D15B98">0</span> AND <span style="color: #D15B98">1</span>;
            .row.mb-4
              .col-xxl-8.col-md-10
                img(src='@/assets/curso/tema4/img13.svg')
            p.text-AB.mb-0 1 row in set (0.000 sec) 
        .BGR03A.p-4(titulo="Operador OR")
          p SQL este operador también tiene dos formas equivalentes OR 
          P El operador OR también es binario. Si ambos operandos siendo diferentes de NULL y el resultado es verdadero si alguno de ellos es verdadero y falso si los dos son falsos. Si uno de los operandos es NULL el resultado es verdadero si el otro es verdadero y NULL en el si el otro es falso.  
          P La tabla de verdad es:

          .tabla-a.color-secundario.mb-4
            table
              caption Nota. MySQL OR Operator (2020).
              thead
                tr
                  th(style="background-color: #5573C6;").text-center.text-white A
                  th(style="background-color: #5573C6;").text-center.text-white B
                  th(style="background-color: #5573C6;").text-center.text-white A AND B
              tbody
                tr
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  th(style="background-color: #F6F6F6;").text-center FALSO
                tr
                  td(style="background-color: #FFF;").text-center FALSO
                  td(style="background-color: #FFF;").text-center VERDADERO
                  th(style="background-color: #FFF;").text-center VERDADERO
                tr
                  td(style="background-color: #F6F6F6;").text-center VERDADERO
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  th(style="background-color: #F6F6F6;").text-center VERDADERO
                tr
                  td(style="background-color: #FFF;").text-center VERDADERO
                  td(style="background-color: #FFF;").text-center VERDADERO
                  th(style="background-color: #FFF;").text-center VERDADERO
                tr
                  td(style="background-color: #F6F6F6;").text-center FALSO
                  td(style="background-color: #F6F6F6;").text-center NULL
                  th(style="background-color: #F6F6F6;").text-center NULL
                tr
                  td(style="background-color: #FFF;").text-center NULL
                  td(style="background-color: #FFF;").text-center FALSO
                  th(style="background-color: #FFF;").text-center NULL
                tr
                  td(style="background-color: #F6F6F6;").text-center VERDADERO
                  td(style="background-color: #F6F6F6;").text-center NULL
                  th(style="background-color: #F6F6F6;").text-center VERDADERO
                tr
                  td(style="background-color: #FFF;").text-center NULL
                  td(style="background-color: #FFF;").text-center VERDADERO
                  th(style="background-color: #FFF;").text-center VERDADERO
          .BG01.p-4
            p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT <span style="color: #D15B98">1</span> OR <span style="color: #D15B98">0</span>, <span style="color: #D15B98">1</span> OR <span style="color: #D15B98">NULL</span>, <span style="color: #D15B98">0</span> OR <span style="color: #D15B98">NULL</span>, <span style="color: #D15B98">1</span> OR <span style="color: #D15B98">0</span> OR <span style="color: #D15B98">1</span>;
            .row.mb-4
              .col-xxl-8.col-md-10
                img(src='@/assets/curso/tema4/img14.svg')
            p.text-AB.mb-4 1 row in set (0.000 sec)
            p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span>     

    ol.lista-ol--cuadro(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta(style="color: #000")
          span B
        .h4.mb-0 Operadores de igualdad+
    
    p El operador igual (=) compara dos expresiones y da como resultado TRUE si son iguales o FALSE si son diferentes. Ya lo hemos usado en ejemplos anteriormente:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">cdr</span>  WHERE <span style="color: #fff">registro</span> = '<span style="color: #D15B98">2018-01-02 10:19:08</span>'

    ol.lista-ol--cuadro(data-aos="fade-right")
      li 
        .lista-ol--cuadro__vineta(style="color: #000")
          span C
        .h4.mb-0 Operadores de desigualdad


    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        table.mb-4
          thead
            tr
              th(style="background-color: #5573C6;").text-center.text-white Operador
              th(style="background-color: #5573C6;").text-center.text-white Descripción
          tbody
            tr
              td(style="background-color: #F6F6F6;").text-center &lt;=
              td(style="background-color: #F6F6F6;").text-center Menor o igual
            tr
              td(style="background-color: #FFF;").text-center &lt;
              td(style="background-color: #FFF;").text-center Menor
            tr
              td(style="background-color: #F6F6F6;").text-center &gt;
              td(style="background-color: #F6F6F6;").text-center Mayor
            tr
              td(style="background-color: #FFF;").text-center &gt;=
              td(style="background-color: #FFF;").text-center Mayor o igual
        .BG01.p-4
          p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">cdr</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;WHERE <span style="color: #fff">registro</span> <span style="color: #F4A338">&gt;=</span> '<span style="color: #D15B98">2018-01-02 10:19:08</span>' 
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;AND <span style="color: #fff">registro</span> <span style="color: #F4A338">&lt;=</span> '<span style="color: #D15B98">2018-01-04 10:19:08</span>'
      .col-lg-5.col-10(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img15.jpg')

    separador
    #t_4_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.3 Ordenar resultados
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-4.BG09.p-4.mb-lg-0.mb-4(data-aos="fade-right")
        img.w-75(src="@/assets/curso/tema4/img16.svg")
      .col-lg-10.BG08.p-4(data-aos="fade-left")
        p También, se puede agregar una cláusula de orden <span style="background-color: #FDEDBC; padding: 3px">ORDER BY</span> para lograr resultados ordenados por la columna que se quiera y se puede hacer ascendente o descendente con la cláusula <span style="background-color: #FDEDBC; padding: 3px">ASC</span> y <span style="background-color: #FDEDBC; padding: 3px">DESC</span> respectivamente.
        p Por ejemplo se desea listas las llamadas en orden de duración descendente (de mayor a menor):

    .BGIMG03.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-4
            .BG01.p-4
              p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">cdr</span> ORDER BY <span style="color: #fff">duracion</span> DESC
          .col-lg-6.col-10
            img(src="@/assets/curso/tema4/img17.jpg")
        .row.justify-content-center.align-items-center
          .col-lg-4
            p Y también de manera ascendente por la fecha:
            .BG01.p-4
              p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">cdr</span> ORDER BY <span style="color: #fff">registro</span> ASC
          .col-lg-6.col-10
            img(src="@/assets/curso/tema4/img18.jpg")
        .row.justify-content-center.align-items-center
          .col-lg-4
            p También se puede ordenar por el resultado de operación, aunque el rendimiento de la consulta disminuye. Ejemplo, para llamadas de larga distancia o celular a 85 pesos el minuto, que se ordene por la llamada que más costo tenga a la que menos costo tenga.
            .BG01.p-4
              p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>, <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span>/<span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> AS <span style="color: #fff">valor</span> FROM <span style="color: #fff">cdr</span> 
              p.text-AC.mb-0 WHERE <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">destino</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">10</span>  
              p.text-AC.mb-0 ORDER BY  <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span>/<span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span>  DESC 
          .col-lg-6.col-10
            img(src="@/assets/curso/tema4/img19.jpg")
        .row.justify-content-center.align-items-center
          .col-lg-4
            p Se puede agrupar por varios criterios a la vez, por ejemplo, si se ordenan los resultados por la duración y si hay repetidos, que el siguiente criterio sea la fecha de registro. 
            .BG01.p-4
              p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span> FROM <span style="color: #fff">cdr</span> 
              p.text-AC.mb-0 ORDER BY  <span style="color: #fff">facturar</span>  DESC , <span style="color: #fff">registro</span>  ASC
          .col-lg-6.col-10
            img(src="@/assets/curso/tema4/img20.jpg")

    separador
    #t_4_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.4 Listar y limitar resultados
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-4.BG09.p-4.mb-lg-0.mb-4(data-aos="fade-right")
        img.w-75(src="@/assets/curso/tema4/img16.svg")
      .col-lg-10.BG08.p-4(data-aos="fade-left")
        p La principal forma de limitar resultados es filtrando condiciones en los datos con la cláusula <span style="background-color: #FDEDBC; padding: 3px">WHERE,</span> sin embargo cuando a pesar de eso los datos son muchos, es necesario paginarlo o presentarlo por partes, para ello se miraría la cláusula <span style="background-color: #FDEDBC; padding: 3px">LIMIT.</span>
        p #[b Ejemplo]: se desea filtrar las llamadas larga distancia o celular de todo el año 2016 que cuestan más de $1.000, y presentarlas ordenadas de mayor a menor por el precio.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        .BG01.p-4
          p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>, <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> AS <span style="color: #fff">valor</span>
          p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span>
          p.text-AC.mb-0 WHERE <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">2016</span>
          p.text-AC.mb-0 AND <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">destino</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">10</span>  
          p.text-AC.mb-0 AND <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> > <span style="color: #D15B98">200</span>
          p.text-AC.mb-0 ORDER BY <span style="color: #fff">valor</span> DESC 
      .col-lg-5.col-10(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img21.jpg')
      
    .BGM02.px-md-5.px-4.py-4.mb-4
      p Los datos que la consulta arroja seguramente son muchos. Para saber cuántos resultados cumplen con las condiciones de la cláusula <span style="background-color: #FDEDBC; padding: 3px">WHERE,</span> es preciso contarlos con la función <span style="background-color: #FDEDBC; padding: 3px">COUNT,</span> pero la consulta no debe usar la cláusula <span style="background-color: #FDEDBC; padding: 3px">ORDER BY</span> porque la función <span style="background-color: #FDEDBC; padding: 3px">COUNT</span> solamente arroja una fila y con una única columna, por lo tanto, el resultado no se puede ordenar.
      .row.justify-content-center.mb-4
        .col-lg-5.col-10.mb-4(data-aos="fade-right")
          .BG01.p-4
            p.text-AC.mb-0 SELECT <span style="color: #F4A338">COUNT(*)</span>
            p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span>
            p.text-AC.mb-0 WHERE <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">2016</span>
            p.text-AC.mb-0 AND <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">destino</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">10</span>  
            p.text-AC.mb-0 AND <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> > <span style="color: #D15B98">200</span>
        .col-lg-5.col-10(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img22.jpg')
    
    p Como se pueden ver son muchos registros, pero si el interés es mostrar los primeros10, utilice la cláusula <span style="background-color: #FDEDBC; padding: 3px">LIMIT.</span>

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        .BG01.p-4
          p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>, <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> AS <span style="color: #fff">valor</span>
          p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span>
          p.text-AC.mb-0 WHERE <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">2016</span>
          p.text-AC.mb-0 AND <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">destino</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">10</span>  
          p.text-AC.mb-0 AND <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> > <span style="color: #D15B98">200</span>
          p.text-AC.mb-0 ORDER BY <span style="color: #fff">valor</span> DESC
          p.text-AC.mb-0 LIMIT <span style="color: #D15B98">10</span>  
      .col-lg-5.col-10(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img23.jpg')

    .BGM02.px-md-5.px-4.py-4.mb-4
      p Para lograr hacer esto la cláusula LIMIT  permite dos parámetros. Cuando se utilizan los dos, el primero muestra el número de la primera fila a traer, y el segundo el número de filas a traer. Se puede por ejemplo, rescatar las filas de dos en dos:
      .row.justify-content-center.mb-4
        .col-lg-5.col-10.mb-4(data-aos="fade-right")
          .BG01.p-4
            p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>, <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> AS <span style="color: #fff">valor</span>
            p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span>
            p.text-AC.mb-0 WHERE <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">2016</span>
            p.text-AC.mb-0 AND <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">destino</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">10</span>  
            p.text-AC.mb-0 AND <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> > <span style="color: #D15B98">200</span>
            p.text-AC.mb-0 ORDER BY <span style="color: #fff">valor</span> DESC
            p.text-AC.mb-0 LIMIT <span style="color: #D15B98">10, 10</span>  
        .col-lg-5.col-10(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img24.jpg')

    p Y con la siguiente consulta se traen los próximos 10.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        .BG01.p-4
          p.text-AC.mb-0 SELECT <span style="color: #F4A338">*</span>, <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> AS <span style="color: #fff">valor</span>
          p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span>
          p.text-AC.mb-0 WHERE <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">2016</span>
          p.text-AC.mb-0 AND <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">destino</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">10</span>  
          p.text-AC.mb-0 AND <span style="color: #F4A338">CEIL(</span><span style="color: #fff">facturar</span><span style="color: #F4A338">/</span><span style="color: #D15B98">60</span><span style="color: #F4A338">)</span> <span style="color: #F4A338">*</span> <span style="color: #D15B98">85</span> > <span style="color: #D15B98">200</span>
          p.text-AC.mb-0 ORDER BY <span style="color: #fff">valor</span> DESC
          p.text-AC.mb-0 LIMIT <span style="color: #D15B98">20, 10</span>  
      .col-lg-5.col-10(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img25.jpg')

    separador
    #t_4_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.5 Agrupar Filas
    
    .row.justify-content-center.mb-4
      .col-lg-2.col-4.BG09.p-4.mb-lg-0.mb-4(data-aos="fade-right")
        img.w-75(src="@/assets/curso/tema4/img16.svg")
      .col-lg-10.BG08.p-4(data-aos="fade-left")
        p Se pueden agrupar filas en la salida con la sentencia <span style="background-color: #FDEDBC; padding: 3px">SELECT,</span> según los valores de una columna, usando la cláusula <span style="background-color: #FDEDBC; padding: 3px">GROUP BY.</span> Y se usa con funciones de agrupación como lo son, <span style="background-color: #FDEDBC; padding: 3px">AVG, SUM, MAX, COUNT,</span> entre otros. 
        p.mb-0 #[b Ejemplo]: se desea saber cuántas llamadas entrantes se realizaron durante cada uno de los meses del año 2017. Las llamadas entrantes son aquellas que no provienen de una extensión local, es decir, el origen tiene más de tres dígitos.

    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-4(data-aos="fade-right")
        .BG01.p-4
          p.text-AC.mb-0 SELECT <span style="color: #F4A338">MONTH(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> AS <span style="color: #fff">mes</span>, <span style="color: #F4A338">COUNT(*)</span> AS <span style="color: #fff">cantidad</span>
          p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span> 
          p.text-AC.mb-0 WHERE <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">origen</span><span style="color: #F4A338">)</span> &gt; <span style="color: #D15B98">3</span> AND <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> = <span style="color: #D15B98">2017</span>
          p.text-AC.mb-0 GROUP BY <span style="color: #fff">mes</span>  
      .col-lg-5.col-10(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img26.jpg')

    p Pero si se desea mostrar también la agrupación de los años 2017, 2018 y 2019 y los meses de cada uno de estos años la sería: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8.BG01.p-4
        p.text-AC.mb-0 SELECT <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span> AS <span style="color: #fff">año</span>, <span style="color: #F4A338">MONTH(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> AS <span style="color: #fff">mes</span>, <span style="color: #F4A338">COUNT(*)</span> AS <span style="color: #fff">cantidad</span>
        p.text-AC.mb-0 FROM <span style="color: #fff">cdr</span> 
        p.text-AC.mb-0 WHERE <span style="color: #F4A338">LENGTH(</span><span style="color: #fff">origen</span><span style="color: #F4A338">)</span> &gt; <span style="color: #D15B98">3</span> AND <span style="color: #F4A338">YEAR(</span><span style="color: #fff">registro</span><span style="color: #F4A338">)</span> IN <span style="color: #F4A338">(</span><span style="color: #D15B98">2017</span>, <span style="color: #D15B98">2018</span>, <span style="color: #D15B98">2019</span><span style="color: #F4A338">)</span>
        p.text-AC.mb-0 GROUP BY <span style="color: #fff">año</span>, <span style="color: #fff">mes</span> 
        p.text-AC.mb-0 ORDER BY <span style="color: #fff">año</span>, <span style="color: #fff">mes</span> 

    p Es de resaltar que para agregar más de una opción en el año, se usó la cláusula IN  y se ordena por año y como segundo criterio por mes.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-6
        img(src='@/assets/curso/tema4/img27.jpg')

</template>

<script>
export default {
  name: 'Tema4',
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
