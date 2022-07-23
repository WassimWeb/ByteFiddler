<template >
<div class="q-pa-md row q-gutter-sm">
<div class="container">
  <div class="clock-border">
    <div class="clock-inner" >
      <sevensegmentdisplay :value="bit7" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: -10px"/>
      <sevensegmentdisplay :value="bit6" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: 30px"/>
      <sevensegmentdisplay :value="bit5" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: 30px"/>
      <sevensegmentdisplay :value="bit4" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: 30px"/>
      <sevensegmentdisplay :value="bit3" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: 30px"/>
      <sevensegmentdisplay :value="bit2" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: 30px"/>
      <sevensegmentdisplay :value="bit1" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: 30px"/>
      <sevensegmentdisplay :value="bit0" :rounded="false" :segment-width="25" :segment-height="5" on-color="rgba(76, 209, 55, 0.8)" off-color="transparent" style="margin-left: 30px"/>
    </div>
  </div>
<div style=" width: 550px">
          <q-toggle
      class="rotate-270"
        style="margin-left: 5px"
        v-model="value7"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="margin-left: 10px"
        v-model="value6"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="margin-left: 10px"
        v-model="value5"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="margin-left: 10px"
        v-model="value4"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="margin-left: 8px"
        color="secondary"
        v-model="value3"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="margin-left: 8px"
        v-model="value2"
        color="secondary"
        @click="bitscounter"
      />

      <q-toggle
        class="rotate-270"
        style="margin-left:8px"
        v-model="value1"
        color="secondary"
        @click="bitscounter"
      />
      <q-toggle
        class="rotate-270"
        style="margin-left:10px"
        v-model="value0"
        color="secondary"
        @click="bitscounter"
      />
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
import sevensegmentdisplay from './seven-segment-display.vue'
export default {
  name: 'Bitsdisplay',
  /* setup () {
    const store = useStore()
    function callMutation (val) {
      console.log('val  ' + val)
      store.commit({
        type: 'storageData/calcValue',
        value: val
      })
    }

    return {
      callMutation
    }
  }, */
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
      } else {
        this.bit0 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit0',
        value: 0}
      })
      }
      if (this.value1) {
        this.bit1 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit1',
        value: 170}
      })
      } else {
        this.bit1 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit1',
        value: 0}
      })
      }
      if (this.value2) {
        this.bit2 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit2',
        value: 85}
      })
      } else {
        this.bit2 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit2',
        value: 0}
      })
      }
      if (this.value3) {
        this.bit3 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit3',
        value: 170}
      })
      } else {
        this.bit3 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit3',
        value: 0}
      })
      }
      if (this.value4) {
        this.bit4 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit4',
        value: 85}
      })
      } else {
        this.bit4 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit4',
        value: 0}
      })
      }
      if (this.value5) {
        this.bit5 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit5',
        value: 170}
      })
      } else {
        this.bit5 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit5',
        value: 0}
      })
      }
      if (this.value6) {
        this.bit6 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit6',
        value: 0.333}
      })
      } else {
        this.bit6 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit6',
        value: 0}
      })
      }
      if (this.value7) {
        this.bit7 = 1
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit7',
        value: 0.667}
      })
      } else {
        this.bit7 = 0
        this.$store.commit({
        type: 'storageData/setBit',
        value: {name: 'bit7',
        value: 0}
      })
      }
      const binary = this.bit7 + '' + this.bit6 + '' + this.bit5 + '' + this.bit4 + '' + this.bit3 + '' + this.bit2 + '' + this.bit1 + '' + this.bit0
      console.log(parseInt(binary, 2))
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

<style lang="scss">
  .container {
    background: #222;
  border: 5px solid #1a1a1a;
  width: 600px;
  display: flex;
  > * {
    margin: 10px;
  }
    justify-content: center;
    align-items: center;
    margin: auto;
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
    height: 100%;
  width: 500px;
  position: relative;
  }
  .clock-inner {
    height: 100%;
  width: 500px;
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
