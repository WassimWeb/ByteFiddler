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
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

import 'smart-webcomponents/source/styles/smart.default.css';
import 'smart-webcomponents/source/modules/smart.gauge.js';

export default {
  name: 'app',
  setup () {
    const $store = useStore();
    const value = computed({
      get: () => $store.state.storageData.value,
      set: val => {}
    });
    onMounted(() => {});
    return {
      value
    };
  }
};
</script>

<style>
.gauge {
  border-radius: 3%;
  width: 620px;
  height: 700px;
  margin-top: 60px;
  margin-left: -140px;
  pointer-events: none;
  font-size: 23px;
  color: rgb(199, 0, 0);
  background: transparent;
    background: radial-gradient(ellipse at center,  rgb(183, 255, 251)  0%, #469a64 30%, #78ad79 60%, #afc499 100%);
    background-size: 100%;
    pointer-events: none;
}
</style>
