<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción

    p.mb-5 Para iniciar el estudio de este componente, se debe realizar la lectura y reflexión de las siguientes noticias tomadas de un diario de circulación nacional: 
    
    SlyderB.mb-5(:datos="datosSlyder")

    .bloque-texto-a.p-4.p-md-5.mb-5.color_bloque_a
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img.img-a(src='@/assets/curso/introduccion/img_7.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Con base en lo anterior, en este componente formativo se abordan las temáticas relacionadas con el fenómeno de la deserción escolar, sus causas y efectos. También las estrategias de permanencia escolar como mecanismos de acción que promueven las buenas prácticas de prevención teniendo en cuenta el contexto sociocultural y las características de los estudiantes y las familias que hacen parte de la estrategia de alertas, ya que el objetivo fundamental es impulsar el acceso a las atenciones integrales en salud para niños y niñas en primera infancia e incentivar la asistencia y permanencia escolar en los niveles transición, básica primaria, básica secundaria y media de los niños, niñas y adolescentes en edad escolar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-3 En este sentido, los lineamientos de política pública establecidos por el Ministerio de Educación Nacional (MEN), sobre los que se fundamenta este componente, establecen y promueven las estrategias para la vinculación de los niños, niñas y adolescentes al sistema educativo y, a su vez, indican las estrategias de permanencia escolar pertinentes y relacionadas con cada factor de riesgo que pueda presentarse según los factores individuales, contextuales e institucionales. En el caso particular del programa Familias en Acción, este pertenece a la estrategia de permanencia de transferencias monetarias que busca mitigar el riesgo de deserción por causas de tipo económico. También se identifican otras estrategias como: transporte escolar, jornadas escolares complementarias y modelos flexibles, entre otros. 

      .col-lg-4
        img.img-a(src='@/assets/curso/introduccion/img_6.png')


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo:
          'La mitad de los estudiantes de Latinoamérica no acaba la educación secundaria',
        texto:
          'Emiliana Vegas, jefa de Educación del BID, sostiene que uno de cada dos jóvenes está abandonando las aulas “antes de culminar doce años de educación”.',
        imagen: require('@/assets/curso/introduccion/img_1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'La violencia en el país: principal obstáculo para que los niños vayan a la escuela',
        texto:
          'Solo en la región del Catatumbo, en lo que va corrido del año, 80 escuelas han tenido que detener las clases por el conflicto. En la Comuna 13 de Medellín, la situación de orden público ha aumentado la inasistencia escolar.',
        imagen: require('@/assets/curso/introduccion/img_2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Deserción escolar, un tema social y económico',
        texto:
          'A pesar de que la desescolarización en colegios públicos ha ido en descenso, sigue siendo tres veces mayor que en instituciones privadas. Expertos creen que se debe a la falta de una educación más pertinente a las realidades sociales.',
        imagen: require('@/assets/curso/introduccion/img_3.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'Advierten que en Jamundí cultivadores de coca reclutan a escolares',
        texto:
          'El Canal Caracol informó que el Ministerio de Trabajo reseñó que al menos 47 jóvenes se han marchado a trabajar en los cultivos ilícitos.',
        imagen: require('@/assets/curso/introduccion/img_4.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '“Mi matrícula mi derecho”, la nueva campaña de Mineducación contra la deserción escolar',
        texto:
          'Estimaciones de la Contraloría afirman que el 7 % de los estudiantes que se inscriben al comienzo de año se retiran a lo largo del periodo escolar. Se espera que con esta iniciativa la deserción pase de 3,08 % en 2017 a 2,7 en los próximos tres años.',
        imagen: require('@/assets/curso/introduccion/img_5.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
