<template>
  <div class="q-pa-md flex flex-center">

    <q-circular-progress
      reverse
      style="margin-left: -180px"
      :value="value"
      size="180px"
      :thickness="0.2"
      color="transparent"
      :center-color="colors"
      track-color="transparent"
      class="q-ma-md"
    />

  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup () {
    const $store = useStore()
    const value = computed({
      get: () => $store.state.storageData.value,
      set: val => {}
    })
    function colorschange () {
      console.log(value.value)
      if (value.value === 0) {
        return 'transparent'
      } else if ((value.value <= 12.5) && (value.value > 0)) {
        return 'primary'
      } else if ((value.value > 12.5) && (value.value <= 25)) {
        return 'info'
      } else if ((value.value > 25) && (value.value <= 37.5)) {
        return 'secondary'
      } else if ((value.value > 37.5) && (value.value <= 50)) {
        return 'positive'
      } else if ((value.value > 50) && (value.value <= 62.5)) {
        return 'warning'
      } else if ((value.value > 62.5) && (value.value <= 75)) {
        return 'accent'
      } else if ((value.value > 75) && (value.value <= 87.5)) {
        return 'dark'
      } else {
        return 'negative'
      }
    }
    const colors = computed({ get: () => colorschange().toString() })
    return {
      value,
      colorschange,
      colors

    }
  }
}
</script>
