<template>
  <div id="app">
    <header>
      <nav class="navbar is-black">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">Informix</router-link>
          <div class="navbar-burger burger" data-target="navbarMain">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMain" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/O-nas" class="navbar-item">O nas</router-link>
            <router-link to="/Galeria" class="navbar-item">Galeria</router-link>
            <router-link to="/Znajdz-nas" class="navbar-item">Znajdź Nas</router-link>
            <router-link to="/Kontakt" class="navbar-item">Kontakt</router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="#">
                Inne
              </a>
              <div class="navbar-dropdown is-boxed">
                <router-link to="/Pogotowie-Komputerowe" class="navbar-item">Pogotowie Komputerowe</router-link>
                <router-link to="/Partnerzy" class="navbar-item">Partnerzy</router-link>
              </div>
            </div>
          </div>
          <div class="navbar-end">
          </div>
        </div>
      </nav>
    </header>
    <main class="m-t-3">
      <router-view/>
    </main>
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