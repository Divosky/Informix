import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gallery from '@/components/Gallery'
import ZnajdzNas from '@/components/ZnajdzNas'
import Kontakt from '@/components/Kontakt'
import PogotowieKomputerowe from '@/components/PogotowieKomputerowe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Galeria',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/Znajdz-nas',
      name: 'ZnajdzNas',
      component: ZnajdzNas
    },
    {
      path: '/Kontakt',
      name: 'Kontakt',
      component: Kontakt
    },
    {
      path: '/Pogotowie-Komputerowe',
      name: 'PogotowieKomputerowe',
      component: PogotowieKomputerowe
    }
  ]
})