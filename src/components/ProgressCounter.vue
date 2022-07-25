<template>
  <div class="q-pa-md row q-gutter-sm">
<!--     <q-circular-progress
      show-value
      font-size="50px"
      :value="value"
      size="280px"
      :thickness="0.22"
      color="primary"
      track-color="grey-4"
      class="q-ma-md"
    >
    {{ value }}%
    </q-circular-progress> -->
    <!-- <circular /> --><!--
    <rockiot-gauge></rockiot-gauge> -->
    <!-- sadasasd
    <gauge
        heading="A title goes here"
        :min="0"
        :max="100"
        :value="exampleValue"
    /> -->
    <!-- <circular /> -->
    <FusionCharts />
 <!--    <h3>Will not stop at 100</h3>
    <v-gauge :value="x" top :width="width"/>
    <hr>
    <h3>Will stop at 100</h3>
    <v-gauge :value="y" unit="%" :width="width"/>
    <hr>
    <h3>Donut</h3>
    <v-gauge :value="z" :options="options" :donut="true"/> -->
  </div>
</template>

<script>
// import VGauge from 'vgauge'
import { useStore } from 'vuex';
import { computed } from 'vue';
// import Gauge from '@chrisheanan/vue-gauge'
// import RockiotGauge from './gauge/rockiot.container.vue'
// import circular from './circular.vue'
import FusionCharts from './FusionCharts.vue';
export default {
  /* props: {
    value: {
      typeof: Number,
      default: 0.0
    }
  }, */
  setup (props, context) {
    const $store = useStore();
    const value = computed({
      get: () => $store.state.storageData.value,
      set: val => {}
    });
    return {
      value
    };
  },
  components: {
    // Gauge
    // VGauge
    // circular,
    FusionCharts
    // RockiotGauge
  },
  mounted () {
  }
};
</script>
<style scoped>

</style>
