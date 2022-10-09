<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Proceso de diseño y elaboración

    p.mb-5(data-aos="fade-right") Existen una gran variedad de diseños de prótesis parcial removible. Se estima que se pueden hacer 65.000 combinaciones de dientes y espacios edéntulos en una arcada. El problema que se encuentra al revisar los diseños realizados en los laboratorios dentales es que estos no cumplen con las características que debe poseer cada parte de la prótesis parcial removible, como localización, forma y tamaño el conector mayor, cantidad y uniformidad del alivio, uso inadecuado de retención indirecta (en exceso o muy pobre), uso incorrecto de retenedores directos, etcétera.

    .d-flex.flex-wrap.mb-5(style="background: linear-gradient(90deg, rgba(229,241,248,1) 44%, rgba(247,252,255,1) 85%);")
      .col-xl-1.d-none.d-xl-flex.align-items-start.mt-5.p-3
        img(src="@/assets/curso/temas/tema1/decorador.svg" style="max-width: 61px" data-aos="fade-right")
      p.p-3.p-md-4.col-xl-7.order-2.my-auto(data-aos="fade-right") Todo esto va en perjuicio del paciente y en realidad, aunque el dentista envíe el diseño adecuado para la situación clínica, si el laboratorio no realiza cada parte de la prótesis parcial removible con las características que deben tener será igualmente un fracaso.
        br
        br
        |Los componentes de una prótesis parcial removible deben ser los necesarios y en el lugar indicado, sin sacrificar funcionalidad ni afectar la rehabilitación. Es decir, que sea un diseño simple, confortable, funcional y que ayude a preservar las estructuras de soporte.
      .col-xl-3.mb-4.mb-xl-0.order-1.order-xl-3.mx-auto
        img(src="@/assets/curso/temas/tema6/img-1.png" data-aos="fade-left")
    p.mb-5(data-aos="fade-right") Para comprender sobre el diseño y fabricación de prótesis fijas de manera analógica, se invita a ver el siguiente video.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-right") Para conocer cómo se realiza el diseño y fabricación de prótesis fijas de manera digital se puede ver este video:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema3',
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
