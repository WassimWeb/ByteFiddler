<template>
  <q-layout view="lHh Lpr lFf" class="body">
    <q-header class="header" style="background: LightSeaGreen">
      <q-toolbar class="row justify-between" >

        <q-toolbar-title class="col" >
          <div class=" q-pt-sm q-mb-sm" style="font-weight: bold;
  font-size: 18px;">
          Byte Fiddler
          </div>
        </q-toolbar-title>
        <div>{{time + ' Uhr'}}
          <br>
          {{todaysDate}}
          </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      time: ''
    }
  },
  computed: {
    todaysDate () {
      return date.formatDate(Date.now(), 'DD.MM.YYYY')
    }
  },
  methods: {
    getTime () {
      this.time = date.formatDate(Date.now(), 'HH:mm')
    }
  },
  mounted () {
    this.getTime()
    setInterval(() => {
      this.getTime()
    }, 2000)
  }
}
</script>
<style scoped lang="scss">
.body {
  background: url("../../image/cool-background.png") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

h1 {
  font-size: 50px;
}
</style>
