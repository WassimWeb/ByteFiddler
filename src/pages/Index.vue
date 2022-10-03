<template >
  <q-page padding>
  <div class="q-pa-md">
        <div class="row">
          <div class="col-4 col-md-4" ><result-table/></div>
      <div class="col-4 col-md-4">
            <div class="column" >
      <div class="col-11" >
        <progress-counter/></div>
<div class="col-1"><bits-display /> </div>
    </div>
      </div>
      <div class="col-4 col-md-4" > <alert-led></alert-led></div>
    </div>

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

export default {
  name: 'PageIndex',
  components: {
    // TableComponent,
    ProgressCounter,
    ResultTable,
    BitsDisplay,
    AlertLed
  },
  setup () {
    const $q = useQuasar();

    return {
      $q
    };
  }
};
</script>
<style>

</style>
