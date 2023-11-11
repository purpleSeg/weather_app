<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useSettingStore } from "../stores/setting"
const settingStore = useSettingStore();
const router = useRouter();

var localZip = ref(null);

var canSave = computed(() => {
  if (localZip.value === null) {
    return false;
  }
  return localZip.value.toString().length === 5;
})

function saveZipCode() {
  settingStore.setZipCode(localZip.value);
  router.push('/');
}

</script>

<template>
  <div>
    <h1 class="mb-20">Settings</h1>
    <br />
    <div class="mb-3">
      <label for="zipCode" class="form-label">Zip Code</label>
      <input type="number" class="form-control" placeholder="ex: 12345" v-model="localZip"/>
    </div>
    <button type="button" :disabled="canSave == false" class="btn btn-primary" @click="saveZipCode">Save</button>
  </div>
</template>

<style></style>