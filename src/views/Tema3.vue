<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de prótesis

    p.mb-5 Existen básicamente dos tipos de prótesis parcial removible de acuerdo con el tipo de soporte que reciben: una es dentosoportada y la otra dentomucosoportada, de extensión distal o de extremo libre.

    .col-xl-10.mb-5.mx-auto
      .cajon.color-primario.p-4.mb-4
        p #[b(style="color: #0273BC") La prótesis dentosoportada,] que es la que restaura espacios edéntulos limitados por piezas dentarias (clase 111 y IV con espacios edéntulos cortos) ofrece una marcada superioridad sobre la prótesis dentomucosoportada, ya que toda la carga la soportan enteramente los dientes pilares puestos en los extremos de los espacios edéntulos. 
    .d-flex.flex-wrap.align-items-center.py-4.mb-5(style="margin-left: -3rem; margin-right: -3rem; min-width: calc(100% + 6rem); padding: 3rem; background: linear-gradient(0deg, rgba(231,249,250,1) 0%, rgba(255,255,255,1) 100%);")
      .col-xl-5.order-2.order-xl-1.pe-xl-4
        p.mb-0 Son aquellas que se soportan en “dientes pilares” que están presentes en la boca del paciente y que previamente se han tallado, imitan a la perfección los dientes perdidos por lo que son muy estéticas y funcionales. 
          br
          br
          |Este tipo de prótesis funciona con mayor semejanza a una prótesis parcial fija, ya que los retenedores directos puestos en dichas piezas neutralizan cualquier desplazamiento de la prótesis en dirección gingival, oclusal u horizontal que se pueda generar como resultado de las fuerzas de la masticación o por la acción de las fuerzas desplazantes y la adhesividad de los alimentos. 
      .col-xl-7.order-1.order-xl-2.mb-4.mb-xl-0
        img(src='@/assets/curso/temas/tema3/img-1.jpg')
    p.mb-5 La prótesis parcial removible de extremo libre, por el contrario, es de tipo dentomucosoportada, lo que equivale a decir que el soporte se lo brindan: 

    .col-lg-10.col-xl-8.d-flex.flex-wrap.mx-auto.mb-5
      .col-12.col-md-6.px-2
        .tarjeta-avatar(style="padding-top: 45px")
          img(src='@/assets/curso/temas/tema3/d-1.svg' style="max-width: 85px")
          .tarjeta.color-primario.w-100(style="background-color: #E5F1F8; padding-top: 30px !important")
            .p-4.px-lg-5
              p(style="color: black") #[b(style="color: #0273BC") A.] La mucosa bucal que recubre los rebordes alveolares residuales.
      .col-12.col-md-6.px-2
        .tarjeta-avatar(style="padding-top: 45px")
          img(src='@/assets/curso/temas/tema3/d-2.svg' style="max-width: 85px")
          .tarjeta.color-primario.w-100(style="background-color: #E5F1F8; padding-top: 30px !important")
            .p-4.px-lg-5
              p(style="color: black") #[b(style="color: #0273BC") B.] Las piezas dentarias. 
    .col-xl-10.mx-auto.mb-5
      p A este grupo pertenecen las clases de Kennedy I, II y IV con espacios edéntulos extensos. Los dientes son soportados por el hueso alveolar al cual están unidos por el ligamento periodontal, que es un tejido fibroso organizado en grupos de fibras. El espesor de este ligamento es de aproximadamente 0,2 mm en aquellos casos en que las fuerzas masticatorias son normales. 
        br
        br
        |Esto significa que los dientes pilares, en condiciones normales bajo presión, pueden instruirse hasta un máximo de 0,2 milímetros. La mucosa bucal que recubre los rebordes alveolares residuales va en contacto directo con la parte interna y los bordes de la prótesis, su espesor aproximado es de 2 mm.
      img.d-none.d-md-flex(src='@/assets/curso/temas/tema3/img-2.jpg')
      img.d-flex.d-md-none(src='@/assets/curso/temas/tema3/img-2-movil.jpg')
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
