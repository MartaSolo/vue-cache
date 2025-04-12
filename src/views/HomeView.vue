<template>
  <main>
    <h1>Homepage</h1>
    <Loader />
    <div>{{ data }}</div>
  </main>
</template>

<script setup lang="ts">
import { weatherApiUrl } from '@/api/endpoints';
import { useFetch } from '@/composables/useFetch';
import Loader from '@/components/Loader.vue';

const { data, fetchData, error, loading } = useFetch(weatherApiUrl, { ttl: 60000 });
</script>
