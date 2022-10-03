<template >
  <q-page padding v-if="!$q.platform.is.mobile">
  <div class="q-py-none">
        <div class="row">
          <div class="col-4 col-md-4" ><result-table/></div>
      <div class="col-6 col-md-5">
            <div class="column" >
      <div class="col" style="padding-top: 11vh">
        <progress-counter/></div>
<div class="col" style="padding-top: 11vh"><bits-display /> </div>
    </div>
      </div>
      <div class="col-2 col-md-3" > <alert-led></alert-led></div>
    </div>

  </div>
</q-page>
<q-page padding v-else>
  <div class="q-pa-md" v-show="!prompt">
        <div class="row">
            <!-- <div class="col-4 col-md-4" ><result-table-mobile/></div> -->
      <div class="col-8 col-md-10">
            <div class="column" >
      <div class="col-4" style="padding-top: 7vh">
        <progress-counter-mobile/></div>
<div class="col-4" style="padding-top: 7vh"><bits-display-mobile />
<br>
<q-btn color="positive" style="width: 75vw; height: 10vh; margin-left: 3vw;" align="center" icon-right="send" label="Ergebnis anzeigen" @click="switchThePage"/></div>
    </div>
      </div>
      <div class="col-4 col-md-2" > <alert-led-mobile></alert-led-mobile></div>
    </div>

  </div>
  <div class="q-pa-md" v-show="prompt">
        <result-table-mobile/>
        <br>
        <q-btn color="positive" style="width: 75vw; top: 20vh; height: 10vh; left: 5vw" align="center" icon-right="send" label="Zurück" @click="switchThePage"/>
  </div>
</q-page>
</template>
<script>
// import TableComponent from '../components/TableComponent.vue';
import ProgressCounter from '../components/ProgressCounter.vue';
import ResultTable from '../components/ResultTable.vue';
import BitsDisplay from '../components/BitsDisplay.vue';
import AlertLed from '../components/AlertLed.vue';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import BitsDisplayMobile from 'src/components/mobile/BitsDisplayMobile.vue';
import ResultTableMobile from '../components/mobile/ResultTableMobile.vue';
import ProgressCounterMobile from '../components/mobile/ProgressCounterMobile.vue';
import AlertLedMobile from '../components/mobile/AlertLedMobile.vue';

export default {
  name: 'PageIndex',
  components: {
    // TableComponent,
    ProgressCounter,
    ResultTable,
    BitsDisplay,
    AlertLed,
    BitsDisplayMobile,
    ResultTableMobile,
    ProgressCounterMobile,
    AlertLedMobile
  },
  setup () {
    const $q = useQuasar();
    const prompt = ref(false);
    function switchThePage () {
      prompt.value = !prompt.value;
    }
    return {
      $q,
      prompt,
      switchThePage
    };
  }
};
</script>
<style>

</style>
