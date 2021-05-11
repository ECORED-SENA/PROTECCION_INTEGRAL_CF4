<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Deserción escolar 

    .bloque-texto-a.p-4.p-md-5.mb-5.color_bloque_a
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4
          img.img-a(src='@/assets/curso/tema_1/img_1.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 La educación es considerada como la herramienta fundamental para generar equidad en cualquier nación. En el caso particular de Colombia, el acceso al sistema educativo es el mecanismo que permite cerrar las brechas existentes como consecuencia de los procesos sociales y económicos de cada región. 

            p Debido a lo anterior, la escuela se convierte en un espacio que propende por la formación integral de los niños, niñas y adolescentes y a su vez es un entorno protector y debe apoyar los procesos en pro de la garantía de los derechos. 

              .col-lg-4
                

    p.mb-3 Durante el proceso de escolaridad se pueden establecer varias dificultades, pero, sin duda, la más relevante es el fenómeno de la deserción escolar, el cual se define como la inasistencia de los niños, niñas y adolescentes (NNA) al sistema educativo y puede estar asociado a factores individuales, familiares, institucionales, sociales, económicos y culturales.

    p.mb-5 En la siguiente infografía, se presentan las principales causas, de acuerdo con lo indicado por el Ministerio de Educación Nacional (2019):

    .list.mb-3
      .list__item
        .list__item__icon
          img.img-a(src="@/assets/curso/tema_1/img_2.png").img-fluid
      .list__txt
        .h5.m-top Deserción escolar

    p.mb-3 Se da cuando las niñas, niños y adolescentes abandonan, interrumpen o se desvinculan de la escuela y no logran culminar sus estudios. 

    p.mb-5 Principales causas:

    .row.mb-3
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_1/img_3.png' alt='AvatarTop')
          .tarjeta.tarjeta--blanca.p-4.color_card
            p.text-center Bajo desempeño escolar


      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/tema_1/img_4.png' alt='AvatarTop')
          .tarjeta.tarjeta--blanca.p-4.color_card
            p.text-center Desempleo de los padres

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.img-a(src='@/assets/curso/tema_1/img_5.png' alt='AvatarTop')
          .tarjeta.tarjeta--blanca.p-4.color_card
            p.text-center Poco gusto por el estudio

      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img.img-a(src='@/assets/curso/tema_1/img_6.png' alt='AvatarTop')
          .tarjeta.tarjeta--blanca.p-4.color_card
            p.text-center Cambio de residencia 

    .row.justify-content-center.mb-5
      .col-lg-3
        .color_card.p-2
          p.text-center 
            strong Tasa de deserción nacional – 2017
      .col-lg-2 
        .color_card.p-2.color_card_1
          p.text-center 
            strong 3,08% 
      .col-lg-3
        .color_card.p-2
          p.text-center 
            strong Meta 2022
      .col-lg-2 
        .color_card.p-2.color_card_2
          p.text-center 
            strong 2,7%


  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
