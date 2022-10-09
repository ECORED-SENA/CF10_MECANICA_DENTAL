<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Control de calidad
    p.mb-5(data-aos="fade-right") El control de calidad es un tema bastante importante en la fabricación de los diferentes dispositivos dentales y el de prótesis fija no es la excepción, ya que, desde la recepción, tanto de la impresión como el registro de mordida y el modelo antagonista, se hace necesario la desinfección de estos, para dar inicio con la elaboración del producto solicitado por el profesional de la odontología.

    .col-xl-10.mx-auto.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img-1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Una vez realizada esta acción, se debe verificar que en cada área del laboratorio se cumpla con los estándares de calidad establecidos en cada espacio de trabajo, esto conlleva a permitir la entrega de un producto en óptimas condiciones, además de no generar retrocesos en la producción de los dispositivos y pérdidas al laboratorio dental.
      p.mb-5(data-aos="fade-right") Después de la fabricación, los criterios de calidad de una prótesis parcial removible para el paciente son: 

      img.d-none.d-md-flex(src="@/assets/curso/temas/tema7/img-2.svg" data-aos="fade-left")
      img.d-flex.d-md-none(src="@/assets/curso/temas/tema7/img-2-movil.svg" data-aos="fade-left")
    .tarjeta.row.mb-5(style="overflow: hidden;")
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/t1.svg')
        p.px-xl-5 El dispositivo médico sobre medida bucal terminado deberá contar con las siguientes verificaciones que se consignarán en un registro que contenga: 
          br
          br
          |#[b(style="color: #13C6CC") ●] Las características de fabricación realizada por el personal técnico responsable de control de calidad, bajo la supervisión del director técnico. 
          br
          br
          |#[b(style="color: #13C6CC") ●] El cumplimiento de la prescripción y de los requisitos de calidad del producto terminado, a cargo del director técnico.
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color: #E7F9FA" data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema7/t2.svg')
        p.px-xl-5 Los establecimientos deberán cumplir los siguientes requisitos de control de calidad: 
          br
          br
          |#[b(style="color: #13C6CC") ●] Certificados de análisis/fichas técnicas, cuando aplique, entregados por el proveedor de materias primas, componentes e insumos, que se utilizan en la fabricación de dispositivos médicos sobre medida bucal. 
          br
          br
          |#[b(style="color: #13C6CC") ●] Registro de la verificación de los puntos críticos, análisis de las desviaciones encontradas en los dispositivos de cada línea y acciones de mejora para la corrección de dichas desviaciones.

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
