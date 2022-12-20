<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Procedimientos almacenados
    
    .BGM02.px-md-5.px-4.py-4.mb-5
      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src="@/assets/curso/tema6/img01.svg")
        .col-lg-8
          p El procedimiento almacenado en bases de datos es el grupo de una o varias instrucciones #[em Transact-SQL] y es una referencia al método #[em Common Runtime Language] (CLR).
          .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.d-none.d-lg-flex
              img(src="@/assets/curso/temas/img04.png")
            .col
              p.mb-0 Dichos procedimientos se asimilan a las construcciones de otros lenguajes de programación por los siguientes puntos:
          .row.justify-content-center.mb-4
            .col-md-4.col-8.mb-md-0.mb-4(data-aos="flip-up")
              .BGR10S.hg03.p-3
                figure.mb-3
                  img(src="@/assets/curso/tema6/img02.png")
                p.text-center.mb-0 Acepta parámetros de entrada y devuelve varios valores como parámetros de salida al programa que hace la llamada.
            .col-md-4.col-8.mb-md-0.mb-4(data-aos="flip-up")
              .BGR10S.hg03.p-3
                figure.mb-3
                  img(src="@/assets/curso/tema6/img03.png")
                p.text-center.mb-0 Contiene las instrucciones de la programación que realiza las sistematizaciones en la base de datos.
            .col-md-4.col-8.mb-md-0.mb-4(data-aos="flip-up")
              .BGR10S.hg03.p-3
                figure.mb-3
                  img(src="@/assets/curso/tema6/img04.png")
                p.text-center.mb-0 Devuelve el valor de estado al programa, indicando si la operación se realizó de manera adecuada y verifica los errores.

    .h4 <span style="background-color: #4ADBD1; padding: 5px">Ventajas</span>
    p A continuación, se presentan las ventajas de los procedimientos almacenados, en las cuales se destaca cómo se pueden invocar sentencias de otros lenguajes de programación:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-9
        img(src="@/assets/curso/tema6/img05.svg")
      
    .h4 <span style="background-color: #4ADBD1; padding: 5px">Tipos de procedimientos almacenados</span>
    p Los tipos de procedimientos almacenados son los siguientes:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        img(src="@/assets/curso/tema6/img06.svg")
      
    .h4 <span style="background-color: #4ADBD1; padding: 5px">Creación, parámetros y ejecución de un procedimiento</span>
    p.mb-5 Los procedimientos almacenados permiten enviar y recibir información, y se utilizan definiendo parámetros de entrada y salida.

    .row.justify-content-center.mb-5
      .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR02A.hg04.p-4
            .h4.ms-5 Se requieren los siguientes permisos
            ul.lista-ul--color.ms-5
              li
                i.fas.fa-check-circle(style="color: #4ADBD1") 
                | CREATE PROCEDURE en la base de datos.
              li
                i.fas.fa-check-circle(style="color: #4ADBD1") 
                | ALTER en el esquema en que se crea el procedimiento.
      .col-lg-6.col-10(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.BGR02B.hg04.p-4
            .h4.ms-5 Se puede usar
            ul.lista-ul--color.ms-5
              li
                i.fas.fa-check-circle(style="color: #F4A338") 
                | SLQ Server Management Studio.
    
    .h4 <span style="background-color: #4ADBD1; padding: 5px">Para crearlo en el explorador de objetos</span>

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema6/img07.png")
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul--color.lista-ol--separador.ms-5
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Conectarse a una instancia del motor de base de datos.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Expandir la base de datos, expandir la base de datos AdventureWorks2012, luego expandir Programación.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Dar clic en botón derecho en Procedimientos almacenados y luego clic en Nuevo procedimiento almacenado.
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Ahora, en el menú Consulta, dar clic en Especificar valores para parámetros de plantilla
          li
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | En el cuadro de diálogo especificar los siguientes parámetros:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-xl-6.col-lg-8
        .tabla-a.color-acento-botones
          table
            thead(style="border-color: transparent")
              tr
                th(style="background-color: #5573C6; width: 40%")
                th(style="background-color: #5573C6; width: 60%")
            tbody
              tr
                td(style="background-color: #E8E8E8;") Parámetro
                td(style="background-color: #E8E8E8;") Value
              tr
                td(style="background-color: #FFF;") Autor
                td(style="background-color: #FFF;") Su nombre
              tr
                td(style="background-color: #E8E8E8;") Create Date
                td(style="background-color: #E8E8E8;") La fecha de hoy
              tr
                td(style="background-color: #FFF;") Descripción
                td(style="background-color: #FFF;") Devuelve datos de empleado
                tr
                td(style="background-color: #E8E8E8;") Procedure_name
                td(style="background-color: #E8E8E8;") HumanResources.uspGetEmployeesTest
              tr
                td(style="background-color: #FFF;") @Param1
                td(style="background-color: #FFF;") @LastName
              tr
                td(style="background-color: #E8E8E8;") @Datatype_For_Param1
                td(style="background-color: #E8E8E8;") Nvarchar(50)
              tr
                td(style="background-color: #FFF;") Default_Value_For_Param1
                td(style="background-color: #FFF;") NULL
              tr
                td(style="background-color: #E8E8E8;") @Param2
                td(style="background-color: #E8E8E8;") @FirstName
              tr
                td(style="background-color: #FFF;") @Datatype_For_Param2
                td(style="background-color: #FFF;") nvarchar(50)
              tr
                td(style="background-color: #E8E8E8;") Default_Value_For_Param2
                td(style="background-color: #E8E8E8;") NULL
    
    .row.justify-content-center
      .col-lg-8.p-4.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul--color.lista-ol--separador(style="padding-bottom: 4px")
          li(style="margin-bottom: 4px")
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Dar clic en OK.
          li(style="margin-bottom: 4px")
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | En Editor de consultas, reemplazar la instrucción SELECT por lo siguiente:
        .row.justify-content-center.mb-4(data-aos="flip-up")
          .col-lg-8.BG01.p-4
            p.text-AC.mb-0 SELECT <span style="color: #fff">FirstName</span>, <span style="color: #fff">LastName</span>, <span style="color: #fff">Department</span>  
            p.text-AC.mb-0 FROM <span style="color: #fff">HumanResources.vEmployeeDepartmentHistory</span>  
            p.text-AC.mb-0 WHERE <span style="color: #fff">FirstName</span> = <span style="color: #D15B98">@</span><span style="color: #fff">FirstName</span> AND <span style="color: #fff">LastName</span> = <span style="color: #D15B98">@</span><span style="color: #fff">LastName</span>  
            p.text-AC.mb-0 &nbsp;&nbsp;&nbsp;&nbsp;AND <span style="color: #fff">EndDate</span> IS <span style="color: #D15B98">NULL</span>;
        
        ul.lista-ul--color.lista-ol--separador(style="padding-bottom: 4px")
          li(style="margin-bottom: 4px")
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | Para probar la sintaxis, ir al menú Consulta, clic en Analizar. Si imprime error, comparar de nuevo las instrucciones anteriores.
          li(style="margin-bottom: 4px")
            i.fas.fa-check-circle(style="color: #4ADBD1") 
            | En el menú consulta, dar clic en Ejecutar para crear el procedimiento. El procedimiento es creado como objeto de la base de datos.
        hr(style="margin: 0")
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema6/img08.png")

    ul.lista-ul--color.lista-ol--separador(style="padding-bottom: 4px" data-aos="fade-right")
      li(style="margin-bottom: 4px")
        i.fas.fa-check-circle(style="color: #4ADBD1") 
        | Para visualizar el procedimiento que aparece en explorador de objetos, hacer clic en el botón derecho en Nombre de procedimiento almacenado, seleccionar Actualizar.
      li(style="margin-bottom: 4px")
        i.fas.fa-check-circle(style="color: #4ADBD1") 
        | Para lograr ejecutar el procedimiento, en el explorador de objetos, dar clic en el botón derecho en Nombre del procedimiento almacenado HumanResources.uspGetEmployeesTest y seleccionar Ejecutar procedimiento almacenado.
      li(style="margin-bottom: 4px")
        i.fas.fa-check-circle(style="color: #4ADBD1") 
        | 	En la ventana Ejecutar procedimiento, debe escribir Margheim como valor de parámetro @LastName y Diane como valor del parámetro @FirstName.

</template>

<script>
export default {
  name: 'Tema6',
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
