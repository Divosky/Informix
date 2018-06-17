<template>
  <section>
    <article class="container content">
      <header class="page-title">
        <h3 class="h1">Pogotowie Komputerowe</h3>
      </header>
      <section>
        <div class="text-center">
          <img :src="'./img/pogotowie.jpg'" alt>
        </div>
        <p class="m-t-2">Jeśli masz zlecenie, które wymaga tego, abyśmy do Ciebie przyjechali - wystarczy że wezwiesz nasze pogotowie komputerowe! Nasi specjaliści wsiądą w nasz firmowy pojazd i pojawią się u ciebie z pomocą. Wystarcz telefon, który znajdziesz na stronie kontaktowej.</p>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PogotowieKomputerowe'
}
</script>

<style scoped>
img {
  max-height: 250px;
}
.text-center {
  text-align: center;
}
</style>
