<template>
  <section class="container has-text-centered">
    <img src="/assets/logo.svg" alt="Informix" class="page-logo">
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-logo {
  width: 95%;
  max-height: 100%;
}
</style>
