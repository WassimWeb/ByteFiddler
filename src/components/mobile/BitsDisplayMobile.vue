<template >
<div class="q-pa-none">
<div class="container">
  <div class="clock-border">
      <sevensegmentdisplay :value="bit7" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" />
      <sevensegmentdisplay :value="bit6" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="left: 4vw"/>
      <sevensegmentdisplay :value="bit5" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="left: 8vw"/>
      <sevensegmentdisplay :value="bit4" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="left: 12vw"/>
      <sevensegmentdisplay :value="bit3" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="left: 16vw"/>
      <sevensegmentdisplay :value="bit2" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="left: 20vw"/>
      <sevensegmentdisplay :value="bit1" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="left: 24vw"/>
      <sevensegmentdisplay :value="bit0" :rounded="false" :segment-width="4" :segment-height="0.5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="left: 28vw"/>
      <span v-if="$q.platform.is.ipad">
        <q-toggle
      class="rotate-270"
        style="position: absolute;margin-top: 8vh; left: -1vw;"
        v-model="value7"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 8vh; left: 8vw;"
        v-model="value6"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 8vh; left: 17vw;"
        v-model="value5"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 8vh; left: 26vw;"
        v-model="value4"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 8vh; left: 35vw;"
        color="secondary"
        v-model="value3"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 8vh; left: 44vw;"
        v-model="value2"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 8vh; left: 53vw;"
        v-model="value1"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 8vh; left: 62vw;"
        v-model="value0"
        color="secondary"
        @click="bitscounter"
      />
      </span>
      <span v-else>
        <q-toggle
      class="rotate-270"
        style="position: absolute;margin-top: 6vh; left: -5vw;"
        v-model="value7"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 6vh; left: 4.5vw;"
        v-model="value6"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 6vh; left: 13.5vw;"
        v-model="value5"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 6vh; left: 22.5vw;"
        v-model="value4"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 6vh; left: 31.5vw;"
        color="secondary"
        v-model="value3"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 6vh; left: 40.5vw;"
        v-model="value2"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 6vh; left: 49.5vw;"
        v-model="value1"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="position: absolute; margin-top: 6vh; left: 58.5vw;"
        v-model="value0"
        color="secondary"
        @click="bitscounter"
      />
      </span>
  </div>

</div>
</div>
</template>

<script>
// import { ref, onMounted } from 'vue'
// import ProgressCounter from './ProgressCounter.vue'
// import { useStore } from 'vuex'
/*
*/
/* eslint-disable */
import { useQuasar } from 'quasar'
import sevensegmentdisplay from '../seven-segment-display.vue'
export default {
  name: 'Bitsdisplay',
  setup () {
    const $q = useQuasar()

    return {
      $q
    }
  },
  data () {
    return {
      value0: false,
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      value5: false,
      value6: false,
      value7: false,
      bit0: 0,
      bit1: 0,
      bit2: 0,
      bit3: 0,
      bit4: 0,
      bit5: 0,
      bit6: 0,
      bit7: 0,
      value: 0.0
    }
  },
  components: {
    sevensegmentdisplay
  },
  methods: {
    bitscounter () {
      if (this.value0) {
        this.bit0 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit0',
        value: 85}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      } else {
        this.bit0 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit0',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      if (this.value1) {
        this.bit1 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit1',
        value: 170}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })

      } else {
        this.bit1 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit1',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      if (this.value2) {
        this.bit2 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit2',
        value: 85}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      } else {
        this.bit2 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit2',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      if (this.value3) {
        this.bit3 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit3',
        value: 170}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      } else {
        this.bit3 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit3',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      if (this.value4) {
        this.bit4 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit4',
        value: 85}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      } else {
        this.bit4 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit4',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      if (this.value5) {
        this.bit5 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit5',
        value: 170}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      } else {
        this.bit5 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit5',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      if (this.value6) {
        this.bit6 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit6',
        value: 0.333}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      } else {
        this.bit6 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit6',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      if (this.value7) {
        this.bit7 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit7',
        value: 0.667}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      } else {
        this.bit7 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit7',
        value: 0}
      })
      this.$store.commit({
        type: 'storageData/setRgb'
      })
      this.$store.commit({
        type: 'storageData/setColor'
      })
      }
      const binary = this.bit7 + '' + this.bit6 + '' + this.bit5 + '' + this.bit4 + '' + this.bit3 + '' + this.bit2 + '' + this.bit1 + '' + this.bit0
      this.value = Number(((parseInt(binary, 2) * 100) / 255).toFixed(2))
      // this.callMutation(this.value)
      this.$store.commit({
        type: 'storageData/calcValue',
        value: this.value
      })
      this.$store.commit({
        type: 'storageData/find',
        value: parseInt(binary, 2)
      })
    }
  }
}

</script>

<style lang="scss" scoped>
  .container {
    background: #222;
  border: 5px solid #1a1a1a;
  width: 75vw;
  display: flex;
  > * {
    margin: auto;
  }
    justify-content: center;
    align-items: center;
    margin: auto 3vw auto;
    flex-direction: column;
  }
  .hour, .min, .secs {
    font-size: 8em;
  }
  strong {
    color: blue;
  }
  p {
    font-size: 20px;
  }
  .clock-border {
    height: 12vh;
  width: 70vw;
  position: relative;
  }
  .clock-inner {
    height: 100%;
  width: 70vw;
  position: relative;
  }
html,body {
    height: 100%;
}
body {
    background: #0f3854;
    background: radial-gradient(ellipse at center,  #ffffff  0%, #ffffff 70%);
    background-size: 100%;
}
p {
    margin: 0;
    padding: 0;
}
#clock {
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(5, 52, 68, 0);
    .time {
        letter-spacing: 0.05em;
        font-size: 80px;
        padding: 5px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
    .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
}

</style>
