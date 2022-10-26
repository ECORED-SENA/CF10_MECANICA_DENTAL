<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación
    
    p.mb-5(data-aos="fade-right") La clasificación topográfica divide los casos de acuerdo a cómo se disponen las brechas desdentadas y los dientes remanentes en la arcada. La clasificación de Kennedy es una de las más antiguas y es aceptada en forma universal, se fundamenta en la topografía, es decir en la relación que guardan las brechas desdentadas con los dientes remanentes. Esta clasificación se divide en cuatro clases  como se presentan a continuación. 

    TabsC.tabs-c-edit.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-3.py-md-4(titulo="Clase I")
        .row.col-xl-11.mx-auto.py-4
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-2.png')
          .col-md-6.mb-4.mb-md-0
            h4 Clase I: desdentado bilateral posterior.
            p Es decir, que presenta ambas zonas posteriores desdentadas permaneciendo el grupo anterior. Según el número de brechas provocadas en el grupo anterior por las piezas dentarias ausentes, dará como resultado las diferentes subdivisiones de la clase.
      
      .py-3.py-md-4(titulo="Clase II")
        .row.col-xl-11.mx-auto.py-4
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-3.png')
          .col-md-6.mb-4.mb-md-0
            h4 Clase II: desdentado unilateral posterior.
            p Presenta la zona posterior de un solo de un lado, desdentada. Esta clase admite también subdivisiones según el número de espacios desdentados existentes, aparte de aquel que dé la clase.
      .py-3.py-md-4(titulo="Clase III")
        .row.col-xl-11.mx-auto.py-4
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-4.png')
          .col-md-6.mb-4.mb-md-0
            h4 Clase III: desdentado unilateral con pilar posterior.
            p La característica de esta clase es que el espacio desdentado se encuentra entre piezas dentarias remanentes, es decir, que hay una brecha posterior de un solo lado, pero esta empieza con una pieza dentaria a la que se llamará diente pilar. Esta clase también tiene subdivisiones
              br
              br
              |Aclaración: cuando las brechas son múltiples se debe considerar la brecha más posterior, la cual determinará la clase y las restantes darán la subdivisión.
      .py-3.py-md-4(titulo="Clase IV")
        .row.col-xl-11.mx-auto.py-4
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-5.png')
          .col-md-6.mb-4.mb-md-0
            h4 Clase IV: desdentado bilateral anterior.
            p Esta clase no admite subdivisiones. Porque si presentara más de una brecha desdentada estaría encuadrada dentro de las clases I, II, III.
    
    .col-xl-10.mb-5.mx-auto
      p(data-aos="fade-right") Para facilitar el empleo de la clasificación de Kennedy fueron propuestas las #[b(style="color: #0273BC") reglas de #[em Applegate]] con el objeto de considerar todas aquellas situaciones que eran difíciles de definir, a saber: 

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-12.col-xl-6.order-2.order-xl-1
        SlyderF.tarjtas-slyder-f.w-100(columnas="col-12" data-aos="fade-right")
          .col-12
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 01
              .col.p-4.d-flex.align-items-center
                p.mb-0 La clasificación debe ser después de, y no antes de realizar extracciones dentales que podrían alterar la clasificación original.
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 02
              .col.p-4.d-flex.align-items-center
                p.mb-0 Si falta un tercer molar y no va a ser reemplazado, no se le considera para la clasificación.
          
          .col-12
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 03
              .col.p-4.d-flex.align-items-center
                p.mb-0 Si se haya presente un tercer molar y será utilizado como pilar se le considera en la clasificación.
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 04
              .col.p-4.d-flex.align-items-center
                p.mb-0 Si falta un segundo molar y no va a ser reemplazado, porque no existe diente antagonista, no se le considera para la clasificación.
          
          .col-12
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 05
              .col.p-4.d-flex.align-items-center
                p.mb-0 El área desdentada más posterior será la que determine la clasificación.
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 06
              .col.p-4.d-flex.align-items-center
                p.mb-0 Las áreas desdentadas distintas de aquellas que determinan la clasificación se denominan modificadas o subdivisiones y designadas por su número.
          
          .col-12
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 07
              .col.p-4.d-flex.align-items-center
                p.mb-0 La extensión del área de modificación no tiene valor, el factor determinante es el número de áreas.
            .tarjeta.tarjeta--azul.d-flex.mb-3.w-100(style="overflow: hidden; min-height: 144px")
              .d-flex.align-items-center.justify-content-center(style="width: 85px; background-color: #0273BC;")
                span(style="font-size: 35px; color: white; font-weight: bold;") 08
              .col.p-4.d-flex.align-items-center
                p.mb-0 Solo las clases I, II y III pueden tener subdivisiones.
      .col-xl-4.order-1.order-xl-2.mx-auto.mb-4.mb-xl-0
        img(src='@/assets/curso/temas/tema2/img-6.png' style="max-width: 400px" data-aos="fade-left")
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1  Principios de la prótesis
    
    p.mb-5(data-aos="fade-right") Una prótesis dental removible es una estructura metálica con varios dientes artificiales fijados en sus laterales. Para ofrecer una mejor fijación, las prótesis dentales removibles se anclan a los dientes que el paciente aún conserva en su boca mediante unas sujeciones metálicas; a continuación se profundiza sobre este tipo de prótesis.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5(data-aos="fade-right") Las Prótesis Parciales Removibles (PPR) se componen de dientes artificiales puestos sobre estructuras metálicas y, dependiendo de la condición clínica, pueden ir sobre una silla protésica con base de acrílico y de elementos de anclaje y unión. Esta silla o base se apoya sobre la encía cubriendo la zona de la arcada en la que faltan las piezas dentales. 

    .p-4(style="background-color: #E7F9FA")
      .col-xl-10.mx-auto
        p.mb-4(data-aos="fade-right") Los elementos que constituyen una prótesis parcial removible son: los apoyos, los retenedores, los conectores mayores, los conectores menores, las retenciones para las bases acrílicas y la extensión de las bases. 
          br
          br
          |#[span(style="color: #0273BC") ●] El apoyo es una extensión rígida de la estructura metálica que transmite las fuerzas funcionales de los dientes y evita la intrusión de la prótesis hacia los tejidos blandos.
          br
          |#[span(style="color: #0273BC") ●] Los retenedores son los elementos que ofrecen resistencia al desplazamiento, y cumplen con los requisitos de soporte, retención, estabilidad, reciprocación (la fuerza ejercida sobre el pilar por el brazo retentivo debe ser neutralizada por una fuerza igual y opuesta, es decir, por el brazo estabilizador), circunvalación (el retenedor debe cubrir las tres cuartas partes del perímetro del pilar) y pasividad (el retenedor no debe ejercer fuerza activa sobre el pilar, esta solo es ejercida ante una fuerza que intenta desplazar la prótesis).
          br
          |#[span(style="color: #0273BC") ●] Los conectores sirven para distribuir las fuerzas horizontales y evitar deformaciones elásticas las bases de las prótesis parciales deben unirse con un conector mayor resistente.
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Esquema de dispositivos protésicos de ambos maxilares que señalan todos los elementos conformantes
        figure.mb-5
          img.d-none.d-md-flex(src='@/assets/curso/temas/tema2/img-7.jpg' data-aos="fade-left")
          img.d-flex.d-md-none(src='@/assets/curso/temas/tema2/img-7-movil.jpg' data-aos="fade-left")
          figcaption Nota. Tomada de González (2009).
    
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Evolución de la prótesis removible
    
    p.mb-5(data-aos="fade-right") Las enfermedades han aquejado a la humanidad desde sus inicios, en especial el agudo y lancinante dolor dentario producido por una caries profunda o un absceso periapical. Además, las técnicas curativas y rehabilitadoras han sido practicadas por muchos médicos a lo largo de la historia, por lo que la confección y fabricación de prótesis dentales es una tarea importante desde la Antigüedad, a continuación se presenta esta evolución: 

    .tarjeta.tarjeta--gris.p-4.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-8.svg')})`}"
      style="background-repeat: no-repeat; background-size: cover;"
      data-aos="fade-left")
      LineaTiempoC.linea-tiempo-c-edit.color-acento-contenido(text-small)
        .row.col-xl-11.mx-auto(titulo="45 a.C.")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-9.jpg')
          .col-md-6.mb-4.mb-md-0
            p Dentaduras fijas y removibles fueron empleadas por los romanos en 45 a. de C. En 35 a. de C. Horacio hace referencia a las prótesis dentales romanas.
        
        .row.col-xl-11.mx-auto(titulo="500 a.C.")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-10.jpg')
          .col-md-6.mb-4.mb-md-0
            p Prótesis Etrusca 500 a. de C. Se observan algunos instrumentos usados por los dentistas antes de esta era, primera incrustación dentaria maya, hecha de jade y turquesa, puentes artificiales en marfil descubiertos en fenicia, fórceps árabe para extraer dientes rotos.
        
        .row.col-xl-11.mx-auto(titulo="1600 - 1840")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-11.jpg')
          .col-md-6.mb-4.mb-md-0
            p De 1600 a 1840 quedaron establecidos los cimientos de la odontología como ciencia. En Francia y Alemania e Italia se utilizaban dientes de hueso y marfil tallados sujetos a los dientes vecinos con alambres de oro y plata. En 1700 Mattheus Gottfried Purmann es el primer autor que habla del uso de modelos de cera para trabajos protésicos.  
          
        .row.col-xl-11.mx-auto(titulo="1728")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-12.jpg')
          .col-md-6.mb-4.mb-md-0
            p En 1728 Pierre Fauchaurd describe en su libro diversas técnicas quirúrgicas y protésicas, Lorenz Heister (1683-1758) fue el primero que empezó a hablar de prótesis removibles.
        
        .row.col-xl-11.mx-auto(titulo="1789")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-13.jpg')
          .col-md-6.mb-4.mb-md-0
            p En 1789 se utiliza la porcelana cocida para la fabricación de dientes, en 1778 Nicholas Dubois, dentista francés, presentó por primera vez una dentadura completa de porcelana cocida, Pierre Fauchard describió cómo se deben hacer los puentes y las dentaduras completas; propuso usar dientes humanos, marfil, toro o elefante.
        
        .row.col-xl-11.mx-auto(titulo="Siglo XIX")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-14.jpg')
          .col-md-6.mb-4.mb-md-0
            p A finales del siglo XIX se conocían los principios fundamentales en los que se basan procedimientos tales como: obtención de impresiones, construcción de dentaduras parciales y totales.
        
        .row.col-xl-11.mx-auto(titulo="1935")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-15.jpg')
          .col-md-6.mb-4.mb-md-0
            p En 1935 se comienza a usar la resina acrílica polimerizada como base para los dientes artificiales. Y a partir de allí se estudian día a día formas y nuevas técnicas para mejorar su aspecto.
        
        .row.col-xl-11.mx-auto(titulo="Actual I")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-16.jpg')
          .col-md-6.mb-4.mb-md-0
            p Durante los últimos años se producen avances tecnológicos y biológicos muy importantes en las prótesis.
        
        .row.col-xl-11.mx-auto(titulo="Actual II")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-17.jpg')
          .col-md-6.mb-4.mb-md-0
            p La evolución para el área de las prótesis removibles se enfoca en las estructuras metálicas, ya que con la llegada del CAD-CAM, el #[em software] de diseño, cada día se integran innovadoras herramientas de trabajo que conceden el mayor aprovechamiento de los recursos informáticos en la ejecución del diseño individual de cada caso clínico.
        
        .row.col-xl-11.mx-auto(titulo="Actual III")
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/img-18.jpg')
          .col-md-6.mb-4.mb-md-0
            p Las nuevas tecnologías, como es el caso del CAD-CAM, son una verdadera oportunidad de trabajo para los profesionales y los laboratorios en la que se combina lo artesanal con lo digital, ya que desempeñan un papel importante. Las nuevas tecnologías han cambiado los protocolos de trabajo en el laboratorio dental e, incluso, han mejorado la comunicación entre clínica y laboratorio.
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_3 2.3  Función de la prótesis removible
    
    p.mb-5(data-aos="fade-right") Una prótesis removible es un dispositivo que puede ser retirado por el paciente; se elabora teniendo en cuenta las piezas faltantes de cada persona, donde se sustituyen las piezas que ha perdido en boca de una forma removible, es decir, es una estructura que se quita y pone al que se le colocan los dientes. Algunas de las funciones que tiene la prótesis removible son: 

    .col-xl-10.mx-auto.d-flex.flex-wrap.mb-5
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #E7F9FA; border-right: 8px solid #13C6CC;" data-aos="fade-right")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-1.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Restablecer masticación
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #DCEBF6; border-right: 8px solid #0273BC;" data-aos="fade-right")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-2.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Restablecer estética 
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #E7F9FA; border-right: 8px solid #13C6CC;" data-aos="fade-left")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-1.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Restablecer fonética
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #DCEBF6; border-right: 8px solid #0273BC;" data-aos="fade-left")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-2.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Prevenir la migración, inclinación y obstrucción de dientes remanentes
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #DCEBF6; border-right: 8px solid #0273BC;" data-aos="fade-right")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-1.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Estabilizar los dientes debilitados
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #E7F9FA; border-right: 8px solid #13C6CC;" data-aos="fade-right")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-2.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Preservar los dientes remanentes
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #DCEBF6; border-right: 8px solid #0273BC;" data-aos="fade-left")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-1.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Cumplir con los principios biomecánicos de estabilidad, retención, reciprocidad y fijación 
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #E7F9FA; border-right: 8px solid #13C6CC;" data-aos="fade-left")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-2.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Restablecer un adecuado plano oclusal
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #E7F9FA; border-right: 8px solid #13C6CC;" data-aos="fade-right")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-1.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Recuperar el balance muscular y articular en el complejo orofacial
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #DCEBF6; border-right: 8px solid #0273BC;" data-aos="fade-right")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-2.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Contribuir a la salud oral y general del paciente
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex
        .w-100.p-1(style="background-color: #E7F9FA; border-right: 8px solid #13C6CC;" data-aos="fade-left")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-1.svg" style="max-width: 25px; margin-right: -6px")
          h4.mb-0.p-3.py-xl-4.text-center Mejorar la calidad de vida del paciente
      .col-12.col-md-6.col-lg-4.col-xl-3.px-2.mb-4.d-flex(style="min-height: 160px" data-aos="fade-left")
        .w-100.position-relative.p-1(style="border-right: 8px solid #0273BC; background-size: cover; background-position: center; background-repeat: no-repeat" :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-19.svg')})`}")
          img.ms-auto(src="@/assets/curso/temas/tema1/d-2.svg" style="max-width: 25px; margin-right: -6px")
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_4 2.4  Indicaciones y precauciones
    
    p.mb-5(data-aos="fade-right") Las prótesis removibles están indicadas para reemplazar las piezas dentales ausentes, por eso, al momento de confeccionarlas es importante tener conocimiento no solo de los componentes que puede tener una estructura, sino también de sus indicaciones al momento de realizar su diseño y que como su nombre lo indica es removible con el fin de que el paciente pueda remover el dispositivo para su limpieza. 
      br
      br
      |Las prótesis se deben limpiar, al menos una vez al día, con un cepillo para prótesis o un cepillo con cerdas de nailon. A continuación se presentan otras recomendaciones: 

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row(data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0.order-2.order-md-1
          p Se requiere explicar al paciente que la etapa de adaptación a las nuevas prótesis puede tardar hasta ocho semanas, por lo cual es necesario asistir a los controles de oclusión programados en donde se harán los alivios y ajustes oclusales requeridos  para facilitar este proceso.
        .col-md-6.mb-4.mb-md-0.order-1.order-md-2
          figure
            img(src='@/assets/curso/temas/tema2/img-20.jpg')
      
      .row(data-aos="fade-left")
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/img-21.jpg')
        .col-md-6.mb-4.mb-md-0
          p.text-start En caso de presentar aftas o úlceras, es necesario utilizar enjuagues bucales farmacéuticos o naturales, como la caléndula, y adelantar la cita de control.	 
      
      .row(data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0.order-2.order-md-1
          p El cepillado de los dientes remanentes y de los rebordes residuales debe hacerse con un cepillo de cerda suave tres veces al día con crema y seda dentales donde esté indicado, la prótesis debe ser cepillada con igual frecuencia o en su defecto dos veces al día.
        .col-md-6.mb-4.mb-md-0.order-1.order-md-2
          figure
            img(src='@/assets/curso/temas/tema2/img-22.jpg')
      
      .row(data-aos="fade-left")
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/img-23.jpg')
        .col-md-6.mb-4.mb-md-0
          p.text-start Debe cepillarse con un cepillo de cerda dura y jabón.  Durante la noche se recomienda dormir sin las prótesis y sumergirlas en un vaso con agua y un poco de enjuague bucal o unas gotas de vinagre, o en medio vaso de agua.
      
      .row(data-aos="fade-right")
        .col-md-6.mb-4.mb-md-0.order-2.order-md-1
          p Cuando por razones estéticas y sociales el paciente se resiste a retirarse las prótesis durante la noche, se le indica que debe descansar de ellas mínimo 4 a 6 horas al día. No está indicado sumergirlas en agua caliente o en agua con hipoclorito.
        .col-md-6.mb-4.mb-md-0.order-1.order-md-2
          figure
            img(src='@/assets/curso/temas/tema2/img-24.jpg')
</template>

<script>
export default {
  name: 'Tema2',
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
.tabs-c-edit
  border-bottom: none
  .tabs-c__header
    margin-bottom: 0
  .tabs-c__content-item
    background-image: url('../assets/curso/temas/tema2/img-1.svg')
    background-repeat: no-repeat
    background-size: cover
  .tabs-c__tab
    background-color: #DEE4F0
    border-color: #DEE4F0
    &::after
      background-color: #707070
  .tabs-c__tab--active
    background-color: white
    font-weight: bold
    &::after
      background-color: transparent
.linea-tiempo-c-edit
  .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right
    background-color: #FFE000
    border: none
</style>
