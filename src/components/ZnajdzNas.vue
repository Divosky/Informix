<template>
  <section>
    <article class="container content">
      <header class="page-title">
        <h3 class="h1">Znajdź Nas</h3>
      </header>
      <section>
        <div class="level">
          <div class="level-left">
            <address>
              <strong>Adres:</strong>&nbsp;Warszawska 19, 26-200 Końskie <br>
              <strong>Czynne teraz:</strong>&nbsp;<span v-if="open">Tak</span> <span v-else>Nie</span> 
            </address>
          </div>
          <div class="level-right">
            <table class="open-hours">
              <thead>
                <tr>
                  <th class="open-hours__title" colspan="2">Godziny Otwarcia</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Poniedziałek</td>
                  <td>9<sup>00</sup>-18<sup>00</sup></td>
                </tr>
                <tr>
                  <td>Wtorek</td>
                  <td>9<sup>00</sup>-18<sup>00</sup></td>
                </tr>
                <tr>
                  <td>Środa</td>
                  <td>9<sup>00</sup>-18<sup>00</sup></td>
                </tr>
                <tr>
                  <td>Czwartek</td>
                  <td>9<sup>00</sup>-18<sup>00</sup></td>
                </tr>
                <tr>
                  <td>Piątek</td>
                  <td>9<sup>00</sup>-18<sup>00</sup></td>
                </tr>
                <tr>
                  <td>Sobota</td>
                  <td>9<sup>00</sup>-14<sup>00</sup></td>
                </tr>
                <tr>
                  <td>Niedziela</td>
                  <td>Zamknięte</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
  .level {
    align-items: flex-start;
  }
  .open-hours {
    width: initial;
  }
  .open-hours__title {
    padding-top: 0;
    text-align: center;
  }
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
