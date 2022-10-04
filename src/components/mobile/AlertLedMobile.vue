<!-- eslint-disable no-tabs -->
<template>
  <div class="q-pa-md flex flex-center">

    <!-- <q-circular-progress
      reverse
      style="margin-left: -180px;"
      :value="value"
      size="180px"
      :thickness="0.2"
      color="transparent"
      center-color="primary-light"
      track-color="transparent"
      class="q-ma-md"
    /> -->
    <div class="led-green"
    :style="colors"></div>

  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup () {
    const $store = useStore();
    const colors = computed({ get: () => $store.state.storageData.color });
    return {
      colors
    };
  }
};
</script>
<style lang="css" scoped>
.led-green {
    margin: auto;
    width: 25vw;
    height: 12vh;
    /* background-color: #690; */
    border-radius: 100%;
    box-shadow: #000 0 -1px 3px 1px, inset #460 0 -1px 5px, #7D0 0 2px 6px;
}
</style>
