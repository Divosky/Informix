<template>
  <section class="content has-text-centered">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="columns is-multiline">
      <div
        class="column is-two-thirds-tablet is-half-desktop is-one-quarter-fullhd" 
        v-for="(image, imageIndex) in images" 
        :key="imageIndex" 
        @click="index = imageIndex" 
        :style="{ backgroundImage: 'url(' + image + ')', backgroundSize: 'cover' }">
      </div>
    </div>
  </section>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  name: 'Gallery',
  data: function () {
    return {
      images: [
        './img/gallery/1.jpg',
        './img/gallery/2.jpg',
        './img/gallery/3.jpg',
        './img/gallery/4.jpg',
        './img/gallery/5.jpg',
        './img/gallery/6.jpg',
        './img/gallery/7.jpg',
        './img/gallery/8.jpg',
        './img/gallery/9.jpg',
        './img/gallery/10.jpg',
        './img/gallery/11.jpg',
        './img/gallery/12.jpg',
        './img/gallery/13.jpg',
        './img/gallery/14.jpg',
        './img/gallery/15.jpg',
        './img/gallery/16.jpg',
      ],
      index: null
    };
  },

  components: {
    'gallery': VueGallery
  },
}
</script>

<style scoped>
.columns {
  justify-content: space-around;
}
.column {
  position: relative;
  width: 100%;
  height: 600px;
  margin-bottom: .3rem;
  transition: .3s ease-in-out;
  cursor: pointer;
}
.column:hover:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background: #00000088;
}
@media screen and (min-width: 768px) {
  .column {
    width: 49%;
  }
}
@media screen and (min-width: 1408px) {
  .column {
    width: 33.3%;
  }
}
</style>
