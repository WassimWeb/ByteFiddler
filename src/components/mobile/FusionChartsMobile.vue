<template>
  <div>
    <radial-gauge  class="gauge" :value="value" ></radial-gauge>
  </div>
</template>

<script>
import RadialGauge from 'vue-canvas-gauges/src/RadialGauge.vue';
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'app',
  components: {
    RadialGauge
  },
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
<style lang="scss" scoped>
.gauge {
  width: 35vw;
  height: 40vh;
  display: flex;
  padding-right: 5vw;
  > * {
    margin: auto;
  }
    justify-content: center;
    align-items: center;
    margin: auto auto auto ;
    flex-direction: column;

}
  /* border-radius: 3%;
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
    pointer-events: none; */

</style>
