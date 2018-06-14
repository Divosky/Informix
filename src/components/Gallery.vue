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
        'https://unsplash.it/700/500/?random&pic=1',
        'https://unsplash.it/700/500/?random&pic=2',
        'https://unsplash.it/700/500/?random&pic=3',
        'https://unsplash.it/700/500/?random&pic=4',
        'https://unsplash.it/700/500/?random&pic=5',
        'https://unsplash.it/700/500/?random&pic=6',
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
.column {
  position: relative;
  width: 100%;
  height: 600px;
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
    width: 50%;
  }
}
@media screen and (min-width: 1408px) {
  .column {
    width: 33.3%;
  }
}
</style>
