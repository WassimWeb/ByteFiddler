<template>
  <div class="vue-root">
    <smart-gauge
      class="gauge"
      analog-display-type="needle"
      color="black"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      :value="value"
    ></smart-gauge>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import 'smart-webcomponents/source/styles/smart.default.css'
import 'smart-webcomponents/source/modules/smart.gauge.js'

export default {
  name: 'app',
  setup () {
    const $store = useStore()
    const value = computed({
      get: () => $store.state.storageData.value,
      set: val => {}
    })
    onMounted(() => {})
    return {
      value
    }
  }
}
</script>

<style>
.gauge {
  width: 600px;
  height: 700px;
  margin-top: 100px;
  margin-left: -120px;
  pointer-events: none;
  font-size: 23px;
  color: rgb(199, 0, 0);
  background: transparent;
    /* background: radial-gradient(ellipse at center,  #ffffff  0%, #ffffff 70%);
    background-size: 100%;
    pointer-events: none; */
}
</style>
