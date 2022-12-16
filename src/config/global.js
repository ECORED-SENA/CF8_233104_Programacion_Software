export default {
  global: {
    componenteFormativo:
      'Implementación y manipulación de bases de datos relacionales',
    descripcionCurso:
      'Una vez diseñadas, modeladas e implementadas las bases de datos, es preciso darles el uso adecuado según el lenguaje estándar y las herramientas necesarias en el proceso de desarrollo. Este componente centra sus esfuerzos en presentar las técnicas para la manipulación de una base de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Interface de línea de comandos de MySQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Aplicación Cliente MySQL',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Prueba de consultas básicas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'SQL - Estándar Query Languaje',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'SQL para la creación y eliminación de bases de datos - DDL',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'SQL para la creación y eliminación de tablas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Claves Foráneas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Mostrar y eliminar tablas y bases de datos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'SQL para manipulación de datos - DML',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Inserción de registros',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Edición de registros',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Borrado de registros',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'SQL para consulta de datos - DML',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Funciones en MySQL',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Operadores',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Ordenar resultados',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Listar y limitar resultados',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Agrupar filas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Consulta multitablas - DML',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Combinación interna (INNER JOIN)',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Combinación externa',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Procedimientos almacenados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Soluciones de almacenamiento en la nube',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'CONSULTAS en MYSQL',
      referencia:
        'Como Hacer CONSULTAS en MYSQL Workbench (Select) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=t6LZCR4SRyU',
    },
    {
      tema: 'CREATE TABLE Statement',
      referencia: 'Dev mysql (2022) CREATE TABLE Statement',
      tipo: 'Página web',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/create-table.html',
    },
    {
      tema: '¿SQL o NoSQL?',
      referencia:
        'EDteam. (2022). ¿SQL o NoSQL? ¿Cuál base de datos es mejor? [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8K1PKSqHFRQ',
    },
  ],
  glosario: [
    {
      termino: 'Base datos',
      significado:
        'conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'Metadatos',
      significado:
        'conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas, como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos, el manejo de bancos de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aplicaciones en la nube | Bases de datos personalizadas | AWS. (2022, September 02). Retrieved from',
      link: 'https://aws.amazon.com/es/products/databases',
    },
    {
      referencia:
        'Asale y Rae. (2021). Base. Diccionario de la lengua española.',
      link: 'https://dle.rae.es/base#CiiosqO',
    },
    {
      referencia:
        'GermanX (2017). Diferentes tipos de Joins de la sentencia SQL. Wikipedia.',
      link:
        'https://es.wikipedia.org/wiki/Sentencia_JOIN_en_SQL#/media/Archivo:Joins_del_SQL.svg',
    },
    {
      referencia:
        'Henry.Sudarshan S., S. A. (2002). Fundamentos de bases de datos (5.a ed.). McGraw-Hill Interamericana de España S.L.',
    },
    {
      referencia:
        'Kyocera. (2021). Conceptos sobre base de datos orientada a objetos. KYOCERA Document Solutions España S.A.',
      link:
        'https://www.kyoceradocumentsolutions.es/es/smarter-workspaces/business-challenges/paperless/conceptos-sobre-base-de-datos-orientada-a-objetos.html',
    },
    {
      referencia:
        'López, J. (2009). Algoritmos y programación (guía para docentes).',
      link: 'http://www.eduteka.org/GuiaAlgoritmos.php',
    },
    {
      referencia:
        'MySQL 8.0 Reference Manual. (2021).13.1.20.5 FOREIGN KEY Constraints. MySQL.',
      link:
        'https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html',
    },
    {
      referencia:
        'MySQL 8.0 Reference Manual. (2021). 3.3.2 Creating a Table. MySQL.',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html',
    },
    {
      referencia: 'MySQLTutorial. (2020). MySQL AND Operator. MySQL.',
      link: 'https://www.mysqltutorial.org/mysql-and',
    },
    {
      referencia: 'MySQLTutorial. (2020). MySQL OR Operator. MySQL.',
      link: 'https://www.mysqltutorial.org/mysql-or',
    },
    {
      referencia:
        'Microsoft. (2021). Descripción de los conceptos básicos de normalización de la base de datos.',
      link:
        'https://docs.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description',
    },
    {
      referencia:
        'Pathak, A. (2022). Las 10 mejores plataformas de GPU en la nube para inteligencia artificial y cargas de trabajo masivas. Geekflare. Retrieved from',
      link: 'https://geekflare.com/es/best-cloud-gpu-platforms',
    },
    {
      referencia:
        'Qué es el almacenamiento en la nube y cómo se utiliza | Microsoft Azure. (2022, September 11). Retrieved from',
      link:
        'https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-cloud-storage',
    },
    {
      referencia:
        'Williamdassafmsft. (2022, September 09). Crear, parámetros y ejecutar un procedimiento almacenado - SQL Server. Retrieved from',
      link:
        'https://docs.microsoft.com/es-es/sql/relational-databases/stored-procedures/create-a-stored-procedure?view=sql-server-ver16',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Instructor',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Peter Emerson Pinchao Solis',
        cargo: 'Instructor',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica. Regional Distrito Capital',
      },
      {
        nombre: 'Luis Eyder Ortiz',
        cargo: 'Experto temático',
        centro: 'Regional Santander',
      },
      {
        nombre: 'Javier Ricardo Luna Pineda',
        cargo: 'Diseñador instruccional',
        centro: 'Centro De La Industria, La Empresa Y Los Servicios',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
