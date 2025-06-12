<script setup lang="ts">
import ClassAndStyle from './components/ClassAndStyle.vue'
import Computed from './components/Computed.vue'
import DetectaPhone from './components/DetectaPhone.vue'
import ExChangeImg from './components/ExChangeImg.vue'
import State from './components/State.vue'

const imgUrl = new URL('./img.png', import.meta.url).href
const heroImg = document.getElementById('hero-img') as (HTMLImageElement | null)
heroImg && (heroImg.src = imgUrl)
</script>

<template>
  <ExChangeImg />
  <!-- <DetectaPhone /> -->
  <!-- <ClassAndStyle /> -->
  <State type="bigState" />
  <!-- <Computed /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  margin-top: 2rem;
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;

    padding: 1rem 0;
    margin-left: -1rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
