<template>
  <section>
    <article class="container content">
      <header class="page-title">
        <h3 class="h1">Znajdź Nas</h3>
      </header>
      <section>
        <address>
          <strong>Adres:</strong>&nbsp;Warszawska 19, 26-200 Końskie <br>
          <strong>Czynne teraz:</strong>&nbsp;<span v-if="open">Tak</span> <span v-else>Nie</span> 
        </address>
        <div class="map-findus">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.360981806331!2d20.405523615758398!3d51.19399977958483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719c90d32b23483%3A0x5a2a844335422551!2sInformix+S.C.+Karol+Ko%C5%82ba%2C+Jakub+Kosmal!5e0!3m2!1sen!2spl!4v1528541429347" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
let currentDate = new Date();
let currentDay = currentDate.getDay();
let now = currentDate.getHours() + "." + currentDate.getMinutes();
let weekdays = [
  ["Sunday"], // Closed
  ["Monday", 9.00, 18.00],
  ["Tuesday", 9.00, 18.00],
  ["Wednesday", 9.00, 18.00],
  ["Thursday", 9.00, 18.00],
  ["Friday", 9.00, 18.00],
  ["Saturday", 9.00, 14.00],
];

export default {
  name: 'ZnajdzNas',
  computed: {
    open() {
      if ( now > weekdays[currentDay][1] && now < weekdays[currentDay][2])
        return true;
      return false;
    }
  }
}
</script>

<style scoped>
  .map-findus {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
  }

  .map-findus iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
</style>
