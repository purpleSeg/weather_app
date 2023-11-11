<script setup>
import { useSettingStore } from "../stores/setting"
import { storeToRefs } from 'pinia'
const { weather } = storeToRefs(useSettingStore());
defineEmits(['changeTitle'])
</script>

<template>
    <div>
        <h1 class="mb-10"> {{ weather.location.name }} <img :src="weather.current.condition.icon" alt="weather icon" />
        </h1>
        <p>
            Current Temp: {{ weather.current.temp_f }}°F <br />
            Current Condition: {{ weather.current.condition.text }} <br />
            State: {{ weather.location.region }} <br />
        </p>
        <button type="button" class="btn btn-primary" @click="$emit('changeTitle', 'New Title')">Change Title</button>
    </div>
</template>