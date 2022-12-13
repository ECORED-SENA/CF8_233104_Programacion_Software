<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Soluciones de almacenamiento en la nube
    
    .bloque-texto-g.color-acento-contenido.bloque-40.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img01.svg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El almacenamiento en la nube es el servicio que permite el almacenamiento de datos que se transfieren a través de internet u otras redes de sistemas de almacenamiento externos. En el momento existen muchos sistemas de almacenamiento en la nube, tanto a nivel personal como empresarial, que guardan o mantienen copias de seguridad, correo, fotos, videos y demás archivos de uso personal, y permite a las empresas utilizar ese almacenamiento con copias de seguridad remotas donde las compañías transfieren y almacenan de forma segura los datos y los comparte.

    p Los sistemas de almacenamiento son escalables y adaptables de acuerdo a las mismas necesidades de almacenamiento de datos de personas u organizaciones. De igual forma se accede a los datos desde cualquier lugar y de aplicaciones independientes con aplicaciones muy eficientes para manipular desde cualquier dispositivo. Existen tres modelos empresariales principales a elegir:

    .BGIMG03.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-lg-0.mb-4
            .BGNumber01.p-2
              .h4.ms-3 Nube pública
              p.ms-3.mb-0 Tipología de nube que ofrece servicios de forma pública a través de internet. El proveedor es dueño de su infraestructura y gestiona y ofrece los servicios, como por ejemplo Amazon, Microsoft y Google.
          .col-lg-4.col-10
            img(src="@/assets/curso/tema7/img02.png")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-10.mb-lg-0.mb-4
            img(src="@/assets/curso/tema7/img03.png")
          .col-lg-6
            .BGNumber02.p-2
              .h4.mt-4.ms-3 Nube privada
              p.ms-3 En esta nube se ofrecen los servicios de nube privada, orientados exclusivamente a una empresa u organización a sus trabajadores.
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-lg-0.mb-4
            .BGNumber03.p-2
              .h4.ms-3 Nube híbrida
              p.ms-3.mb-0 Esta tipología hace referencia a los servicios en la nube mixtos, combinando nubes privadas, públicas y demás. Todas actúan como una sola entidad sirviendo a las necesidades que se encomiendan para cada caso.
          .col-lg-4.col-10
            img(src="@/assets/curso/tema7/img04.png")
    
    .h4 <span style="background-color: #4ADBD1; padding: 5px">Bases de datos relacionales y no relacionales</span>
    
    .BGM02.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema7/img05.png")
        .col-lg-8
          p Las bases de datos relacionales se fundamentan en la organización de la información en pequeñas partes integradas mediante identificadores; y las bases de datos no relacionales, no tienen identificador que sirva para relacionar más de dos conjuntos de datos.
          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.d-none.d-lg-flex
              img(src="@/assets/curso/temas/img05.png")
            .col
              p.mb-0 Al referirse con el término NoSQL no se hace referencia una base de datos y ni a un tipo de base de datos, sino que es la definición de un conjunto de tipos de bases de datos que son diferentes a las bases de datos convencionales (relacionales).

    p La principal diferencia entre las bases de datos de NoSQL y las bases de datos relacionales tradicionales, es de que en las NoSQL emplean una forma de almacenamiento no estructurado o de estructura diferentes a tablas. Simplificando la estructura de almacenamiento, las NoSQL pueden concentrarse en procesar grandes volúmenes de datos. 

    .row.justify-content-center.mb-5
      .col-lg-8.p-4.order-lg-1.order-2
        .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-right")
          p.mb-0 La siguiente tabla ofrece una comparación de las funciones de NoSQL comparada con las bases de datos relacionales.
        .tabla-a.color-secundario(data-aos="zoom-in")
          table
            caption Fuente: (Pandorafms, s.f.)
            thead
              tr
                th(style="background-color: #5573C6;").text-white Característica
                th(style="background-color: #5573C6;").text-white Base de Datos NoSQL
                th(style="background-color: #5573C6;").text-white Bases de datos Relacionales
            tbody
              tr
                td(style="background-color: #E8E8E8;") Desempeño
                td(style="background-color: #E8E8E8;") Alto
                td(style="background-color: #E8E8E8;") Bajo
              tr
                td(style="background-color: #FFF;") Fiabilidad
                td(style="background-color: #FFF;") Pobre
                td(style="background-color: #FFF;") Buena
              tr
                td(style="background-color: #E8E8E8;") Disponibilidad
                td(style="background-color: #E8E8E8;") Buena
                td(style="background-color: #E8E8E8;") Buena
              tr
                td(style="background-color: #FFF;") Consistencia
                td(style="background-color: #FFF;") Pobre
                td(style="background-color: #FFF;") Buena
              tr
                td(style="background-color: #E8E8E8;") Almacenamiento de Datos
                td(style="background-color: #E8E8E8;") Optimizado para muchos datos
                td(style="background-color: #E8E8E8;") Mediano o Grande
              tr
                td(style="background-color: #FFF;") Estabilidad
                td(style="background-color: #FFF;") Alta
                td(style="background-color: #FFF;") Alta (pero más costosa)
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema7/img06.png")

    .h4.mb-5 <span style="background-color: #4ADBD1; padding: 5px">Bases de datos orientadas a documentos</span>  

    .row.justify-content-center.mb-4
      .col-lg-2.col-4.BG09.p-4.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-7
            img(src="@/assets/curso/tema7/img07.svg")
      .col-lg-10.BG08.p-4(data-aos="fade-left")
        p.mb-0 Los SGDB con estas características son denominadas como bases de datos documentales o base de datos documental, funcionan en el marco de la definición de un "Documento", la mayoría de estos SGDB coinciden en cómo se almacena la información, empleando un formato estándar. Los formatos estándar más comunes o populares son: JSON, BSON y XML. Se podría considerar este tipo como el más utilizado en la actualidad.
      
    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR02A.p-4
            .h4.ms-5 Formato XML
            p.mb-0.ms-5 XML es un metalenguaje que permite definir lenguajes de marcas, mediante la combinación de una serie de entidades: elementos, atributos, referencias de entidad, comentarios, instrucciones de proceso, secciones CDATA y DTDs mediante un conjunto de reglas sintácticas.
      .col-lg-6.col-10(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR02B.p-4
            .h4.ms-5 Formato JSON
            p.mb-0.ms-5 JSON (#[em JavaScript Object Notation]) es un formato ligero de intercambio de datos y es de fácil lectura y escritura para los usuarios. JSON es fácil de analizar y generar por parte de las máquinas. JSON se basa en un subconjunto del lenguaje de programación JavaScript.

    .row.justify-content-center.mb-4
      .col-lg-10
        .tabla-a.color-secundario(data-aos="zoom-in")
          table
            caption Fuente: (Pandorafms, s.f.)
            thead
              tr
                th(style="background-color: #5573C6; width: 40%")
                th(style="background-color: #5573C6; width: 60%")
            tbody
              tr
                td(style="background-color: #E8E8E8") Título componente
                td(style="background-color: #E8E8E8") Pestañas verticales
              tr
                td(style="background-color: #FFF") Título
                td(style="background-color: #FFF") Formato JSON
              tr
                td(style="background-color: #E8E8E8") Texto descriptivo
                td(style="background-color: #E8E8E8") JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos. JSON es de fácil lectura y escritura para los usuarios. JSON es fácil de analizar y generar por parte de las máquinas. JSON se basa en un subconjunto del lenguaje de programación JavaScript.
              tr
                th(style="background-color: #5573C6").text-white Título (máx 6 palabras)
                th(style="background-color: #5573C6").text-white Texto
              tr
                td(style="background-color: #E8E8E8") Cadenas de texto
                td(style="background-color: #E8E8E8") Al ser una secuencia de ninguno o más caracteres se ponen entre doble comilla y en lenguajes JavaScript. Ejemplo: “Hola, mundo”.
              tr
                td(style="background-color: #FFF") Números
                td(style="background-color: #FFF") Se permiten números negativos y positivos que también pueden contener parte no entera separada por puntos. Ejemplo: 654.321.
              tr
                td(style="background-color: #E8E8E8") Arreglos
                td(style="background-color: #E8E8E8") Representa una lista ninguno o más valores los cuales pueden ser todos del mismo o diferente tipo. Los valores separados por comas y el vector entre llaves ([]). Ejemplo [“Luis”,”Carlos”,”Julian”,99].
              tr
                td(style="background-color: #FFF") Booleanos
                td(style="background-color: #FFF") Representan valores booleanos y pueden tener dos valores: true y false. Valores nulos: representan el valor nulo (null).
              tr
                td(style="background-color: #E8E8E8") Objetos
                td(style="background-color: #E8E8E8") Son colecciones no ordenadas de pares de la forma &lt;nombre&gt;:&lt;valor&gt; donde el nombre debe ser separado por comas y puestos entre corchetes ({}).

    .bloque-texto-g.color-acento-contenido.bloque-40.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img08.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las Bases de datos No relacionales documentales su concepto de guardar la información con el modelo clave: valor, por eso los documentos más comunes son en formato JSON y la diferencia radica en que un documento se almacena en una clave; esta definición puede parecer abstracta, pero se explica mejor con el siguiente ejemplo que muestra una representación de los datos de una persona en un documento.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.BG01.p-4
        p.text-AC.mb-0 {
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">nombres</span>": "<span style="color: #D15B98">JUAN CARLOS</span>",
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">apellidos</span>": "<span style="color: #D15B98">MARTINEZ</span>",
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">fecha_nacimiento</span>": "<span style="color: #D15B98">1995-05-15</span>",
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">edad</span>" :  <span style="color: #D15B98">65</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">saldo</span>": <span style="color: #D15B98">9876.134</span>,
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">hobbies</span>": ["<span style="color: #D15B98">música</span>","<span style="color: #D15B98">futbol</span>","<span style="color: #D15B98">leer</span>"],
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">correo</span>":"<span style="color: #D15B98">juancho@nerss.et</span>",
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">pedidos</span>" : [],
        p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">acreedores</span>" : <span style="color: #D15B98">null</span>
        p.text-AC.mb-0 }
  
    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .BG11.p-2.mb-2
          .h4.text-center.mb-0 Si representación en XML
        .BG01.hg05.p-4
          p.text-AC.mb-0 &lt;menu <span style="color: #F4A338">id</span>="<span style="color: #fff">file</span>" <span style="color: #F4A338">value</span>="<span style="color: #fff">Archivo</span>"&gt;
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&lt;popup&gt;
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;menuitem <span style="color: #F4A338">value</span>="<span style="color: #fff">Nuevo</span>" <span style="color: #F4A338">onclick</span>="<span style="color: #fff">CreateNewDoc()</span>"/&gt;
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;menuitem <span style="color: #F4A338">value</span>="<span style="color: #fff">Abrir</span>" <span style="color: #F4A338">onclick</span>="<span style="color: #fff">OpenDoc()</span>" /&gt;
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;menuitem <span style="color: #F4A338">value</span>="<span style="color: #fff">Cerrar</span>" <span style="color: #F4A338">onclick</span>="<span style="color: #fff">CloseDoc()</span>" /&gt;
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;menuitem <span style="color: #F4A338">value</span>="<span style="color: #fff">Guardar</span>" <span style="color: #F4A338">onclick</span>="<span style="color: #fff">SaveDoc()</span>" /&gt;
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&lt;/popup&gt;
          p.text-AC.mb-0 &lt;/menu&gt;
      .col-lg-5.col-10(data-aos="fade-left")
        .BG12.p-2.mb-2
          .h4.text-center.text-white.mb-0 Su equivalente en JSON
        .BG01.hg05.p-4
          p.mb-0 <span style="color: #D15B98">{</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">menu</span>": <span style="color: #D15B98">{</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "<span style="color: #fff">id</span>": "<span style="color: #fff">file</span>",
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "<span style="color: #fff">value</span>": "<span style="color: #fff">Archivo</span>",
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "<span style="color: #fff">popup</span>": <span style="color: #D15B98">{</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">menuitems</span>": <span style="color: #F4A338">[</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">{</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">value</span>": "<span style="color: #fff">Nuevo</span>",
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">onclick</span>": "<span style="color: #fff">CreateNewDoc()</span>"
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">}</span>,
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">{</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">value</span>": "<span style="color: #fff">Abrir</span>",
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">onclick</span>": "<span style="color: #fff">OpenDoc()</span>"
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">}</span>,
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">{</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">value</span>": "<span style="color: #fff">Cerrar</span>",
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">onclick</span>": "<span style="color: #fff">CloseDoc()</span>"
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">}</span>,
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">{</span>
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">value</span>": "<span style="color: #fff">Guardar</span>",
          p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"<span style="color: #fff">onclick</span>": "<span style="color: #fff">SaveDoc()</span>"
          p.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">}</span>
          p.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #F4A338">]</span>
          p.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color: #D15B98">}</span>
          p.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #D15B98">}</span>
          p.mb-0 <span style="color: #D15B98">}</span>
    
    .cajon.color-acento-botones.p-4.mb-4(data-aos="fade-right")
      p.mb-0 La representación que JSON mostrada antes, es una representación en formato texto, pero también se puede representar en formato binario (uno y ceros), a esta otra representación equivalente en binario se llama BSON; de esta no se presenta un ejemplo, porque es solo una cadena de unos y ceros sin nada que la caracterice demás, excepto que al convertirla en cadenas de texto se presenta como se observa antes.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .row.justify-content-center
          .col-11
            img(src="@/assets/curso/tema7/img09.svg")
      .col-lg-8
        .h4.mb-5 <span style="background-color: #4ADBD1; padding: 5px">Procesamiento de gráficos en la nube</span> 
        p.mb-5 La unidad de procesamiento de gráficos (GPU, por sus siglas en inglés), hace referencia al circuito electrónico especializado en alterar y manipular la memoria rápidamente para acelerar la creación de imágenes o gráficos. Ofrecen la eficiencia de manipular imágenes y gráficos de computadora debido a la estructura paralela. Está incrustada en la placa base o en la tarjeta de video de una PC o CPU.
        .h4.mb-5 <span style="background-color: #4ADBD1; padding: 5px">Beneficios de las GPU en la nube</span>
        p A continuación, se presentan los beneficios de los gráficos en la nube:
    
    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema7/img10.svg")

    .BGM02.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema7/img11.png")
        .col-lg-8
          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.d-none.d-lg-flex
              img(src="@/assets/curso/temas/img05.png")
            .col
              p.mb-0 Las GPU son las instancias de computadora con la fuerte aceleración de hardware útil en la cual se ejecutan aplicaciones para manejar cargas de trabajo masivas de inteligencia artificial y aprendizaje profundo en la nube. Las GPU populares son NVIDIA, AMD, Radeon, GeForce, etc., y se utilizan en:
          ul.lista-ul--color.lista-ol--separador(data-aos="fade-left")
            li
              i.fas.fa-check-circle(style="color: #4ADBD1") 
              | Teléfonos móviles.
            li
              i.fas.fa-check-circle(style="color: #4ADBD1") 
              | Consolas de juegos.
            li
              i.fas.fa-check-circle(style="color: #4ADBD1") 
              | Estaciones de trabajo.
            li
              i.fas.fa-check-circle(style="color: #4ADBD1") 
              | Sistemas embebidos.
            li
              i.fas.fa-check-circle(style="color: #4ADBD1") 
              | Computadores personales.
          p.mb-0 Las aplicaciones GPU en la nube más utilizadas son las siguientes:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-7
        img(src="@/assets/curso/tema7/img12.svg")
    
    .h4.mb-5 <span style="background-color: #4ADBD1; padding: 5px">Base de datos clave-valor</span>

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema7/img13.svg")
      .col-lg-8
        p Es una modalidad de base de datos #[em Key-value database] o #[em store] en inglés, se basa en una tabla de dos columnas. En una columna se guarda valor y en la otra columna representa una característica identificativa única. Puede tener un valor sencillo como una cadena de caracteres, un número entero u objetos complejos, un documento para una base de datos de documentos, archivos o tuplas (conjunto de valores).
        .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
          .col-auto.d-none.d-lg-flex
            img(src="@/assets/curso/temas/img09.png")
          .col
            p.mb-0 Los datos de la base pueden llegar a ser objetos distintos en una misma columna y siempre las claves determinan un esquema, aunque no es indispensable. 
        .cajon.color-acento-botones.p-4
          p En las bases de datos clave-valor se emplean bases de datos #[em in-memory], en memoria RAM, y como soluciones #[em on disk], en disco duro.
    
    .h4 <span style="background-color: #4ADBD1; padding: 5px">Ventajas y aplicaciones en bases de datos clave-valor</span>

    .row.justify-content-center.mb-5
      .col-lg-8.p-4.order-lg-1.order-2
        ul.lista-ul--color.lista-ol--separador
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Son muy efectivas en las consultas y fáciles de escalar por eso se deriva una sencilla estructura de modelo. 
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | El almacenamiento clase valor no exige ningún esquema fijo.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Se pueden realizar modificaciones en la base de datos sobre la marcha.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Se pueden añadir nuevos campos mientras se realizan acciones en otras entradas.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Ofrecen gran velocidad de búsqueda por la conexión entre la clave y el valor.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Al recuperar la información se puede consultar a través de una clave específica.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Se pueden emplear métodos de consulta complejos.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | La búsqueda o consulta solo se puede hacer a través de la clave, por lo que no se pueden utilizar indicaciones u otros métodos de búsqueda.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema7/img14.svg")
    
    .h4.mb-5 <span style="background-color: #4ADBD1; padding: 5px">Bases de datos clave-valor conocidas</span>
    p En la actualidad existen distintos sistemas de gestión de base de datos SGBD, que se basan en claves y valores, a saber:
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema7/img15.svg")

</template>

<script>
export default {
  name: 'Tema7',
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
