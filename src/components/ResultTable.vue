<template>
  <div class="q-pa-md row items-start q-gutter-md" style="margin-top: -25px; margin-left: -25px">
<!--     <q-table
      class="my-sticky-header-resulttable"
      :rows="row"
      :columns="columns"
      row-key="name"
      color="white"
      flat
      bordered
      v-model:pagination="pagination"
    /> -->
    <q-card class="my-card text-white" style="background-color: LightSeaGreen">
      <q-card-section>
        <div class="text-h6">CHAR</div>
      </q-card-section>
<q-separator dark />
      <q-card-section style="height: 150px; font-size: 30px; text-align: center;">
        {{ row[0].CHAR }}
      </q-card-section>
    </q-card>
    <q-card class="my-card text-white" style="background-color: LightSeaGreen">
      <q-card-section>
        <div class="text-h6">DEC</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section style="height: 150px; font-size: 30px; text-align: center;">
        {{ row[0].DEC }}
      </q-card-section>
    </q-card>
    <q-card class="my-card text-white" style="margin-top: 50%; background-color: LightSeaGreen">
      <q-card-section>
        <div class="text-h6">HEX</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section style="height: 150px;font-size: 30px; text-align: center;">
        {{ row[0].HEX }}
      </q-card-section>
    </q-card>
        <q-card class="my-card text-white" style="margin-top: 50%; background-color: LightSeaGreen">
      <q-card-section>
        <div class="text-h6">DESCRIPTION</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section style="height: 150px; font-size: 30px">
        {{ row[0].NAME }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
const columns = [
  {
    name: 'CHAR',
    required: true,
    label: 'CHAR',
    align: 'left',
    field: 'CHAR'
  },
  { name: 'DEC', label: 'DEC', field: 'DEC', align: 'left' },
  { name: 'HEX', label: 'HEX', field: 'HEX', align: 'left' }
];
import { useStore } from 'vuex';
import { computed } from 'vue';
const rows = [
  {
    CHAR: '',
    DEC: '',
    HEX: ','
  }
];
export default {

  setup () {
    const $store = useStore();
    const row = computed({
      get: () => $store.state.storageData.list,
      set: val => {}
    });
    return {
      rows,
      row,
      columns,
      pagination: {
        rowsPerPage: 1
      }
    };
  }
};
</script>
<style lang="sass">
.my-sticky-header-resulttable
  /* height or max-height is important */
  height: 100%
  color: white
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 0
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 100%
  background-color: LightSeaGreen

  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: LightSeaGreen

  tr:nth-child(even)
    background: #CCC
  tr:nth-child(odd)
    background: #FFF
    color: black
.my-card
  width: 280px
</style>
