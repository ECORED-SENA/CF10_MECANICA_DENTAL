<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Proceso de diseño y elaboración

    p.mb-5(data-aos="fade-right") Existen una gran variedad de diseños de prótesis parcial removible. Se estima que se pueden hacer 65.000 combinaciones de dientes y espacios edéntulos en una arcada. El problema que se encuentra al revisar los diseños realizados en los laboratorios dentales es que estos no cumplen con las características que debe poseer cada parte de la prótesis parcial removible, como localización, forma y tamaño, el conector mayor, cantidad y uniformidad del alivio, uso inadecuado de retención indirecta (en exceso o muy pobre), uso incorrecto de retenedores directos, etcétera.

    .d-flex.flex-wrap.mb-5(style="background: linear-gradient(90deg, rgba(229,241,248,1) 44%, rgba(247,252,255,1) 85%);")
      .col-xl-1.d-none.d-xl-flex.align-items-start.mt-5.p-3
        img(src="@/assets/curso/temas/tema1/decorador.svg" style="max-width: 61px" data-aos="fade-right")
      p.p-3.p-md-4.col-xl-7.order-2.my-auto(data-aos="fade-right") Todo esto va en perjuicio del paciente y en realidad, aunque el dentista envíe el diseño adecuado para la situación clínica, si el laboratorio no realiza cada parte de la prótesis parcial removible con las características que deben tener será igualmente un fracaso.
        br
        br
        |Los componentes de una prótesis parcial removible deben ser los necesarios y en el lugar indicado, sin sacrificar funcionalidad ni afectar la rehabilitación. Es decir, que sea un diseño simple, confortable, funcional y que ayude a preservar las estructuras de soporte.
      .col-xl-3.mb-4.mb-xl-0.order-1.order-xl-3.mx-auto
        img(src="@/assets/curso/temas/tema6/img-1.png" data-aos="fade-left")
    p.mb-5(data-aos="fade-right") Para comprender sobre el diseño y fabricación de prótesis fijas de manera analógica, se invita a ver los siguientes videos.

    LineaTiempoD.linea-tiempo-edit(data-aos="fade-right")
      div(numero="1" titulo="Proceso de diseño y elaboración 1 (análogo): Diseño")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/VN0goQBImMo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="2" titulo="Paralerizado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/LEvZ1wEchrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="3" titulo="Proceso de diseño y elaboración 1 (análogo): Duplicado de modelo")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/jMbZ9SrS8yU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="4" titulo="Proceso de diseño y elaboración 1 (análogo): Vaciado del modelo duplicado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/r_Q8Xv1h8Qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="5" titulo="Proceso de diseño y elaboración 1 (análogo): Encerado de estructura")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/IYRrMIA_NFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="6" titulo="Proceso de diseño y elaboración 1 (análogo) : Adición de viaductos")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/w-cIKpIChx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="7" titulo="Proceso de diseño y elaboración 1 (análogo) : Revestido o anillado de la estructura")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/iZ0ufRD6ixA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="8" titulo="Proceso de diseño y elaboración 1 (análogo) : Elementos de protección personal")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/amWzuvcWVC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="9" titulo="Proceso de diseño y elaboración 1 (análogo): Fundición")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/fQpDTI6ZibA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="10" titulo="Proceso de diseño y elaboración 1 (análogo): Decapado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/E5BsIvVFYAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      div(numero="11" titulo="Proceso de diseño y elaboración 1 (análogo): Arenado")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/npnWf0gjoP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
