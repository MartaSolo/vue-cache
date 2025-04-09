<template>
  <header class="app__header">
    <nav class="app__navigation">
      <RouterLink to="/" class="app__link">Home</RouterLink>
      <RouterLink to="/about" class="app__link">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped lang="scss">
.app {
  &__header {
    border-bottom: 1px solid lightgrey;
    line-height: 1.5;
    max-height: 100vh;
    height: 40px;
    display: flex;
    align-items: center;
  }

  &__navigation {
    display: inline-flex;
    gap: 14px;
    margin-right: auto;
  }

  &__link {
    font-size: 20px;
    color: gray;
    padding: 0 14px;
  }
}

.router-link-active {
  color: black;
}
</style>
