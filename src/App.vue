<template>
  <div id="app">
    <header class="page-header">
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
              </div>
            </div>
          </div>
          <div class="navbar-end">
          </div>
        </div>
      </nav>
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Sklep i serwis komputerowy
            </h1>
            <h2 class="subtitle">
              Kasy fiskalne, laptopy, komputery, drukarki, tusze, części, naprawa, sprzedaż
            </h2>
          </div>
        </div>
      </section>
    </header>
    <main class="m-t-3">
      <router-view/>
    </main>
  </div>
</template>

<script>
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
  html, body {
    background: #f0f0f0;
    min-height: 100%;
  }
  .page-header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.imgur.com/E1kFXek.jpg);
    background-size: cover;
  }
  .navbar.is-black {
    background: transparent;
  }
  .navbar.is-black .navbar-end .navbar-link.is-active, .navbar.is-black .navbar-end .navbar-link:hover, .navbar.is-black .navbar-end>a.navbar-item.is-active, .navbar.is-black .navbar-end>a.navbar-item:hover, .navbar.is-black .navbar-start .navbar-link.is-active, .navbar.is-black .navbar-start .navbar-link:hover, .navbar.is-black .navbar-start>a.navbar-item.is-active, .navbar.is-black .navbar-start>a.navbar-item:hover {
    background: transparent;
    color: rgba(255, 255, 255, .9)
  }
  .hero .title {
    color: #fff;
  }
  .hero .subtitle {
    color: rgba(255, 255, 255, .9);
  }
</style>