<template>
  <main>
    <Loader v-if="loading" />
    <div v-else-if="error">The weather data cannot be displayed</div>
    <Weather v-else-if="data" :forecast="data" />
    <div v-else>
      <span>Something went wrong. Try refreshing</span>
      <button @click="refresh">Refresh</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { WeatherForecast } from '@/types';
import { weatherApiUrl } from '@/api/endpoints';
import { useFetch } from '@/composables/useFetch';
import Loader from '@/components/Loader.vue';
import Weather from '@/components/Weather.vue';
import { useCache } from '@/composables/useCache';

const { data, error, loading, fromCache, refresh } = useFetch<WeatherForecast>(weatherApiUrl, {
  ttl: 60000,
});
const { cache } = useCache();
</script>
