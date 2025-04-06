<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app__header">
    <nav class="app__navigation">
      <RouterLink to="/" class="app__link">Home</RouterLink>
      <RouterLink to="/about" class="app__link">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.app {
  &__header {
    border-bottom: 1px solid lightgrey;
    line-height: 1.5;
    max-height: 100vh;
    height: 40px;
  }

  &__navigation {
    display: inline-flex;
    gap: 14px;
    background-color: palegoldenrod;
    margin-right: auto;
  }

  &__link {
    font-size: 20px;
    color: black;
    padding: 0 14px;
  }
}
</style>
