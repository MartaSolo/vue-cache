<template>
  <section class="forecast">
    <h1 class="forecast__title">
      Weather Forecast for {{ forecast.location.name }}, {{ forecast.location.country }}
    </h1>
    <div class="forecast__days">
      <div v-for="day in forecast.forecast.forecastday" :key="day.date" class="forecast__day">
        <h2 class="forecast__date">{{ day.date }}</h2>
        <img :src="day.day.condition.icon" :alt="day.day.condition.text" />
        <p class="forecast__param">Condition: {{ day.day.condition.text }}</p>
        <p class="forecast__param">Max Temp: {{ day.day.maxtemp_c }}°C</p>
        <p class="forecast__param">Min Temp: {{ day.day.mintemp_c }}°C</p>
        <p class="forecast__param">Average Temp: {{ day.day.avgtemp_c }}°C</p>
        <p class="forecast__param">Chance of Rain: {{ day.day.daily_chance_of_rain }}%</p>
        <p class="forecast__param">Wind Speed: {{ day.day.maxwind_kph }} kph</p>
        <p class="forecast__param">Humidity: {{ day.day.avghumidity }}%</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { WeatherForecast } from '@/types';

defineProps<{
  forecast: WeatherForecast;
}>();
</script>

<style lang="scss" scoped>
.forecast {
  margin: 20px;
  &__days {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 20px;
  }

  &__date {
    font-size: 14px;
  }

  &__param {
    font-size: 12px;
  }
}
</style>
