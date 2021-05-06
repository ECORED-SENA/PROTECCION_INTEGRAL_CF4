export default {
  global: {
    componenteFormativo: 'Estrategias para la permanencia escolar',
    descripcionCurso:
      'La deserción escolar contribuye sustancialmente al incremento de los niveles de pobreza en Colombia, para contrarrestar esta problemática, el gobierno ha desarrollado acciones concretas como: la Jornada Escolar Complementaria (JEC) y las transferencias monetarias condicionadas a la asistencia, entre otras, las cuáles buscan generar corresponsabilidad en la familia y sociedad como entornos protectores de derechos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Deserción escolar',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Los factores de riesgo de la deserción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Causas personales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Causas contextuales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Causas institucionales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Factores protectores frente a la deserción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Búsqueda activa y matrícula',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Transporte escolar',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Programa de Alimentación Escolar (PAE)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Jornada Escolar Complementaria (JEC)',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Entrega de kits escolares',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Entrega de uniformes',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Transferencias condicionadas a la asistencia',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Gratuidad',
            hash: 't_3_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.9',
            titulo: 'Modelos educativos flexibles',
            hash: 't_3_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.10',
            titulo: 'Proyectos de vida individuales y colectivos',
            hash: 't_3_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.11',
            titulo: 'Convivencia escolar',
            hash: 't_3_11',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ruta para la construcción del Plan de Permanencia Escolar',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Ana Francisca Uribe Cárdenas',
        cargo: 'Experta temática',
        centro:
          'Equipo de Verificación. Programa Familias en Acción Dirección de Transferencias Monetarias Condicionadas.',
      },
      {
        nombre: 'Claudia Pureza Perdomo Gómez',
        cargo: 'Experta temática',
        centro:
          'GIT Territorios y Poblaciones Dirección de Transferencias Monetarias Condicionadas',
      },
      {
        nombre: 'Jairo Fernando Contreras Gutiérrez',
        cargo: 'Experto temático',
        centro: 'Oficina Asesora de Planeación',
      },
      {
        nombre: 'Martha Cecilia Arcila Aponte',
        cargo: 'Experta temática',
        centro: 'DTMC Grupo de Pilotaje y Escalamiento',
      },
      {
        nombre: 'Omayra Hoyos Rojas',
        cargo: 'Experta temática',
        centro:
          'Equipo de Verificación. Programa Familias en Acción Dirección de Transferencias Monetarias Condicionadas',
      },
      {
        nombre: 'William Mogollón Marín',
        cargo: 'Experto temático',
        centro: 'CORPROGRESO',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora instruccional y evaluadora Instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro para la comunicación de la Industria Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: [
          'Jesus Antonio Vecino Valero',
          'José Jaime Luis Tang Pinzón',
          'Lady Adriana Ariza Luque',
          'Luis Zenen Arévalo Mantilla',
          'Nelson Iván Vera Briceño',
          'Oleg Litvin',
          'Wilson Andres Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: [
          'Daniel Ricardo Mutis Gómez',
          'Ricardo Alfonso González Vargas',
        ],
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: [
          'Jenny Paola Montillo',
          'María Isabel Román Rueda',
          'Rafael Augusto Mantilla',
          'Veimar Celis Meléndez',
        ],
        cargo: 'Revisores de contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación de recursos',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (7 de junio de 2012). Ley 1532 de 2012. Por medio de la cual se adoptan unas medidas de política y se regula el funcionamiento del Programa Familias en Acción. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47730',
    },
    {
      referencia: 'El Espectador. (29 de marzo de 2020). Deserción escolar.',
      link: 'https://www.elespectador.com/tags/desercion-escolar/',
    },
    {
      referencia:
        'Encuesta Nacional de Deserción – ENDE. (2010). Evaluación de los factores asociados a la deserción en las instituciones educativas oficiales. ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-293674_archivo_pdf_multivariado.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (13 de diciembre de 2017). ¿Qué es el Sistema Integrado de Matrículas - SIMAT? [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=mfKoDSuNT70',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (20 de diciembre de 2011). Decreto 4807. Por el cual se establecen las condiciones de aplicación de la gratuidad educativa para los estudiantes de educación preescolar, primaria, secundaria y media de las instituciones educativas estatales y se dictan otras disposiciones para su implementación.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-293375_archivo_pdf_decreto4807.pdf ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2019). Estrategia de acceso y permanencia.',
      link:
        'https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/Jornada-Escolar-2019/Estrategia-de-Acceso-y-Permanencia/380949:Estrategia-de-Acceso-y-Permanencia',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2019). Transporte escolar. Contexto.',
      link:
        'https://www.mineducacion.gov.co/1759/w3-article-388034.html?_noredirect=1',
    },
    {
      referencia: 'Ministerio de Educación Nacional. (2019). Búsqueda activa.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-381353_galeria_05.pptx',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2019). Informe de gestión.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-385377_recurso_13.pdf ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Deserción Escolar - Covid 19. Ministerio de Educación Nacional.',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Jornada escolar complementaria. Principales acciones que desarrolla el programa.',
      link:
        'https://www.mineducacion.gov.co/1759/w3-article-357333.html?_noredirect=1',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). La deserción escolar.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-293659_archivo_pdf_abc.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Modelos educativos flexibles.',
      link:
        'https://www.mineducacion.gov.co/1759/w3-article-340087.html?_noredirect=1',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (6 de febrero de 2018). Directiva 01.',
      link: 'https://www.mineducacion.gov.co/1759/articles-366208_pdf.pdf',
    },
    {
      referencia:
        'Secretaría de Educación de Bogotá. (2018). Francisca: la navegante de estrellas.',
      link:
        'https://issuu.com/secretariadeeducacionbogota/docs/francisca_la_navegante_isbn_2018_ma',
    },
  ],
  glosario: [
    {
      termino: 'Deserción',
      significado:
        'fenómeno asociado al abandono, desvinculación o inasistencia periódica o permanente de los niños, niñas o adolescentes al sistema educativo.',
    },
    {
      termino: 'Mitigar',
      significado: 'atenuar los factores de riesgo de deserción.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de que se produzca un contratiempo o una situación personal, del contexto o institucional que genere la deserción escolar.',
    },
    {
      termino: 'Simat',
      significado: 'sistema Integrado de Matrículas.',
    },
    {
      termino: 'Simpade',
      significado:
        'aplicativo o Sistema de Información para el Monitoreo, la Prevención y el Análisis de la Deserción Escolar. ',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de educación Nacional. (2019). Búsqueda activa. Ministerio de educación Nacional.',
      tipo: 'Pdf',
      descarga: 'downloads/Infografia_Ministerio_Edu.pdf',
    },
    {
      texto:
        'Ministerio de Educación Nacional. (13 de diciembre de 2017). ¿Qué es el Sistema Integrado de Matrículas - SIMAT? [Video]. YouTube. https://www.youtube.com/watch?v=mfKoDSuNT70',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=mfKoDSuNT70',
    },
    {
      texto:
        'Ministerio de Educación Nacional. (6 de febrero de 2018). Directiva 01. Ministerio de Educación Nacional.',
      tipo: 'Pdf',
      link: 'https://www.mineducacion.gov.co/1759/articles-366208_pdf.pdf',
    },
    {
      texto:
        'Ministerio de Educación Nacional – MEN. (2020). Modelos educativos flexibles. Ministerio de Educación Nacional.',
      tipo: 'Página web',
      link:
        'https://www.mineducacion.gov.co/1759/w3-article-340087.html?_noredirect=1',
    },
  ],
}
