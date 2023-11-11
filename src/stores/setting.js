import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {
  const zipCode = ref(null)
  const weather = ref(null)
  function setZipCode(zip) {
    zipCode.value = zip
  }
  function setWeather(weatherData) {
    weather.value = weatherData  
  }

  return { zipCode, setZipCode, weather, setWeather }
})
