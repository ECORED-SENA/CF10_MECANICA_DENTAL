<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Prescripción clínica
    
    p.mb-5(data-aos="fade-right") La prescripción deberá estar sustentada en una evaluación previa del paciente, se realizará en idioma español, en forma escrita, sea manuscrita, mecanográfica, medio electromagnético o computarizada. No podrá contener enmendaduras o tachaduras, siglas, claves, abreviaturas o símbolos, diferentes a los estipulados en lex - artis o convenciones internacionales y contendrá la siguiente información:

    .mb-5.p-4(style="background-color: #E7F9FA")
      .col-xl-10.d-flex.flex-wrap.align-items-center.mx-auto
        .col-lg-5.mb-4.mb-lg-0
          img(src="@/assets/curso/temas/tema5/img-1.svg" data-aos="fade-right")
        .col-lg-7.ps-lg-4
          p(data-aos="fade-left") #[b(style="color: #0273BC") ●] Nombre legible del prestador de servicios de salud, dirección, número telefónico o dirección electrónica, número de registro profesional de quien prescribe.
            br
            |#[b(style="color: #0273BC") ●] Lugar y fecha de la prescripción.
            br
            |#[b(style="color: #0273BC") ●] Nombre del paciente y documento de identificación.
            br
            |#[b(style="color: #0273BC") ●] Número de la historia clínica. 
            br
            |#[b(style="color: #0273BC") ●] Nombre del dispositivo médico a la medida prescrito con sus características.
            br
            |#[b(style="color: #0273BC") ●] Indicaciones que a su juicio considere el prescriptor (consideraciones anatómicas, fisiológicas, etc.).
            br
            |#[b(style="color: #0273BC") ●] Vigencia de la prescripción. La prescripción del dispositivo médico sobre medida bucal vence en seis (6) meses. Una vez transcurrido este tiempo, y al no haber concluido el trabajo, es necesario una nueva valoración del paciente y con fundamento a lo cual se determinará iniciar nuevamente el proceso de fabricación.
            br
            |#[b(style="color: #0273BC") ●] Firma del odontólogo tratante.
    p.mb-5(data-aos="fade-right") La orden de trabajo de una prótesis parcial removible enviada por el odontólogo tiene las siguientes especificaciones: 

    .d-flex.flex-wrap
      .col-xl-7
        LineaTiempoD.linea-tiempo-edit(data-aos="fade-right")
          p(numero="1" titulo="Seleccionar") Indica si es una prótesis removible superior, inferior o ambas arcadas. 
          p(numero="2" titulo="Optar") Se encuentra una marca del material con el cual será realizada la prótesis removible (cromo-cobalto, acrílico, oro tipo VII, titanio).
          p(numero="3" titulo="Clasificación de Kennedy") Menciona el tipo de arcada según la clasificación de Kennedy.
          p(numero="4" titulo="Conector mayor") #[b(style="color: #0273BC") ●] Tipo de conector mayor. 
            br
            |#[b(style="color: #0273BC") ●] Maxilar superior: barra palatina posterior, placa palatina, conector en U, barra palatina anteroposterior, placa palatina en herradura cerrada, placa palatina total. 
            br
            |#[b(style="color: #0273BC") ●] Maxilar inferior: barra lingual, barra sublingual, barra lingual doble o barra de Kennedy, placa lingual, barra vestibular. 
            br
            |#[b(style="color: #0273BC") ●] Forma al corte transversal (media pera, laminar).
            br
            |#[b(style="color: #0273BC") ●] Descripción de borde anterior o superior (posición y distancia de la encía inserta).
            br
            |#[b(style="color: #0273BC") ●] Descripción de bordes laterales (posición y distancia de la encía inserta). 
            br
            |#[b(style="color: #0273BC") ●] Descripción de borde posterior o inferior (posición y distancia de las foveolas palatinas). 
            br
            |#[b(style="color: #0273BC") ●] Línea de terminado (ubicación) indica el ancho mínimo de los componentes, así como la distancia a la que se encuentran del borde libre de la encía, del piso de boca o de las foveolas palatinas. Explicar en qué lugar se une el conector mayora la rejilla de retención y especificar que la línea de terminado es bien definida.
          p(numero="5" titulo="Conectores menores") Indica entre qué piezas o el lado en el que se encuentra (mesial o distal).
          p(numero="6" titulo="Retenedores directos") #[b(style="color: #0273BC") ●] Pieza: número de pieza según la Nomenclatura Universal de Palmer en la que se colocará el retenedor directo. 
            br
            |#[b(style="color: #0273BC") ●] Tipo: indica la forma del retenedor directo (circunferencial, RPI, doble circunferencial, circunferencial reverso, circulares múltiples, en anillo, en C, onlay, combinado, en T, en Y) 
            br
            |#[b(style="color: #0273BC") ●] Descanso: específica en la superficie del diente que se encuentra (mesio-oclusal, disto-oclusal, lingual).
            br
            |#[b(style="color: #0273BC") ●] Plano guía: la superficie (distal, mesial, lingual). 
            br
            |#[b(style="color: #0273BC") ●] Material: indica el material con el que se realizará el retenedor directo (cromo-cobalto, alambre forjado, combinado, otro).

          p(numero="7" titulo="Retención indirecta") Ubica la pieza en la cual se colocará y la superficie (mesio-oclusal, disto-oclusal, lingual, etc.)
          p(numero="8" titulo="Rejillas de retención") #[b(style="color: #0273BC") ●] Largo de la rejilla: cubriendo todo el proceso hamular en el maxilar superior y 2/3 del largo del espacio edéntulo en el maxilar inferior.
            br
            |#[b(style="color: #0273BC") ●] Extensión de la rejilla: desde la parte más prominente del reborde edéntulo 1 milímetro hacia bucal (por lingual hasta la mitad de la altura del reborde edéntulo, por palatal hasta donde se encontraba la encía inserta).
            br
            |#[b(style="color: #0273BC") ●] Tope: en distal de la rejilla, de 2 x 2 milímetros de tamaño (solo se coloca tope en las rejillas de extensión distal).

          p(numero="9" titulo="Diagrama") Dibujo de la arcada con el diseño del aparato removible. El diseño debe incluir una indicación de los dientes ausentes. 
          p(numero="10" titulo="Material y color de dientes") Debe mencionar el material de los dientes y el color que se va a utilizar.

      .col-5.d-none.d-xl-flex.ps-4
        img(src="@/assets/curso/temas/tema5/img-2.jpg" data-aos="fade-left")
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

<style lang="sass">
.linea-tiempo-edit
</style>
