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

<style scoped lang="less">
header {
  max-height: 100vh;
  line-height: 1.5;

}

nav {
  width: 100%;
  margin-top: 2rem;
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

@media (width >= 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    padding: 1rem 0;
    margin-top: 1rem;
    margin-left: -1rem;
    font-size: 1rem;
    text-align: left;
  }
}
</style>
