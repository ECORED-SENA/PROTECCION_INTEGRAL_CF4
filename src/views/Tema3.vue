<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Factores protectores frente a la deserción

    .bloque-texto-a.p-4.p-md-5.mb-5.color_bloque_a
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4
          img.img-a(src='@/assets/curso/tema_3/img_1.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 Es cierto que el fenómeno de la deserción escolar se plantea como una dificultad que, en muchos casos, no tiene una única alternativa de solución, sino que se pueden establecer múltiples acciones para ser implementadas de manera independiente o de manera conjunta de acuerdo con los factores de riesgo asociados a cada caso. 

            p En importante que todos los actores participantes en el proceso educativo de los niños, niñas y adolescentes reconozcan los objetivos y el alcance de las estrategias para la permanencia escolar, de tal modo que las alternativas de mitigación sean pertinentes y se encuentren vinculadas a las instituciones educativas. A continuación, se presentan las acciones más relevantes que se han implementado por parte del Ministerio de Educación Nacional para brindar un servicio educativo garante de los derechos de los niños, niñas y adolescentes.
 

              .col-lg-4
                

    .titulo-segundo
      #t_3_1.h4 3.1 Búsqueda activa y matrícula

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1D-fOF0YGOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO MINISTERIO DE EDUCACIÓN NACIONAL

    p.mb-5 En la siguiente infografía se abordan: 

    .tarjeta.tarjeta--azul.color_tarjeta_1.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema_3/img_2.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Aspectos favorables relacionados con la asistencia escolar, y acciones para que los menores vuelvan y se queden en el colegio, de acuerdo con lo establecido por el Ministerio de Educación Nacional (2019).
            .col-sm-auto
              a.boton.boton--b.color_llamado(:href="obtenerLink('/downloads/Infografia_Ministerio_Edu.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5 En este mismo sentido, la ruta de búsqueda activa consta de los siguientes pasos:

    .row.mb-5
      .col-lg-8
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_3/img_4.png").img-fluid
          .list__txt
            p.m-top Identificación del territorio y perfil poblacional para la generar atención diferencial. 
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_3/img_4.png").img-fluid
          .list__txt
            p.m-top Definición de incentivos que reconozcan los resultados de las iniciativas territoriales e intercambio de experiencias regionales.  
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_3/img_4.png").img-fluid
          .list__txt
            p.m-top Seguimiento del niño o niña a través de los sistemas de información Simat y Simpade. 
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_3/img_4.png").img-fluid
          .list__txt
            p.m-top Desarrollo y seguimiento a los planes de búsqueda activa. 
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_3/img_4.png").img-fluid
          .list__txt
            p.m-top Articulación con las escuelas de familias, comunidades, actores nacionales y locales, y programas existentes como jornada única. 
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_3/img_4.png").img-fluid
          .list__txt
            p.m-top Lineamientos para acompañar a las entidades territoriales.  
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_3/img_4.png").img-fluid
          .list__txt
            p.m-top Consolidación de un observatorio para hacer seguimiento a los planes de búsqueda activa.  
        
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_3.png")
    
    .titulo-segundo
      #t_3_2.h4 3.2 Transporte escolar
    
    .row.align-items-center.mb-5.mt-5
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_5.png")
      .col-lg-8
        p El transporte escolar es una estrategia que contribuye a garantizar el acceso y la permanencia de los niños, niñas, adolescentes y jóvenes en el sistema educativo, eliminando las barreras de distancia entre la escuela y el hogar y es implementada por cada una de las Entidades Territoriales Certificadas (ETC), de acuerdo con el contexto geográfico particular (MEN, 2019). 

    .titulo-segundo
      #t_3_3.h4 3.3. Programa de Alimentación Escolar (PAE)

    .row.align-items-center.mb-5
      .col-lg-8
        p La prestación del servicio del Programa de Alimentación Escolar busca promover el acceso con permanencia de los niños, niñas, adolescentes y jóvenes en el sistema educativo oficial, a través del suministro de un complemento alimentario durante la jornada escolar, para mantener los niveles de atención, impactar de forma positiva los procesos de aprendizaje, el desarrollo cognitivo, disminuir el ausentismo y la deserción y, a su vez, fomentar estilos de vida saludables. Actualmente la estrategia se encuentra en cabeza de cada entidad territorial, que es la responsable de la contratación de los operadores requeridos para garantizar la prestación del servicio. 
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_6.png")

    .titulo-segundo
      #t_3_4.h4 3.4 Jornada Escolar Complementaria (JEC)

    p.mb-3 El programa de Jornada Escolar Complementaria (JEC) es una estrategia de permanencia que implementan las secretarías de educación en articulación con las cajas de compensación familiar (CCF). Estas jornadas apuntan a mitigar los riesgos de la deserción escolar causados, entre otros factores, por la falta de gusto o de interés por el estudio, o la falta de recursos en los establecimientos educativos para que los niños, niñas, jóvenes y adolescentes desarrollen programas que incluyen la recreación, la cultura y el deporte, así como espacios que complementan de manera amena los aprendizajes. Con estas jornadas se busca que los estudiantes se sientan motivados a permanecer en la institución y la escuela sea valorada por ser un entorno protector. 

    p.mb-5 Las actividades de fortalecimiento para propiciar el desarrollo de competencias básicas y generar procesos de aprendizaje en las diferentes áreas del conocimiento son: 

    .h5.mb-3.text-center Actividades de fortalecimiento

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_3/img_7.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota. Adaptada de MEN (2020).

    p.mb-5 Para el Ministerio de Educación Nacional (2020) las principales acciones que se desarrollan a través de la estrategia de la Jornada Escolar Complementaria (JEC) son:

    .row.justify-content-center.mb-5
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_3/img_8.png").img-fluid
              .card__copy 
                p Contribuir para elevar los índices de permanencia y calidad del aprendizaje de las instituciones educativas beneficiadas por la estrategia. 
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_3/img_9.png").img-fluid
              .card__copy 
                p Generar ambientes de aprendizaje que ofrezcan oportunidades para el desarrollo integral, físico, cognitivo y emocional de los niños, niñas, jóvenes y adolescentes.
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_3/img_10.png").img-fluid
              .card__copy 
                p Promover actividades pedagógicas que estimulen el buen uso del tiempo libre y así disminuir los factores de riesgos sociales asociados a la vulnerabilidad (consumo de sustancias psicoactivas, cualquier forma de abuso y explotación infantil, vinculación a grupos al margen de la ley y peores formas de trabajo infantil), de la población escolar. 
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_3/img_11.png").img-fluid
              .card__copy 
                p Incentivar en los niños, niñas y jóvenes prácticas y manifestaciones culturales que promuevan la identidad cultural y la memoria material e inmaterial de la nación, el respeto por los derechos humanos, la valoración de las diferencias, el cuidado del medio ambiente y del entorno. 
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_3/img_12.png").img-fluid
              .card__copy 
                p Fortalecer a las instituciones educativas como escenarios de ambientes protectores.
      .col-12.col-md-10
        .card-media
          .card-media__body                 
              figure.card__figure
                  img.img-a(src="@/assets/curso/tema_3/img_13.png").img-fluid
              .card__copy 
                p Promover el desarrollo de las competencias básicas y ciudadanas.
    
    .titulo-segundo
      #t_3_5.h4 3.5 Entrega de kits escolares

    .row.align-items-center.mb-5
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_14.png")
      .col-lg-8
        p Esta estrategia tiene por objeto brindar útiles escolares básicos para el desarrollo de las actividades académicas de los niños, niñas y adolescentes que se encuentren en alguna situación de vulnerabilidad. El proceso de identificación de necesidades lo realizan las instituciones educativas y es por medio de las secretarías de educación certificadas que se gestionan los recursos y las entregas de estos. El suministro de estos materiales escolares coadyuva a las necesidades económicas de las familias. 

    .titulo-segundo
      #t_3_6.h4 3.6 Entrega de uniformes

    .row.align-items-center.mb-5
      .col-lg-8
        p Esta pretende aportar a mejorar los índices de permanencia escolar atenuando el factor de riesgo asociado a las familias de escasos recursos o en situación de extrema pobreza. Al igual que con la entrega de kits escolares las instituciones educativas identifican las necesidades y las secretarías de educación gestionan la inversión con recursos propios o en alianzas con empresas del sector privado u otras organizaciones. 
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_15.png")

    .titulo-segundo
      #t_3_7.h4 3.7 Transferencias condicionadas a la asistencia

    p.mb-3 Esta estrategia está vinculada al programa Más Familias en Acción el cual consiste en la entrega, condicionada y periódica de una transferencia monetaria directa para complementar el ingreso y mejorar la salud y la educación de los menores de 18 años de las familias que se encuentran en condición de pobreza o vulnerabilidad. El objetivo fundamental es contribuir a la superación y prevención de la pobreza y la formación de capital humano, mediante el apoyo monetario directo a la familia beneficiaria (Ley 1532, 2012).

    p.mb-5 Cabe recordar que los beneficiarios de esta estrategia son: 

    .row.align-items-center.mb-5
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_16.png")
      .col-lg-8
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_1/img_2.png").img-fluid
          .list__txt
            p.m-top Familias es situación de pobreza de acuerdo con los criterios establecidos por el Departamento de Prosperidad Social (DPS). 
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_1/img_2.png").img-fluid
          .list__txt
            p.m-top Familias en situación de desplazamiento.
        hr.bd-hr
        .list.mb-3
          .list__item
            .list__item__icon
              img.img-a(src="@/assets/curso/tema_1/img_2.png").img-fluid
          .list__txt
            p.m-top Familias indígenas en situación de pobreza.


    .titulo-segundo
      #t_3_8.h4 3.8 Gratuidad

    p.mb-3 La gratuidad educativa está regulada en el Decreto 4807 del 20 de diciembre de 2011 emitido por el Ministerio de Educación Nacional, 

    .row.justify-content-center.mb-3
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.p-4.mb-3
          .bloque-texto-b__texto.h3.mb-0 por el cual se establecen las condiciones de aplicación de la gratuidad educativa para los estudiantes de educación preescolar, primaria, secundaria y media de las instituciones educativas estatales y se dictan otras disposiciones para su implementación

    p.mb-5 que en su parte considerativa establece: 

    .cajon--azul.p-4.mb-5
      p Que los cobros de derechos académicos y servicios complementarios han sido una barrera para el acceso y la permanencia escolar en la educación preescolar, básica y media, y ante ello el Estado debe generar políticas públicas orientadas a mejorar la accesibilidad de la población en edad escolar a todos los niveles educativos, a fin de que se logre garantizar la realización del derecho a la educación (inciso 10).

    .row.align-items-center.mb-5
      .col-lg-8
        p Indudablemente la estrategia de gratuidad posibilita el acceso de todos los niños, niñas y adolescentes al sistema educativo, puesto que la condición de insuficiencia económica deja de ser un obstáculo para lograr equidad y contribuir al rompimiento de la brecha social. 
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_17.png")

    .titulo-segundo
      #t_3_9.h4 3.9 Modelos educativos flexibles

    .row.align-items-center.mb-3
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_18.png")
      .col-lg-8
        p La permanencia de modelos educativos flexibles hace parte de las estrategias que promueve el Ministerio de Educación y que lideran las secretarías de educación certificadas, cuyo principal objetivo es el de restituir y garantizar el derecho fundamental de la educación a la población que se encuentra en situación de extra edad, desplazamiento, en condiciones de vulnerabilidad o en situaciones diversas o que les impide acceder a la educación formal.

    p.mb-3 Actualmente, el Ministerio de Educación Nacional y la Subdirección de Referentes y Evaluación de la Calidad Educativa, han realizado la actualización al material físico de apoyo a la implementación de cada modelo (guías, cartillas, módulos) tanto para estudiantes como para docentes.

    p.mb-5 Los modelos educativos flexibles que cuentan con material actualizado son:

    .h5.text-center.mb-3 Modelos educativos flexibles con actualización

    .tabla.mb-5 
      table
        caption Nota. Adaptada de MEN (2020)
        thead
          tr.color-table.text-center
            th Modelo educativo flexible
            th Población que atiende
            th Zona
        tbody
          tr.color_th
            td Escuela nueva
            td Estudiantes de básica primaria de escuelas multigrado
            td Rural
          tr
            td Postprimaria rural
            td Estudiantes de básica secundaria
            td Rural
          tr.color_th
            td Secundaria activa
            td Estudiantes de básica secundaria
            td Rural o urbano marginal
          tr
            td Aceleración del aprendizaje
            td Estudiantes de básica primaria, de 10 a 17 años que se encuentran en extra edad (desfase edad - grado)
            td Rural o urbano marginal
          tr.color_th
            td Caminar en secundaria
            td Estudiantes de básica secundaria; jóvenes que se encuentran en extra edad (desfase edad - grado)
            td Rural o urbano marginal

    p.mb-5 Otros modelos educativos que responden a diferentes necesidades pedagógicas, metodológicas y poblacionales son:

    .h5.mb-3.text-center Otros modelos educativos flexibles 

    .tabla.mb-5 
      table
        caption Nota. Adaptada de MEN (2020)
        thead
          tr.color-table.text-center
            th Modelo educativo flexible
            th Población que atiende
            th Zona
        tbody
          tr.color_th
            td Círculos de aprendizaje
            td Estudiantes de básica primaria entre 6 y 16 años que se encuentran en extra edad
            td Urbana
          tr
            td Modelo de Educación Media (MEMA)
            td Estudiantes de la media entre 15 y 18 años
            td Rural
          tr.color_th
            td Modelo de educación con profundización para el trabajo
            td Estudiantes de la media entre 15 y 18 años
            td Rural
          tr
            td Grupos juveniles creativos
            td Estudiantes de básica primaria, básica secundaria y media entre los 15 y los 26 años
            td Urbano marginal
          tr.color_th
            td Bachillerato pacicultor
            td Estudiantes de básica secundaria a partir de los 15 años
            td Urbano marginal
          tr
            td Bachillerato virtual
            td Estudiantes de básica secundaria a partir de los 15 años
            td Urbano rural

    .titulo-segundo
      #t_3_10.h4 3.10 Proyectos de vida individuales y colectivos

    .row.align-items-center.mb-3
      .col-lg-8
        p Esta estrategia se relaciona con el Programa para la Promoción de Estilos de Vida Saludables (Ppevs) el cual se encuentra articulado con el Programa de Alimentación Escolar (PAE). El objetivo del Ppevs es realizar la promoción de estilos de vida saludable que fortalezcan el desarrollo de habilidades y actitudes de los niños, niñas y adolescentes en pro de la toma de decisiones asertivas sobre su salud, su crecimiento y su proyecto de vida, además, contribuyen a su bienestar individual y colectivo. 
      .col-lg-4
        img.img-a(src="@/assets/curso/tema_3/img_19.png")

    p.mb-5 Las entidades territoriales reciben orientaciones conceptuales, pedagógicas y operativas por parte del programa con el fin de guiar a los establecimientos educativos en la construcción de proyectos pedagógicos transversales orientados al bienestar.

    .titulo-segundo
      #t_3_11.h4 3.11 Convivencia escolar

    .cajon--azul.p-4.mb-5
      p Esta estrategia de entornos escolares para la vida, la convivencia y la ciudadanía está dirigida a contribuir al desarrollo socioemocional de las niñas, niños, adolescentes y al fortalecimiento de las relaciones familiares y de la relación familia-escuela. Se desarrolla a través de tres líneas estratégicas: 

    .row.mb-5
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_3/img_20.png' alt='AvatarTop')
          .tarjeta.tarjeta--blanca.p-4.color_card
            p.text-center Emociones para la vida, con énfasis en la formación a docentes, estudiantes y familias en competencias socioemocionales y ciudadanas.
        img.top-img.img-a(src='@/assets/curso/tema_3/img_24.png')
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_3/img_21.png' alt='AvatarTop')
          .tarjeta.tarjeta--blanca.p-4.color_card
            p.text-center Sistema Nacional de Convivencia Escolar que promueve el desarrollo de protocolos y rutas de atención para atender situaciones que afectan el desarrollo integral y la convivencia de los niños, las niñas y los jóvenes. 
        img.top-img.img-a(src='@/assets/curso/tema_3/img_24.png')

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.img-a(src='@/assets/curso/tema_3/img_22.png' alt='AvatarTop')
          .tarjeta.tarjeta--blanca.p-4.color_card
            p.text-center Pensamiento crítico e histórico, con la puesta en marcha de acciones pedagógicas frente a la enseñanza de la historia, la ética y la ciudadanía. 
        img.top-img.img-a(src='@/assets/curso/tema_3/img_24.png')

    .row.justify-content-center.mb-3
      .col-lg-10.mb-5.mb-lg-0
        .bloque-texto-b.p-4.mb-3
          .bloque-texto-b__texto.h3.mb-0 Desde los entornos para la convivencia se privilegian todas las acciones vinculantes con las familias que permitan fortalecer la relación con la escuela y garantizar condiciones de protección, cuidado, afecto y acompañamiento al desarrollo integral y a los aprendizajes de los NNA 
          span.mb-3 - (MEN, 2019)

    .tarjeta.tarjeta--azul.color_tarjeta_1.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema_3/img_23.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 A continuación, se expone un ejemplo de la clasificación y aplicación de los factores protectores en la Secretaría de Educación de Bogotá:
            .col-sm-auto
              a.boton.boton--b.color_llamado(:href="obtenerLink('/downloads/Infografia_FactoresProtectoresMINEDU.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
