<script setup lang="js">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import GalleryView from './views/GalleryView.vue'
import GalleryAPI from './components/mock/GalleryAPI.vue'
</script>

<template>
  <!-- <header>
    <nav >
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/gallery">Gallery</RouterLink>
    </nav>
  </header>

  <RouterView /> -->

  <GalleryView/>
</template>


<style lang="scss" scoped>
  // header {
  //   display: flex;
  // }

  nav {
    display: flex;
  }

  nav a {
    // margin-right: 20px; /* Устанавливаем расстояние справа между элементами */
  }
</style>
