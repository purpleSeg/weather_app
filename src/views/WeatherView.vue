<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingStore } from "../stores/setting"
import { useRouter } from 'vue-router'
import WeatherDisplay from '../components/WeatherDisplay.vue'

const settingStore = useSettingStore();
const { zipCode } = storeToRefs(settingStore);
const router = useRouter();

var weather = ref(null);
var doneLoading = ref(false);
var title = ref('Default')

async function getWeather() {
  await axios.get('http://api.weatherapi.com/v1/current.json', 
  { params: { key: 'aa0d2d6bd9c34284b2a203753231111', q: zipCode.value}})
  .then(resp => {
    weather.value = resp.data;
    settingStore.setWeather(resp.data);
    setTimeout(() => {
      doneLoading.value = true;
    }, 500);
  })
}

function changeTitle(newTitle) {
  title.value = newTitle ?? 'Default';
}

onMounted(async() => {
  if (zipCode.value === null) {
    router.push('/settings');
  }
  await getWeather();
})

</script>

<template>
  <h1>
    {{ title }}
  </h1>
  <div v-if="!doneLoading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <main v-if="doneLoading">
    <p>
      <WeatherDisplay @change-title="changeTitle" :location="weather.location" :icon="weather.current.condition.icon"></WeatherDisplay>
    </p>
  </main>
</template>
