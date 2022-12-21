export default {
  global: {
    componenteFormativo:
      'Análisis y elaboración de la prótesis parcial removible',
    descripcionCurso:
      'Las prótesis parciales removibles se usan ampliamente para reemplazar los dientes faltantes con el fin de restaurar tanto la función como la estética del paciente parcialmente dentado. El diseño y desarrollo de estas prótesis a menudo involucra el uso de retenedores para retención directa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Normativa nacional para laboratorios de mecánica dental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Lineamientos para su funcionamiento',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Equipamiento',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Talento humano',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios de la prótesis',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Evolución de la prótesis removible',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Función de la prótesis removible',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Indicaciones y precauciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de prótesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Biomateriales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Metales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Propiedades de los metales',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Prescripción clínica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Proceso de diseño y elaboración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Control de calidad',
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
      tema: 'Principios de la prótesis',
      referencia:
        'Alejandro Diaz. ETEE. Dental (2017). <em>Prótesis parcial removible acrílica </em>[Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=eQffWWEvSXI&ab_channel=AlejandroDiaz.ETEE.Dental',
    },
    {
      tema: 'Indicaciones y precauciones',
      referencia:
        'Odontoespecialistas. (2019). <em>Prótesis parcial removible / Odontoespecialistas </em>[Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fys777ljFcY&ab_channel=Odontoespecialistas',
    },
  ],
  glosario: [
    {
      termino: 'Alginato',
      significado:
        'es un material elástico que sirve para la toma de impresiones dentales, teniendo como objetivo principal obtener una réplica exacta de los tejidos duros y blandos de la cavidad oral.',
    },
    {
      termino: 'Arenar',
      significado:
        'consiste en quitar los excesos de revestimiento a las piezas, para ello se usa la máquina arenadora.',
    },
    {
      termino: 'Arista central',
      significado:
        'elevación del esmalte que se encuentra en la cara vestibular más marcado de los caninos y recorre la pieza en su tercio medio desde cervical o incisal.',
    },
    {
      termino: 'Articuladores',
      significado:
        'instrumentos que simulan la relación existente entre los dientes maxilares y los mandibulares y nos permiten reproducir las posiciones y movimientos mandibulares fuera de la boca y sobre la mesa de trabajo.',
    },
    {
      termino: 'ATM',
      significado: 'articulación témporo-mandibular.',
    },
    {
      termino: 'Base',
      significado:
        'parte de la prótesis que contiene los dientes artificiales y que encaja sobre la encía.',
    },
    {
      termino: 'Bruxismo',
      significado:
        'hábito de apretamiento o frotamiento de dientes, diurno o nocturno, con distintos grados de intensidad y persistencia en el tiempo, involuntario y fuera de los movimientos funcionales que tiene la mandíbula.',
    },
    {
      termino: 'CAD-CAM ',
      significado:
        '(<em>Computer-Aid-Design-Computer Aid Manufacturing</em>) programa informático de diseño y fabricación asistido por ordenador.',
    },
    {
      termino: 'Cofia dental ',
      significado:
        'sistema de toma de impresión dental cuya función es la de obtener una impresión exacta de los pilares tallados.',
    },
    {
      termino: 'Conector',
      significado: 'es la estructura que une los retenedores con el póntico.',
    },
    {
      termino: 'Cubetas individuales ',
      significado:
        'instrumentos que se realizan cuando las cubetas estándar no se adaptan bien al paciente para la toma del registro de la boca.',
    },
    {
      termino: 'Curva de compensación',
      significado:
        'curvatura anteroposterior y lateral en el alineamiento de las superficies oclusales y los bordes incisales de los dientes artificiales, que se emplea para conseguir una oclusión equilibrada durante los movimientos mandibulares.',
    },
    {
      termino: 'Dientes pilares',
      significado: 'dientes remanentes que sirven de soporte al puente.',
    },
    {
      termino: 'Dientes remanentes',
      significado: 'piezas que conserva el paciente.',
    },
    {
      termino: 'Escayola dental metalizada',
      significado:
        'yeso para dados de trabajo sobre los que se harán trabajos de rehabilitación dental como coronas, implantes, postes o prótesis.',
    },
    {
      termino: 'Escayola dental tipo IV',
      significado:
        'yeso tipo 4 tixotrópico extraduro, de alta resistencia. Su tiempo prolongado de trabajo de 8 minutos permite correr hasta 6 arcadas al mismo tiempo.',
    },
    {
      termino: 'Estética ',
      significado: 'diseño, en cierta medida, de la cara del paciente.',
    },
    {
      termino: 'Fraguado',
      significado: 'endurecimiento del revestimiento.',
    },
    {
      termino: 'Oclusión',
      significado: 'contacto entre los dientes superiores e inferiores.',
    },
    {
      termino: 'Póntico',
      significado: 'diente postizo que reemplaza al perdido.',
    },
    {
      termino: 'Posición dentaria',
      significado:
        '“posición de equilibrio muscular”, donde los dientes se colocan en la posición donde exista un equilibrio.',
    },
    {
      termino: 'Prótesis dental',
      significado:
        'elemento artificial destinado para suplir la ausencia dentaria, restaurando la anatomía de una o varias piezas.',
    },
    {
      termino: 'Prótesis parcial removible',
      significado:
        'prótesis que sustituye parcialmente los dientes ausentes del paciente, con la finalidad de restablecer las principales funciones orales, masticación, estética, fonética, prevención de inclinación, estabilización de los dientes debilitados.',
    },
    {
      termino: 'Prueba del bizcocho',
      significado:
        'consiste en la colocación de la corona (no glaseada) en boca del paciente sobre el muñón, para poder comprobar que en el laboratorio han colocado la cerámica correctamente.',
    },
    {
      termino: 'Puente',
      significado: 'prótesis que reemplaza uno o varios dientes ausentes.',
    },
    {
      termino: 'Pulido',
      significado:
        'procedimiento superficial que consiste en un desgaste por frotación o abrasión para conseguir una prótesis totalmente lisa.',
    },
    {
      termino: 'Rebase',
      significado:
        'método de reajuste de la prótesis que consiste en reemplazar parte del material de la base, consiguiendo el ajuste sin modificar la posición de los dientes.',
    },
    {
      termino: 'Restauración',
      significado:
        'procedimiento que consiste en reemplazar por medios artificiales los dientes o parte de ellos.',
    },
  ],
  referencias: [
    {
      referencia:
        'González, C. (2009). <em>En prótesis parcial removible de vía de carga dentaria ¿es posible eliminar los retenedores de las piezas pilares anteriores? Estudio in vitro.</em> (Tesis de grado). Universidad de Chile.',
      link:
        'http://repositorio.uchile.cl/bitstream/handle/2250/134873/En-pr%C3%B3tesis-parcial-removible-de-v%C3%ADa-de-carga-dentaria.pdf?sequence=1',
    },
    {
      referencia:
        'Esponda, R. (2019). <em>Anatomía dental.</em> Universidad Nacional Autónoma de México (UNAM).',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/187393',
    },
    {
      referencia:
        'García V. (2017). <em>La enseñanza bimodal en la asignatura "Dentaduras parciales removibles" y su incidencia en el rendimiento estudiantil.</em> Universidad Central de Venezuela.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/112051',
    },
    {
      referencia:
        'Giraldo, O. (2004). Metales y aleaciones en odontología. <em>Rev Fac Odont Univ Ant. 15(2), 53-63.</em>',
      link:
        'https://revistas.udea.edu.co/index.php/odont/article/view/3244/3005',
    },
    {
      referencia:
        'Matiz, J. (2014). Temas de rehabilitación oral: acrílicos dentales. 1: <em>Clínica-laboratorio. Ecoe Ediciones.</em>',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/122433',
    },
    {
      referencia:
        'Navas, E. (2018). <em>Prevención de riesgos laborales, sector sanitario: riesgos específicos del trabajo de protésicos dentales</em> (2a. ed.). Editorial ICB.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/111458',
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
        nombre: 'Daniel L. Toro A.',
        cargo: 'Instructor',
        centro: 'Regional Antioquia/centro de servicios de salud',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
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
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenidos',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
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
