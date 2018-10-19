<template>
  <v-container grid-list-md>
    <v-card style="padding: 2%;">
      <v-card-title>
        <div class="headline">
          <h2>Tijdlijn Periode 1</h2>
        </div>
      </v-card-title>
      <v-timeline>
        <v-timeline-item v-for='(week, index) in weeks' :key='index' color='primary' large>
          <span slot='opposite'>week {{ week.weekno }}</span>
          <v-card class='elevation-2' light id='weeks'>
            <v-card-title class='headline'>
              {{ week.title }}
            </v-card-title>
            <v-card-text>
              {{  week.details }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        weeks: [
          { weekno: 1, details: '', title: 'el hmm1' },
          { weekno: 2, details: '', title: 'el hmm2' },
          { weekno: 3, details: '', title: 'el hmm3' },
          { weekno: 4, details: '', title: 'el hmm4' },
          { weekno: 5, details: '', title: 'el hmm5' },
          { weekno: 6, details: '', title: 'el hmm6' },
          { weekno: 7, details: '', title: 'el hmm7' },
          { weekno: 8, details: '', title: 'elhmm8' }
        ]
      }
    }
  }
</script>
<style>

</style>
