<template>
      <v-layout row justify-center>
        <v-toolbar dense app>
          <v-icon>code</v-icon>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat @click.native="Media = true">Media</v-btn>
                <v-btn flat @click.native="Software = true">Software</v-btn>
                <v-btn flat @click.native="Technology = true">Technology</v-btn>
                <v-btn flat @click.native="Business = true">Business</v-btn>
                <v-btn flat @click.native="Portfolio = true">Portfolio</v-btn>
                <v-btn flat @click.native="Downloads = true">Downloads</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-dialog v-model="Media" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title>Media</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click.native="Media = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-treeview :items="itemsMedia"></v-treeview>
          </v-card>
        </v-dialog>
        <v-dialog v-model="Software" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title>Software</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click.native="Software = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-card>
        </v-dialog>
        <v-dialog v-model="Technology" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title>Technology</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click.native="Technology = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-card>
        </v-dialog>
        <v-dialog v-model="Business" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title>Business</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click.native="Business = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-card>
        </v-dialog>
        <v-dialog v-model="Portfolio" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title>Portfolio</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click.native="Portfolio = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-timeline>
              <v-timeline-item v-for="(week, index) in weeks" :key="index" color="primary" large>
                <span slot="opposite">week {{ week.weekno }}</span>
                <v-card class="elevation-2" light>
                  <v-card-title class="headline">{{ week.title }}</v-card-title>
                  <v-card-text>
                    {{  week.details }}
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card>
        </v-dialog>
        <v-dialog v-model="Downloads" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark>
              <v-toolbar-title>Downloads</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click.native="Downloads = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-card>
        </v-dialog>
      </v-layout>
</template>
<script>
    export default {
    data () {
      return {
        title: '/static/img/initials-white.png',
        Media: false,
        Software: false,
        Technology: false,
        Business: false,
        Portfolio: false,
        Surprise: false,
        Downloads: false,
        weeks: [
          { weekno: 1, details: "", title: "el hmm1" },
          { weekno: 2, details: "", title: "el hmm2"},
          { weekno: 3, details: "", title: "el hmm3" },
          { weekno: 4, details: "", title: "el hmm4" },
          { weekno: 5, details: "", title: "el hmm5" },
          { weekno: 6, details: "", title: "el hmm6" },
          { weekno: 7, details: "", title: "el hmm7" },
          { weekno: 8, details: "", title: "elhmm8" },
        ]
      }
    },
    name: 'App',
    components: {
        'intro': require('@/components/intro').default,
        'footer_bottom': require('@/components/footer_bottom').default,
        'about': require('@/components/about').default,
        'skills': require('@/components/skills').default,
        'projects': require('@/components/projects').default,
        'dialogs': require('@/components/dialogs').default
    }
    }
</script>
<style>
</style>

