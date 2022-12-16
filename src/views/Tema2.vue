<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 SQL para la creación y eliminación de bases de datos - DDL
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img01.png")
      .col-lg-8
        p Cada grupo de entidades que tienen un modelo completo, forma una base de datos. Desde la perspectiva de SQL, una base de datos es únicamente un conjunto de relaciones (o tablas) y para organizarlas o diferenciarlas se accede a ellas por su nombre. A nivel de sistema operativo, cada base de datos se almacena en un directorio distinto por MySQL.
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/img04.png")
          .col
            p.mb-0 Por esto, crear una base de datos es un trabajo muy sencillo. Claro que, a la hora de crearla, la base de datos estará desocupada, es decir, no almacenará ninguna tabla.
        .cajon.color-acento-botones.p-4(data-aos="fade-left")
          p #[b Nota]: es fundamental que mientras se estudia se ejecuten las sentencias propuestas aquí de esa manera se consolidarán los conocimientos de cada tema tratado.
          p Se debe tomar el tiempo necesario para escribir en la consola cada una de las sentencias, es un ejercicio fundamental para asimilar el conocimiento que se está adquiriendo.
          p.mb-0 De la misma forma se deben revisar los resultados que le da la ejecución, en caso de algún error en la sintaxis, la respuesta dará una idea de qué puede estar fallando. 

    p Se va a #[b crear y manejar] una base de datos de práctica, a la vez que se familiarice con la manera de #[b trabajar de MySQL].
    p Para iniciar, se creará una base de datos únicamente para practicar, y se llamará "#[b prueba]":

    .row.justify-content-center.mb-5(data-aos="zoom-out")
      TabsA.color-acento-botones
        .BGR03A.p-4(titulo="PASO 1")
          p Se usa la sentencia <span style="background-color: #FDEDBC; padding: 3px">CREATE DATABASE</span> para crear una base de datos.
          .BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span>CREATE DATABASE <span style="color: #fff">prueba</span>;
            p.text-AB.mb-0 Query OK, 1 row affected (0.03 sec)
            p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span>
        .BGR03A.p-4(titulo="PASO 2")
          p Se puede saber cuántas bases de datos se encuentran en nuestro sistema usando la sentencia <span style="background-color: #FDEDBC; padding: 3px">SHOW DATABASES:</span>
          .BG01.p-4.mb-4
            p.text-AC <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> SHOW DATABASES;
            .row.mb-4
              .col-xl-4.col-md-6.col-sm-8.col-9
                img(src='@/assets/curso/tema2/img03.svg')
            p.text-AB.mb-4 6 rows in set (0.00 sec)
            p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span> 
        .BGR03A.p-4(titulo="PASO 3")
          p Desde ahora, en los siguientes puntos, se trabajará con la base de datos creada, por lo cual, la elegirá como base de datos por defecto. Esto nos evitará poner el nombre de la base de datos en consultas. Para escoger una base de datos se emplea el comando <span style="background-color: #FDEDBC; padding: 3px">USE,</span> que no es puntualmente una sentencia SQL, sino una opción de MySQL:
          .BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> USE <span style="color: #fff">prueba</span>;
            p.text-AB.mb-0 Database changed
            p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span> 
        .BGR03A.p-4(titulo="PASO 4")
          p Para borrar una base de datos se usa la sentencia <span style="background-color: #FDEDBC; padding: 3px">SQL DROP.</span> A continuación, se borrará la base de datos prueba, listaremos las existentes y la volveremos a crear.
          .BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DROP DATABASE <span style="color: #fff">prueba</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.01 sec) 
        .BGR03A.p-4(titulo="PASO 5")
          p Liste las bases de datos para comprobar que ya no existe la base de datos antes creada.
          .BG01.p-4.mb-4
            p.text-AC.mb-4 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> SHOW DATABASES;
            .row.mb-4
              .col-xl-4.col-md-6.col-sm-8.col-9
                img(src='@/assets/curso/tema2/img04.svg')
            p.text-AB.mb-4 5 rows in set (0.00 sec)
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE DATABASE <span style="color: #fff">prueba</span>;
            p.text-AB.mb-4 Query OK, 1 row affected (0.01 sec)
            p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span>  

    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 SQL para la creación y eliminación de Tablas
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p A continuación, la sentencia CREATE TABLE que se empleará para la creación de tablas.
        .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-left")
          p.mb-0 Esta sentencia tiene una sintaxis algo compleja, ya que hay muchas opciones y se tienen varias posibilidades diferentes cuando se desea crear una tabla. Se irán viendo poco a poco y en breve tiempo se sabrá usar muchas de sus opciones.
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/img05.png")
          .col
            p.mb-0 En su forma más sencilla, #[b CREATE TABLE] hará una tabla con todas las columnas que le sean indicadas. A continuación un ejemplo, una tabla que admitirá almacenar el nombre de varias personas y las fechas de nacimiento de cada una. Se debe de indicar el nombre de la tabla, y los nombres de las columnas y tipos el tipo de datos de cada una de ella:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img02.svg")

    p.mb-5 Se creará una tabla con el nombre de "#[b gente]" con dos columnas: "#[b nombre]" que puede aguantar cadenas de hasta 40 caracteres y "#[b fecha]" de tipo fecha.

    .row.justify-content-center.mb-4
      .col-lg-8.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> USE <span style="color: #fff">prueba</span>;
        p.text-AB.mb-0 Database changed
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">gente</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span> VARCHAR(<span style="color: #D15B98">40</span>), <span style="color: #fff">fecha</span> DATE<span style="color: #F4A338">)</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.53 sec)
        p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span> 

    p Se puede examinar cuántas tablas y qué nombres tienen en una base de datos, empleando la sentencia #[b SHOW TABLES]:

    .row.justify-content-center.mb-4
      .col-lg-8.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> SHOW TABLES;
        .row.mb-4
          .col-xxl-3.col-xl-4.col-md-5.col-7
            img(src='@/assets/curso/tema2/img05.svg')
        p.text-AB.mb-0 1 row in set (0.01 sec)
        p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span> 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      AcordionA.mb-5(tipo="a" clase-tarjeta="BGR02")
        .row.justify-content-center(titulo="Valores Nulos")
          .col-12.mb-4
            p Al establecer cada columna se puede concluir si podrá o no contener valores nulos. Cabe recordar que, aquellas columnas que hacen parte de una clave primaria no pueden almacenar valores nulos.
            p Si se define una columna como clave primaria, queda imposibilitada para que pueda contener valores <span style="background-color: #FDEDBC; padding: 3px">NULL (nulo),</span> pero este caso no es únicamente en que se puede ser interesante imposibilitar la retribución de valores nulos para una columna.
            p.mb-0 Por defecto, cada columna permite valores nulos <span style="background-color: #FDEDBC; padding: 3px">(NULL),</span> y para que no se admitan, se usa <span style="background-color: #FDEDBC; padding: 3px">NOT NULL.</span> Por ejemplo:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">ciudad1</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> NOT NULL, <span style="color: #fff">poblacion</span> INT NULL<span style="color: #F4A338">)</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.89 sec)
          .col-12.mb-4
            p.mb-0 Listar las tablas existentes hasta ahora:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> SHOW TABLES;
            .row.mb-4
              .col-xxl-3.col-xl-4.col-md-5.col-7
                img(src='@/assets/curso/tema2/img06.svg')
            p.text-AB.mb-4 2 rows in set (0.01 sec)
            p.text-AB.mb-0 mysql<span style="color: #4ADBD1">&gt;</span>
        .row.justify-content-center(titulo="Valores por defecto")
          .col-12.mb-4
            p En una columna también se puede precisar, opcionalmente, un valor por defecto. El valor por defecto se determinará de forma automática a una columna a la hora que no se especifique un valor determinado al añadir.
            p Cuando una columna permite tener un valor nulo, y la hora de insertar no se especifica un valor, <span style="background-color: #FDEDBC; padding: 3px">NULL</span> será usado como valor por defecto. En el anterior ejemplo, el valor por defecto para <span style="background-color: #FDEDBC; padding: 3px">poblacion</span> es <span style="background-color: #FDEDBC; padding: 3px">NULL.</span>
            p Por ejemplo, si se quiere que 50000 sea el valor que por defecto se pondrá en la columna <span style="background-color: #FDEDBC; padding: 3px">poblacion,</span>  Se creará la tabla como:
            p.mb-0 A continuación, se debe escribir la sentencia, pero esta vez se hará por partes.
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 CREATE TABLE <span style="color: #fff">ciudad2</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> NOT NULL, <span style="color: #fff">poblacion</span> INT NULL DEFAULT <span style="color: #D15B98">50000</span><span style="color: #F4A338">)</span>; 
          .col-12.mb-4
            p.mb-0 Como la sentencia es larga se digitará por partes así:
          .col-lg-8.mb-4
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta(style="color: #000")
                  span 1
                | Primero se escribirá <span style="background-color: #FDEDBC; padding: 3px">CREATE TABLE ciudad2 (nombre VARCHAR(20) NOT NULL,</span>
              li 
                .lista-ol--cuadro__vineta(style="color: #000")
                  span 2
                | Se presiona la tecla ENTER.
              li 
                .lista-ol--cuadro__vineta(style="color: #000")
                  span 3
                | Luego se escribe el resto de la sentencia <span style="background-color: #FDEDBC; padding: 3px">poblacion INT NULL DEFAULT 50000);</span>
          .col-12.mb-4
            p.mb-0 Recuerde que MySQL interpreta una sentencia solo cuando encuentra el carácter punto y coma (;). El resultado será:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">ciudad2</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> NOT NULL,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">poblacion</span> INT NULL DEFAULT <span style="color: #D15B98">50000</span><span style="color: #F4A338">)</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.29 sec) 
        .row.justify-content-center(titulo="Claves Primarias")
          .col-12.mb-4
            p Es posible definir una clave primaria sobre una columna, usando la palabra clave <span style="background-color: #FDEDBC; padding: 3px">PRIMARY KEY</span> o <span style="background-color: #FDEDBC; padding: 3px">KEY.</span>
            p En cada tabla únicamente puede haber una clave primaria, y la columna sobre la que se concreta una clave primaria no puede poseer valores <span style="background-color: #FDEDBC; padding: 3px">NULL,</span>  como ya se hiso mención. Si esto no se especifica de forma explícita, MySQL lo hará de forma automática.
            p.mb-0 Por ejemplo, si se quiere crear un índice de la tabla de ciudad3 para la columna nombre, se creará la tabla así:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">ciudad3</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> NOT NULL PRIMARY KEY,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">poblacion</span> INT NULL DEFAULT <span style="color: #D15B98">50000</span><span style="color: #F4A338">)</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0. sec)
          .col-12.mb-4
            p Emplear <span style="background-color: #FDEDBC; padding: 3px">NOT NULL PRIMARY KEY,</span> es lo mismo que <span style="background-color: #FDEDBC; padding: 3px">PRIMARY KEY, NOT NULL KEY</span> o simplemente <span style="background-color: #FDEDBC; padding: 3px">KEY.</span>
            p Hay una sintaxis distinta para crear claves primarias, que generalmente es preferible, porque es más potente. De hecho, la que se ha explicado es un alias para la forma general, que no permite todas las funcionalidades (como, por ejemplo, crear claves primarias sobre varias columnas).
            p.mb-0 Se verá esta otra alternativa un poco más adelante.
        .row.justify-content-center(titulo="Columnas Autoincrementadas")
          .col-12.mb-4
            p En MySQL existe la posibilidad de crear una columna autoincrementada, sin embargo, esta columna sólo puede ser de tipo entero y llave primaria.
            p Si cuando se inserta una fila se excluye el valor de la columna autoincrementada o si a un valor nulo se le intenta insertar para esa columna, su valor será calculado automáticamente, tomando el valor mayor de esa columna y sumándole uno, es decir, es secuencial. Permitiendo crear, una columna con un valor único y secuencias para cada fila de la tabla.
            p.mb-0 Comúnmente, estas columnas son usadas como claves primarias secuenciales. SQL solo las permite en números enteros, es decir una columna de otro timo no podrá ser autoincrementable, de tal forma que la composición de clave primaria, que sea entera y autoincrementada es perfecta para ser usada como clave primaria artificial:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">ciudad4</span> <span style="color: #F4A338">(</span><span style="color: #fff">clave</span> INT AUTO_INCREMENT PRIMARY KEY,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> NOT NULL,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">poblacion</span> INT NULL DEFAULT <span style="color: #D15B98">50000</span><span style="color: #F4A338">)</span>;
            p.text-AB.mb-4 Query OK, 0 rows affected (0.21 sec)
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span>
        .row.justify-content-center(titulo="Comentarios")
          .col-12.mb-4
            p.mb-0 Adicionalmente, al momento de crear la tabla, se puede agregar un comentario a cada columna. Este comentario es usado como información adicional sobre una característica específica de la columna, y va en el apartado de documentación de la base de datos:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">ciudad5</span>
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">(</span><span style="color: #fff">clave</span> INT AUTO_INCREMENT PRIMARY KEY COMMENT '<span style="color: #D15B98">Esto es clave principal</span>',
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">50</span><span style="color: #F4A338">)</span> NOT NULL,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">poblacion</span> INT NULL DEFAULT <span style="color: #D15B98">50000</span><span style="color: #F4A338">)</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.08 sec) 
        .row.justify-content-center(titulo="Descripción de la tabla")
          .col-12.mb-4
            p SQL tiene una sentencia que permite ver la descripción de una tabla esta sentencia es <span style="background-color: #FDEDBC; padding: 3px">DESC &lt;nombre_tabla&gt;.</span>
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-4 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DESC <span style="color: #fff">ciudad5</span>;
            .row.mb-4
              .col-xl-9
                img(src='@/assets/curso/tema2/img07.svg')
            p.text-AB.mb-0 3 rows in set (0.01 sec) 
        .row.justify-content-center(titulo="Documentación")
          .col-12.mb-4
            p MySQL tiene una amplia documentación, se puede mirar el siguiente enlace para la sintaxis de crear una tabla antes de continuar <a href="https://dev.mysql.com/doc/refman/8.0/en/create-table.html"  target="_blank" style="color: #5573C6">#[b https://dev.mysql.com/doc/refman/8.0/en/create-table.html]</a>,  luego se podrá extraer una parte para ir estudiando poco a poco. 
            p.mb-0 Pero SQL posee bastante opciones al momento de precisar columnas. También del tipo y el nombre, podemos concretar valores por defecto, admitir o no, que contengan valores tipo <span style="background-color: #FDEDBC; padding: 3px">NULL,</span> crear una clave primaria, indexar y muchas más. La sintaxis para definir las columnas es:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #fff">nombre_columna</span> tipo_dato <span style="color: #F4A338">[</span>NOT NULL | NULL<span style="color: #F4A338">]</span> <span style="color: #F4A338">[</span>DEFAULT <span style="color: #D15B98">valor_por_defecto</span><span style="color: #F4A338">]</span>
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>AUTO_INCREMENT<span style="color: #F4A338">]</span> <span style="color: #F4A338">[</span><span style="color: #F4A338">[</span>PRIMARY<span style="color: #F4A338">]</span> KEY<span style="color: #F4A338">]</span> <span style="color: #F4A338">[</span>COMMENT '<span style="color: #D15B98">string</span>'<span style="color: #F4A338">]</span>
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">[</span>definición_referencia<span style="color: #F4A338">]</span>
          .col-lg-8.BG05.p-4.mb-4
            p.mb-0 Nota. MySQL 8.0 Reference Manual (2021)
          .col-12.mb-4
            p.mb-0 Esta documentación se puede leer de la siguiente forma:
          .col-lg-8.mb-4
            ul.lista-ul--color.ms-4
              li
                i.fas.fa-database(style="color:#4ADBD1")
                p.mb-0 <span style="background-color: #FDEDBC; padding: 3px">#[b nombre_columna]:</span> es el nombre que se le dará a la columna a definir.
              li
                i.fas.fa-database(style="color:#4ADBD1")
                p.mb-0 	<span style="background-color: #FDEDBC; padding: 3px">#[b tipo_dato]:</span> es el tipo de datos de la columna (<span style="background-color: #FDEDBC; padding: 3px">INT, FLOAT, VAR CHAR</span>).
              li
                i.fas.fa-database(style="color:#4ADBD1")
                p.mb-0 	<span style="background-color: #FDEDBC; padding: 3px">#[b [NOT NULL | NULL]]:</span> todo lo que encuentre encerrado entre corchetes ([]) significa que es opcional pude incluirse o no, dentro de las opciones. Lo que encuentre entre separado por el carácter pai ( | ), significa que debe escoger una opción de las que están paradas por el pai.
              li
                i.fas.fa-database(style="color:#4ADBD1")
                p.mb-0 	De esta manera se quiere definir un de que se llame <span style="background-color: #FDEDBC; padding: 3px">fecha</span> de tipo <span style="background-color: #FDEDBC; padding: 3px">DATE</span> y que no sea nuleable la sintaxis sería: 
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #fff">fecha</span> DATE NOT NULL
          .col-lg-8.mb-4
            p Si quiero que el valor por defecto de esta columna sea la fecha actual del sistema puedo usar la sintaxis <span style="background-color: #FDEDBC; padding: 3px">DEFAULT CURRENT_DATE</span> así:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #fff">fecha</span> DATE NOT NULL DEFAULT CURRENT_DATE
        .row.justify-content-center(titulo="Claves primarias compuestas")
          .col-12.mb-4
            p La sintaxis para concretar claves primarias es:
          .col-lg-8.BG01.p-4.mb-4
            p.text-white.mb-0 definición_columnas
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;| PRIMARY KEY <span style="color: #F4A338">(</span>index_nombre_col,...<span style="color: #F4A338">)</span>
          .col-lg-8.BG05.p-4.mb-4
            p.mb-0 Nota. MySQL 8.0 Reference Manual (2021)
          .col-12.mb-4
            p.mb-0 Usando esta sintaxis, en el ejemplo anterior que se dio para crear claves primarias y quedaría de la siguiente forma:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">ciudad6</span> <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span> CHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> NOT NULL,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">poblacion</span> INT NULL DEFAULT <span style="color: #D15B98">5000</span>,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> PRIMARY KEY <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span><span style="color: #F4A338">))</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.17 sec) 
          .col-12.mb-4
            p.mb-0 Pero de esta manera, se tiene mayor cantidad de opciones, por ejemplo, entre los paréntesis se puede detallar diversos nombres de columnas, para construir claves primarias acomodadas por diversas columnas:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">persona</span> <span style="color: #F4A338">(</span>
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">tipo_documento</span> CHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">2</span><span style="color: #F4A338">)</span> NOT NULL,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">documento_identidad</span> CHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">10</span><span style="color: #F4A338">)</span> NOT NULL,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombres</span> CHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">30</span><span style="color: #F4A338">)</span>,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> PRIMARY KEY <span style="color: #F4A338">(</span><span style="color: #fff">tipo_documento</span>, <span style="color: #fff">documento_identidad</span><span style="color: #F4A338">))</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.09 sec)
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span>
          .col-12.mb-4
            p.mb-0 Se puede observar como quedó definida la tabla, se debe prestar especial atención a la columna de salida llamada Key:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-4 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DESC <span style="color: #fff">persona</span>;
            .row.mb-4
              .col-xl-9
                img(src='@/assets/curso/tema2/img08.svg')
            p.text-AB.mb-4 3 rows in set (0.00 sec)
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span>
        .row.justify-content-center(titulo="Índices")
          .col-12.mb-4
            p Se tienen tres tipos de índices. El primero pertenece a las claves primarias, que como se vió, también se pueden crear en la parte de definición de columnas.
            p ¿Cuándo es oportuno crear índices?
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta(style="color: #000")
                  span a
                | Cuando se define una llave foránea.
              li 
                .lista-ol--cuadro__vineta(style="color: #000")
                  span b
                | Cuando se sabe que se realizarán consultas directas sobre esa columna.
            p El segundo tipo de índice que existe, permite definir sobre una columna el índice. Para concretar estos índices se usan de manera indistinta las opciones <span style="background-color: #FDEDBC; padding: 3px">KEY o INDEX.</span>
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">indices1</span> <span style="color: #F4A338">(</span>
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id</span> INT,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span>,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> INDEX <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span><span style="color: #F4A338">))</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.14 sec)
          .col-12.mb-4
            p.mb-0 O su semejante:
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">indices2</span> <span style="color: #F4A338">(</span>
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id</span> INT,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span>,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> KEY <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span><span style="color: #F4A338">))</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.16 sec)
        .row.justify-content-center(titulo="Claves Únicas")
          .col-12.mb-4
            p El tercer tipo de índices es para crear claves únicas así mismo sobre una columna o sobre varias. Para definir índices con claves únicas se debe de usar la opción <span style="background-color: #FDEDBC; padding: 3px">UNIQUE.</span>
            p.mb-0 La diferencia entre un índice único y un índice normal, es que en los índices únicos no se admite la inclusión de filas con datos repetidos en la columna o columnas de la tabla. Una excepción es el valor <span style="background-color: #FDEDBC; padding: 3px">NULL,</span> que sí se puede llegar a repetir varias veces.
          .col-lg-8.BG01.p-4.mb-4
            p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">indices3</span> <span style="color: #F4A338">(</span>
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id</span> INT,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre</span> CHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">19</span><span style="color: #F4A338">)</span>,
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> UNIQUE <span style="color: #F4A338">(</span><span style="color: #fff">nombre</span><span style="color: #F4A338">))</span>;
            p.text-AB.mb-0 Query OK, 0 rows affected (0.09 sec)
          .col-12
            p.mb-0 Los índices son útiles para optimizar las consultas y las búsquedas de datos. Por medio de su uso es mucho más eficiente encontrar filas con ciertos valores de columnas, o mostrar los resultados en cierto orden. La alternativa es realizar búsquedas secuenciales (sin índices), que en tablas extensas requieren mucho tiempo y procesamiento de datos.

    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Claves foráneas 

    .bloque-texto-g.color-acento-contenido.bloque-40.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img09.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En MySQL únicamente existe soporte para claves foráneas en tablas de tipo InnoDB.<br><br>InnoDB es el motor de almacenamiento por defecto de las últimas versiones de MySQL, no obstante, esto no imposibilita usarlas en otros tipos de tablas.
    
    .row.justify-content-center.mb-4(data-aos="zoom-out")
      .col-lg-6
        img(src='@/assets/curso/tema2/img10.png')
    
    p Primero se crea la tabla persona:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">personas</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id_persona</span> INT AUTO_INCREMENT PRIMARY KEY,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombres</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">40</span><span style="color: #F4A338">)</span> NOT NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">fecha</span> DATE<span style="color: #F4A338">)</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.13 sec) 

    p Si se quiere crear una base de datos que corresponda al modelo que se está presentando en la gráfica anterior las sentencias para la tabla teléfonos con la referencia a la tabla sería:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 CREATE TABLE <span style="color: #fff">telefonos</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #fff">persona_id</span> INT NOT NULL REFERENCES <span style="color: #fff">personas</span> <span style="color: #F4A338">(</span><span style="color: #D15B98">id</span><span style="color: #F4A338">)</span> ON DELETE CASCADE ON UPDATE CASCADE,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #fff">numero</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> PRIMARY KEY,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #fff">tipo</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">10</span><span style="color: #F4A338">)</span> 
        p.text-AC.mb-0 <span style="color: #F4A338">)</span>; 

    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img11.png")
        .col-lg-8
          p Se ha usado una definición a modo referencia para la columna “numero” de la tabla 'telefonos', señalando que es una clave foránea oportuna a la columna 'id_persona' de la tabla 'persona' a través de la columna persona_id. No obstante, aunque la sintaxis se evidencia.
          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.d-none.d-lg-flex
              img(src="@/assets/curso/temas/img05.png")
            .col
              p.mb-0 La expresión DELETE CASCADE , hace que, si se borra una fila de la tabla persona que tiene relacionados registros telefónicos a través de la columna persona_id en la tabla telefonos, estos registros (localizados en la tabla telefonos) se borren si se borra el de la tabla persona, a este tipo de condiciones se le llama restricción de integridad referencial.
          .cajon.color-acento-botones.p-4(data-aos="fade-left")
            p.mb-0 De igual forma UPDATE CASCADE, hace que, si el id_persona en una fila de la tabla persona es actualizado a otro valor y existen referencias en la columna persona_id de la tabla telefonos con el valor inicial, al cambar el valor en el registro id_persona, cambien también el valor en los registros en la columna persona_id de la tabla telefonos. A este tipo de condiciones también se le llama restricción de integridad referencial. Y ejecutándola en la consola el resultado sería: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">personas</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id_persona</span> INT AUTO_INCREMENT PRIMARY KEY,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombres</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">40</span><span style="color: #F4A338">)</span>NOT NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">fecha</span> DATE<span style="color: #F4A338">)</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected <span style="color: #F4A338">(</span>0.13 sec<span style="color: #F4A338">)</span>
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">telefonos</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">persona_id</span> INT NOT NULL REFERENCES personas <span style="color: #F4A338">(</span><span style="color: #D15B98">id</span><span style="color: #F4A338">)</span> ON DELETE CASCADE ON UPDATE CASCADE,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">numero</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span> PRIMARY KEY,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">tipo</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">10</span><span style="color: #F4A338">))</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.13 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> 

    p Miremos otra variante de la misma sintaxis definiendo explícitamente que se usará el motor InnoDB para que las reglas de restricción de integridad apliquen:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 CREATE TABLE <span style="color: #fff">personas2</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fff">id_persona</span> INT AUTO_INCREMENT PRIMARY KEY,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fff">nombres</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">45</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fff">fecha</span> DATE
        p.text-AC.mb-0 <span style="color: #F4A338">)</span>ENGINE=<span style="color: #fff">InnoDB</span>;
      
    p Y también para la tabla <span style="background-color: #FDEDBC; padding: 3px">telefonos2:</span>

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 CREATE TABLE <span style="color: #fff">telefonos2</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #fff">numero</span> VARCHAR <span style="color: #D15B98">20</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #fff">persona_id</span> INT NOT NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; KEY <span style="color: #F4A338">(</span><span style="color: #fff">numero</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; FOREIGN KEY <span style="color: #F4A338">(</span><span style="color: #fff">persona_id</span><span style="color: #F4A338">)</span> REFERENCES <span style="color: #fff">personas2</span> <span style="color: #F4A338">(</span><span style="color: #fff">id_persona</span><span style="color: #F4A338">)</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; ON DELETE CASCADE ON UPDATE CASCADE
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #F4A338">)</span> ENGINE=<span style="color: #fff">InnoDB</span>; 

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img12.png")
      .col-lg-8
        p Es necesario que la columna que posee una definición de clave foránea esté indexada #[b KEY(numero)]. Sin embargo, esto no debe de generar preocupación, ya que si no se hace de forma clara, MySQL lo hará de forma implícita.
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/img05.png")
          .col
            p.mb-0 Dicha forma precisa una clave foránea en la columna #[b persona_id], La cual hace referencia a la columna #[b id_persona] de la tabla #[b personas2 (FOREIGN KEY (persona_id) REFERENCES personas2)]. La definición contiene las tareas a efectuar cuando se excluya una fila en la tabla #[b personas2].
        .row.justify-content-center.mb-5
          .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="flip-up")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.BGR02C.p-4
                .h4.ms-lg-4.ms-5 ON DELETE &lt;opcion&gt;
                p.mb-0.ms-lg-4.ms-5 Define las acciones que deben de realizar en la tabla actual, cuando se elimine una fila en la tabla referenciada.
          .col-lg-6.col-10(data-aos="flip-up")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.BGR02D.p-4
                .h4.ms-lg-4.ms-5 ON UPDATE &lt;opcion&gt;
                p.mb-0.ms-lg-4.ms-5 Es semejante, define las acciones que deben de realizar en la tabla actual, cuando se modifique o actualice la columna de una fila en la tabla referenciada.

    p Hay cinco opciones distintas. A continuación, lo que hace cada una de ellas: 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="RESTRICT") Esta opción imposibilita borrar o editar filas en la tabla referenciada si hay filas con el mismo valor de clave foránea (MySQL 8.0 Reference Manual, 2021).
          p(numero="2" titulo="CASCADE") Borrar o modificar una clave en una fila en la tabla referenciada con un valor fijo de clave, conlleva borrar las filas con el mismo valor de clave foránea o cambiar los valores de esas claves foráneas (MySQL 8.0 Reference Manual, 2021).
          p(numero="3" titulo="SET NULL") Borrar o editar una clave en una fila en la tabla referenciada con un valor fijo de clave, involucra determinar el valor NULL a las claves foráneas con el mismo valor. (MySQL 8.0 Reference Manual, 2021).
          p(numero="4" titulo="NO ACTION") Las claves foráneas no se alteran, ni se eliminan filas en la tabla que las contiene.
          p(numero="5" titulo="SET DEFAULT") Borrar o alterar una clave en una fila en la tabla referenciada con un valor explícito involucra asignar el valor por defecto a las claves foráneas con el mismo valor. (MySQL 8.0 Reference Manual, 2021).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema2/img13.svg")
    
    .h4 Ejemplo:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-8.BG01.p-4.mb-4
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">personas3</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id_persona</span> INT AUTO_INCREMENT PRIMARY KEY,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombres</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">45</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">fecha</span> DATE <span style="color: #F4A338">)</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span>  ENGINE=<span style="color: #fff">InnoDB</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.16 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span>
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">telefonos3</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">numero</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">20</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">persona_id</span> INT NOT NULL,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> KEY <span style="color: #F4A338">(</span><span style="color: #fff">numero</span><span style="color: #F4A338">)</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> FOREIGN KEY <span style="color: #F4A338">(</span><span style="color: #fff">persona_id</span><span style="color: #F4A338">)</span> REFERENCES <span style="color: #fff">personas3</span> <span style="color: #F4A338">(</span><span style="color: #fff">id_persona</span><span style="color: #F4A338">)</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> ON DELETE RESTRICT ON UPDATE CASCADE
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">)</span>ENGINE=<span style="color: #fff">InnoDB</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.19 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> 
                
    .BGM02.px-md-5.px-4.py-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema2/img14.svg")
        .col-lg-8
          p Si se pretende borrar una fila de #[b personas3] con cierto valor de #[b id_persona], se provocará un error si existen filas en la tabla #[b telefonos3] en la columna #[b persona_id] con mismo valor. La fila de #[b personas3] no será eliminada, a menos que previamente se eliminen las filas que tienen el mismo valor de clave foránea en la tabla #[b e], lo anterior debió que se ha definido restricción #[b DELETE RESTRICT].
          p Si se modifica el valor de la columna '#[b id_persona]' en la tabla '#[b personas3]', se modificarán los valores de la columna '#[b persona_id]' para conservar la analogía.
          p Mirar los datos de las tablas personas3 y telefonos3.

    .row.justify-content-center.mb-4
      .col-lg-5.mb-lg-0.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-botones
          h5 Datos de la tabla personas3
        .BG01.hg01.p-4.mb-4
          p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT * FROM <span style="color: #fff">personas3</span>;
          .row.mb-4
            .col-xl-11.col-lg-12.col-md-8.col-sm-10
              img(src='@/assets/curso/tema2/img15.svg')
          p.text-AB.mb-0 4 rows in set (0.000 sec)
          p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          h5 Datos de la tabla telefonos3
        .BG01.hg01.p-4.mb-4
          p.text-AC.mb-4 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> SELECT * FROM <span style="color: #fff">telefonos3</span>;
          .row.mb-4
            .col-xl-8.col-lg-10.col-md-6.col-sm-7.col-10
              img(src='@/assets/curso/tema2/img16.svg')
          p.text-AB.mb-0 7 rows in set (0.000 sec)
          p.text-AC.mb-0 <span style="color: #F4A338">MariaDB [prueba]</span><span style="color: #4ADBD1">&gt;</span> 

    p Si se intenta borrar la fila correspondiente a "Fulanito" se provocará un error, debido a que hay dos filas en '#[b telefonos3]' con el valor 1 en la columna '#[b persona_id]'.
    p Sí será posible borrar la fila correspondiente a "Menganito", debido a que no existe fila alguna en la tabla '#[b telefonos3]' con el valor 2 en la columna '#[b persona_id]'.
    p Si alteramos el valor de '#[b persona_id]' en la fila conveniente a "Tulanito", por el valor 3, por ejemplo, se determinará el valor 3 a la columna '#[b persona_id]' de las filas 3ª y 6ª de la tabla 'telefonos3':

    separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Mostrar y eliminar tablas y bases de datos
    
    p De vez en cuando es preciso eliminar una tabla, ya sea porque es más fácil crearla de nuevo que alterarla, o porque ya es prescindible.
    p Para borrar una tabla se usará la sentencia <span style="background-color: #FDEDBC; padding: 3px">DROP TABLE.</span>

    .row.justify-content-center.mb-4
      .col-lg-8.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC.mb-0 DROP TABLE <span style="color: #F4A338">[</span><span style="color: #D15B98">IF EXISTS</span><span style="color: #F4A338">]</span> <span style="color: #fff">tbl_name</span> <span style="color: #F4A338">[</span>, <span style="color: #fff">tbl_name</span><span style="color: #F4A338">]</span> ...
      .col-lg-8.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DROP TABLE <span style="color: #fff">telefonos2</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.75 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> 
      .col-12
        p.mb-0 Se puede agregar las palabras <span style="background-color: #FDEDBC; padding: 3px">IF EXISTS</span> para impedir errores si la tabla a eliminar no existe.
      .col-lg-8.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DROP TABLE <span style="color: #fff">telefonos5</span>;
        p.text-AB.mb-0 ERROR 1051 (42S02): Unknown table 'telefonos5'
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DROP TABLE IF EXISTS <span style="color: #fff">telefonos5</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected, 1 warning (0.00 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span>
      .col-12
        p.mb-0 De manera similar, se puede borrar bases de datos enteras, utilizando la sentencia <span style="background-color: #FDEDBC; padding: 3px">DROP DATABASE.</span>  La sintaxis asimismo es muy sencilla, a continuación, se creará una base de datos, se creará una tabla y se borrará la base de datos.
      .col-lg-8.BG01.p-4.mb-4(data-aos="flip-up")
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE DATABASE <span style="color: #fff">borrame</span>;
        p.text-AB.mb-0 Query OK, 1 row affected (0.00 sec)
        p.text-AC.mb-4 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> USE <span style="color: #fff">borrame</span>;
        p.text-AB.mb-0 Database changed
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> CREATE TABLE <span style="color: #fff">borrame</span> <span style="color: #F4A338">(</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">id</span> INT,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #fff">nombre</span> VARCHAR<span style="color: #F4A338">(</span><span style="color: #D15B98">40</span><span style="color: #F4A338">)</span>
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #4ADBD1">-&gt;</span> <span style="color: #F4A338">)</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected (0.19 sec)
        p.text-AC.mb-4 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> SHOW DATABASES;
        .row.mb-4
          .col-xxl-4.col-md-5.col-sm-6.col-7
            img(src='@/assets/curso/tema2/img17.svg')
        p.text-AB.mb-0 4 rows in set (0.00 sec)
        p.text-AC.mb-4 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> SHOW TABLES;
        .row.mb-4
          .col-xxl-4.col-md-5.col-sm-6.col-7
            img(src='@/assets/curso/tema2/img18.svg')
        p.text-AB.mb-4 1 row in set (0.00 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DROP DATABASE IF EXISTS <span style="color: #fff">borrame</span>;
        p.text-AB.mb-4 Query OK, 1 row affected (0.13 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> DROP DATABASE IF EXISTS <span style="color: #fff">borrame</span>;
        p.text-AB.mb-0 Query OK, 0 rows affected, 1 warning (0.12 sec)
        p.text-AC.mb-0 <span style="color: #F4A338">mysql</span><span style="color: #4ADBD1">&gt;</span> 
      .col-lg-8.BG02.p-4.mb-4
        p.mb-0 Nota. MySQL 8.0 Reference Manual (2021).
      
    .BGR06.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/img06.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.text-white.mb-2 Ejercicios prácticos  
              p.text-white Se propone que se revise y estudie dos ejercicios de repaso, que están en el documento adjunto “Ejercicios Prácticos”, en ellos están completamente desarrollados dos ejercicios un poco más extensos, pero que recogen la temática hasta ahora vista, con la diferencia que los ejercicios propuestos son más próximos a problemas de la vida real. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Ejercicios_Practicos.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
