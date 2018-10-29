<template>
  <v-app dark>
      <v-fab-transition>
        <v-btn @click.native="socials = true;" style="margin-bottom: 42px;" color="primary" fixed dark absolute bottom right fab>
          <v-icon>person_add</v-icon>
        </v-btn>
      </v-fab-transition>
    <v-toolbar flat app dense>
      <v-btn depressed icon ripple href="/#/">
        <v-img src="static/img/favicon.png" aspect-ratio="1"></v-img>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  <v-layout row justify-center>
    <v-dialog v-model="socials" max-width="500">
      <v-card>
        <v-toolbar color="secondary" flat depressed>
          <v-toolbar-title>
            <div>
              <h2 class="headline">Voeg mij toe!</h2>
            </div>
          </v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(medium, index) in media">
            <v-list-tile :key="index" :href="medium.url" target="_blank">
                <v-list-tile-title>{{ medium.name }}</v-list-tile-title>
                <v-icon>{{ medium.icon }}</v-icon>
            </v-list-tile>
            <v-divider :key='index'></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-dialog>
  </v-layout>
    <v-footer app absolute>
      <span style="padding-left: 2%;">Jesse Boogaard &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      socials: false,
      media: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jesseboogaard/', icon: 'group_add' },
        { name: 'GitHub', url: 'https://www.github.com/JesseBoogaard', icon: 'code' },
        { name: '+31 6 28020731', url: '', icon: 'phone' }
      ]
    }
  },
  name: 'App'
}
</script>
