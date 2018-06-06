<template>
  <div id="app">
    <header>
      <nav class="navbar is-black">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            Informix
          </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="onas.html">
              O nas
            </a>
            <router-link to="/Galeria" class="navbar-item">Galeria</router-link>

            <a class="navbar-item" href="znajdznas.html">
              Znajdź Nas
            </a>
            <a class="navbar-item" href="kontact.html">
              Kontakt
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="#">
                Inne
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="pogotowie.html">
                  Pogotowie Komputerowe
                </a>
                <a class="navbar-item" href="partnerzy.html">
                  Partnerzy
                </a>
              </div>
            </div>
          </div>
          <div class="navbar-end">
          </div>
        </div>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app'
  }

  document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {

          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  });
</script>

<style>
</style>