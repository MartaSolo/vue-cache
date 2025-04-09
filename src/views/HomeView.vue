<template>
  <main>Homepage</main>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
import { weatherApiUrl } from '@/api/endpoints';
import { useFetch } from '@/composables/useFetch';

const { data, fetchData, error, loading } = useFetch(weatherApiUrl);

fetchData();
</script>
