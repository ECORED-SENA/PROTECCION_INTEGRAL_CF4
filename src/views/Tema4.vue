<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Ruta para la construcción del Plan de Permanencia Escolar 
    
    .bloque-texto-a.p-4.p-md-5.mb-5.color_bloque_a
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4
          img.img-a(src='@/assets/curso/tema_4/img_22.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El plan de permanencia escolar es un instrumento orientador propuesta por el Ministerio de Educación para que las secretarías de educación certificadas y los establecimientos educativos identifiquen las principales causas o factores de riesgo de deserción y definan las estrategias pertinentes y oportunas, así como los factores protectores orientados a disminuir la tasa de deserción escolar.


    p.mb-3 Para la elaboración del Plan de Permanencia Escolar se deben tener en cuenta las características propias de cada institución y de cada región, de tal manera que las secretarías de educación formulen y verifiquen el impacto de las acciones realizadas para favorecer la permanencia de los niños, niñas y adolescentes en el sistema educativo. 

    p.mb-5 A continuación se describe con detalle cada etapa de la Ruta para la construcción del plan de permanencia:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarrjeta--clara")
      .row(titulo="Identificar las causas de la deserción") 
        p.mb-5 Los factores de riesgo relacionados a causas contextuales, es decir, hacen parte de las problemáticas propias del contexto que rodean al individuo y se vinculan a todos los factores de tipo social, económico, geográfico, cultural y familiar. Algunas de las más relevantes son:

        .row.mb-3
          .col-md-6.col-lg.mb-5
            .tarjeta-Avatar
              img(src='@/assets/curso/tema_4/img_1.png' alt='AvatarTop')
              .tarjeta.tarjeta--blanca.p-4.color_card
                p.text-center Sistema de Información para el Monitoreo, la prevención y el análisis de la deserción escolar - Simpade
            

          img.img-a.mt-8(src='@/assets/curso/tema_4/img_5.png')

          .col-md-6.col-lg.mb-5
            .tarjeta-Avatar
              img(src='@/assets/curso/tema_4/img_2.png' alt='AvatarTop')
              .tarjeta.tarjeta--blanca.p-4.color_card
                p.text-center Módulo Estrategias de Permanencia Anexo 13 A, Simat.

          img.img-a(src='@/assets/curso/tema_4/img_5.png')
          .col-md-6.col-lg.mb-5
            .tarjeta-Avatar
              img.img-a(src='@/assets/curso/tema_4/img_3.png' alt='AvatarTop')
              .tarjeta.tarjeta--blanca.p-4.color_card
                p.text-center Planes Escolares para la Gestión del Riesgo – PEGR

          img.img-a(src='@/assets/curso/tema_4/img_5.png')
          .col-md-6.col-lg.mb-5
            .tarjeta-Avatar
              img.img-a(src='@/assets/curso/tema_4/img_4.png' alt='AvatarTop')
              .tarjeta.tarjeta--blanca.p-4.color_card
                p.text-center Análisis propios de los establecimientos educativos y de las SEC

        p.mb-5 Para identificar las causas de deserción escolar o los factores de riesgo las instituciones y las secretarías de educación cuenta con documentos y herramientas informáticas en las que se debe registrar la información como son:

        .row.justify-content-center.mb-5
          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_6.png").img-fluid
                  .card__copy 
                    p Sistema de Información para el Monitoreo, la Prevención y el Análisis de la Deserción Escolar (Simpade); este aplicativo genera reportes de información, estadísticas que pueden ser consultadas y enuncia indicadores que deben ser tenidos en cuenta para el análisis y seguimiento de los datos sobre deserción escolar y las acciones que contribuyen a la permanencia. 

          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_7.png").img-fluid
                  .card__copy 
                    p En el módulo (Anexo 13A) sobre estrategias de permanencia que se registran en el Sistema Integrado de Matrícula Simat.

          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_8.png").img-fluid
                  .card__copy 
                    p En otros documentos como los planes escolares para la gestión del riesgo y los documentos propios de los establecimientos educativos.

      .row.mb-3(titulo="Priorizar las causas de la deserción") 
        .cajon--azul.p-4
          .row.align-items-center
            .col-lg-4
              img.img-a(src="@/assets/curso/tema_4/img_9.png").img-fluid
            .col-lg-8
              p Análisis de las cifras establecidas en los indicadores que se encuentran en los sistemas de información Simpade, Simat y en los documentos de referencia de los riesgos de cada contexto. 

      .row.mb-3(titulo="Análisis de estrategias que mitiguen las causas de deserción priorizadas") 
        p.mb-3 Para este análisis se deben tener en cuenta las estrategias para la permanencia escolar. 
        .cajon--azul.p-4.mb-5
          .row.align-items-center
            .col-lg-4
              img.img-a(src="@/assets/curso/tema_4/img_10.png").img-fluid
            .col-lg-8
              p Las estrategias de permanencia se definen como las acciones que permiten identificar y promover el desarrollo de acciones efectivas que reduzcan la deserción y garanticen la continuidad de los niños, niñas y jóvenes en el sistema educativo hasta la culminación de su ciclo de formación.
        .h5.mb-5 Estrategias de permanencia

        .row.justify-content-center.mb-5
          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_11.png").img-fluid
                  .card__copy 
                    .h5.mb-3 Programa de Alimentación Escolar (PAE)
                    p Promover el acceso con permanencia de los niños, niñas, adolescentes y jóvenes en el sistema educativo oficial, a través del suministro de un complemento alimentario durante la jornada escolar.  

          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_12.png").img-fluid
                  .card__copy 
                    .h5.mb-3 Transporte escolar
                    p Contribuye a garantizar el acceso y la permanencia en el sistema educativo, eliminando las barreras de distancia entre la escuela y el hogar.

          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_13.png").img-fluid
                  .card__copy 
                    .h5.mb-3 Transferencias condicionadas a la asistencia
                    p Esta estrategia está vinculada al programa Más Familias en Acción el cual consiste en la entrega, condicionada y periódica de una transferencia monetaria directa para complementar el ingreso y mejorar la salud, educación de los menores de 18 años.
          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_14.png").img-fluid
                  .card__copy 
                    .h5.mb-3 Jornada escolar complementaria (JEC)
                    p Apunta al desarrollo de  programas que incluyen la recreación, la cultura y el deporte, así como espacios que complementan los aprendizajes de manera amena. 
          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_15.png").img-fluid
                  .card__copy 
                    .h5.mb-3 Uniformes y kits escolares
                    p Brinda útiles escolares básicos y uniformes para el desarrollo de las actividades académicas de los niños, niñas y adolescentes que se encuentren en alguna situación de vulnerabilidad. 
          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_16.png").img-fluid
                  .card__copy 
                    .h5.mb-3 Gratuidad
                    p Posibilita el acceso de todos los niños, niñas y adolescentes al sistema educativo, puesto que la condición de insuficiencia económica deja de ser un obstáculo para lograr equidad.
          .col-12.col-md-10
            hr.bd-hr
            .card-media
              .card-media__body                 
                  figure.card__figure
                      img.img-a(src="@/assets/curso/tema_4/img_17.png").img-fluid
                  .card__copy 
                    .h5.mb-3 Modelos educativos flexibles
                    p Su objetivo es restituir y garantizar el derecho fundamental de la educación a la población que se encuentra en situación de extra edad, desplazamiento, en condiciones de vulnerabilidad o en situaciones diversas o que les impide acceder a la educación formal.

        .cajon--azul.p-4
          .row.align-items-center
            .col-lg-4
              img.img-a(src="@/assets/curso/tema_4/img_18.png").img-fluid
            .col-lg-8
              p Es necesario que todos los actores involucrados en el proceso de protección integral, y en acciones que promueven la restitución y la garantía de los derechos de los niños, niñas y adolescentes, tengan el conocimiento y la apropiación de las estrategias de permanencia como parte integral de la política educativa y en los procesos de planeación, organización y administración para el mejoramiento y la calidad de la prestación del servicio educativo.  

      .row.mb-3(titulo="Definición del plan de permanencia por estrategia propuesta") 
        .cajon--azul.p-4
          .row.align-items-center
            .col-lg-4
              img.img-a(src="@/assets/curso/tema_4/img_19.png").img-fluid
            .col-lg-8
              p.mb-4 Para definir el plan de permanencia se deben incluir  la estrategia propuesta, las  metas,  los recursos y  la población a beneficiar.
              P Para la construcción de los planes de permanencia se deben definir las acciones a desarrollar abordando cada una de las estartegias de permanencia definidas por cada Entidad Territorial Certificada y tener en cuenta 5 componentes principales por desarrollar Prevención y Erradicación Del Trabajo Infantil, Atención A Niños, Niñas y Adolescentes En Condición De Discapacidad, Atención A Población Víctima, Fortalecimiento De La Educación Media y Estrategias De Búsqueda Activa.

      .row.mb-3(titulo="Seguimiento a los avances logrados en el Plan de Permanencia") 
        .cajon--azul.p-4
          .row.align-items-center
            .col-lg-4
              img.img-a(src="@/assets/curso/tema_4/img_20.png").img-fluid
            .col-lg-8
              p Una vez se haya diseñado el plan de acción de las estrategias propuestas se debe garantizar la implementación y el seguimiento de las acciones, para ello se deben establecer las fechas de inicio de implementación de las actividades, fecha de cumplimiento de la meta y fecha de seguimiento.

      .row.mb-3(titulo="Evaluación de los resultados obtenidos con la implementación de las estrategias propuestas en el Plan de Permanencia") 
        .cajon--azul.p-4
          .row.align-items-center
            .col-lg-4
              img.img-a(src="@/assets/curso/tema_4/img_21.png").img-fluid
            .col-lg-8
              p Este proceso es fundamental para establecer el cumplimiento de las  acciones formuladas y continuar con  las estrategias planteadas o generar otras que permitan garantizar la permanencia escolar. 

    .titulo-segundo
      #t_4_1.h4 4.1  Actividad didáctica

    .crd_complete
      .row.justify-content-center.align-items-center
        .col-auto.me-5
          img(src="@/assets/componentes/img_actividad.svg", style="width:450px")
        .col
          .titulo-segundo.mb-4
            .h4 Estrategias para la permanencia escolar
          p.mb-4 Mediante la siguiente actividad se busca fortalecer los conocimientos adquiridos sobre las estrategias para la permanencia escolar. 

          a.boton.boton--b(:href="obtenerLink('actividad/index.html')" target="_blank" type="application/pdf")
            span Iniciar
            i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
