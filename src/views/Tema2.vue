<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Los factores de riesgo de la deserción
    
    .bloque-texto-a.p-4.p-md-5.mb-5.color_bloque_a
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4
          img.img-a(src='@/assets/curso/tema_2/img_6.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Existen múltiples factores que generan que el estudiante abandone la escuela. Cada caso es particular y las razones para su no continuidad en el sistema escolar también lo son; sin embargo, es importante identificar todos los riesgos posibles que afectan la permanencia escolar con el objetivo de generar las acciones de prevención pertinentes. 

    .row.align-items-center.mb-5
      .col-lg-4
        img.img-a(src='@/assets/curso/tema_2/img_1.png')
      .col-lg-8
        p De acuerdo con los resultados obtenidos en la Encuesta Nacional de Deserción (ENDE) aplicada en el año 2010 y con la información suministrada por algunas entidades territoriales, se han establecido algunos factores de riesgo que se reúnen en tres grandes grupos: causas personales, causas contextuales y causas institucionales. A continuación, se estudiarán cada una de ellas.        

    .titulo-segundo
      #t_2_1.h4 2.1 Causas personales

    p.mb-3 Los factores de riesgo asociados a causas personales se vinculan directamente con la relación entre el o la estudiante y el sistema educativo. Involucra factores biológicos y psicológicos propios de cada individuo que le impiden permanecer y/o adaptarse al ambiente escolar. 

    p.mb-5 En la siguiente figura se referencian los factores de riesgo más recurrentes, según la ENDE (2010):

    .h5.text-center.mb-3 Factores de riesgo personales

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_2/img_2.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota. Adaptada de Encuesta Nacional de Deserción - ENDE (2010).

    .titulo-segundo
      #t_2_2.h4 2.2 Causas contextuales 

    p.mb-5 Los factores de riesgo relacionados a causas contextuales, es decir, hacen parte de las problemáticas propias del contexto que rodean al individuo y se vinculan a todos los factores de tipo social, económico, geográfico, cultural y familiar. Algunas de las más relevantes son:

    .h5.text-center.mb-3 Factores de riesgo contextuales

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_2/img_3.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota. Adaptada de Encuesta Nacional de Deserción - ENDE (2010).

    .titulo-segundo
      #t_2_3.h4 2.3 Causas institucionales

    p.mb-5 Los factores de riesgo institucionales están asociados a las causas propias del sistema educativo que, si bien es cierto están relacionadas con las causas anteriormente descritas, se refieren de manera directa a los lineamientos de política educativa que se dan a nivel nacional y la manera como se ejecutan en cada territorio por las autoridades competentes, en este caso particular por las secretarías de educación, rectores y docentes. Entre los factores de riesgos institucionales se encuentran:  

    .h5.text-center.mb-3 Factores de riesgo institucionales

    figure.mb-5
      img.img-a(src='@/assets/curso/tema_2/img_4.png', alt='Nota: con base en Datos Encuesta de Calidad de Vida - ECV, 2018-2019 (DANE, 2020).')
      figcaption.mt-3 Nota. Adaptada de Encuesta Nacional de Deserción - ENDE (2010).

    .cajon--azul.p-4.mb-5
      .row.align-items-center
        .col-lg-4
          img.img-a(src="@/assets/curso/tema_2/img_5.png")
        .col-lg-8
          p El sistema educativo en general, y en particular cada institución educativa, debe identificar los factores de riesgo que influyen en el proceso de deserción. Esto implica que se analicen las causas y se planteen estrategias encaminadas al mejoramiento en los niveles de acceso y permanencia escolar sin dejar de lado las prácticas que promueven la calidad educativa. 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
