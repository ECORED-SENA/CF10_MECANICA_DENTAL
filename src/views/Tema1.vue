<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normativa nacional para laboratorios de mecánica dental
    
    p.mb-5 La línea de prótesis parcial removible son dispositivos extraíbles que permiten sustituir desde uno hasta muchos dientes; y estas se anclan por medio de retenedores a dientes remanentes para reemplazar algunas piezas y no la arcada completa. 
      br
      br
      |El laboratorio es un establecimiento único, cuya titularidad puede recaer en cualquier persona física o jurídica, pero que, normativamente, debe estar dirigido por un protésico dental titulado y contar tanto con materiales, como medidas de seguridad e higiene específicas.
    
    
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
