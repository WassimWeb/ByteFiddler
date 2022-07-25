<template >
  <div class="q-pa-md">
        <div class="row">
          <div class="col-6 col-md-4" ><result-table/></div>
      <div class="col-6 col-md-4">
            <div class="column" >
      <div class="col-11" style="display: flex;
  width: 100% ; position: fixed; /* or absolute */
  top: 50%;
  left: 40%;"><progress-counter/></div>
<div class="col-1" style="bottom: 12%; position: fixed"><bits-display /> </div>
    </div>
      </div>
      <div class="col-6 col-md-4" > <div class="column" >
      <div class="col-1" style="margin-left: 10%; position: fixed"><alert-led></alert-led></div>
<!-- <div class="col-11" style="top: 65%; position: fixed; width: 600px; height: 100%; margin-left:20px"><result-table/> </div> -->
    </div></div>
    </div>

  </div>
</template>
<script>
// import TableComponent from '../components/TableComponent.vue';
import ProgressCounter from '../components/ProgressCounter.vue';
import ResultTable from '../components/ResultTable.vue';
import BitsDisplay from '../components/BitsDisplay.vue';
import AlertLed from '../components/AlertLed.vue';

export default {
  name: 'PageIndex',
  components: {
    // TableComponent,
    ProgressCounter,
    ResultTable,
    BitsDisplay,
    AlertLed
  }
};
</script>
<style>

</style>
