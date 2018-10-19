<template>
  <v-app dark>
    <!-- <v-parallax height="380" dark src="/static/img/banner.jpg">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-2" align="center">Portfolio Jesse Boogaard</h3>
            <v-divider class="my-3"></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax> -->
    <v-toolbar flat app dense>
      <v-btn depressed icon ripple href="/#/">
        <v-img src="static/img/favicon.png" aspect-ratio="1"></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn flat slot="activator">
          vakken
        </v-btn>
        <v-list>
          <v-list-tile v-for="(subject, index) in subjects" :key="index" :href="subject.url">
            <v-list-tile-title>{{ subject.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat href='/#/downloads'>
        downloads
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span style="padding-left: 2%;">Jesse Boogaard &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      subjects: [
        { title: 'Media', url: '/#/media' },
        { title: 'Software', url: '/#/software' },
        { title: 'Technology', url: '/#/technology' },
        { title: 'Business', url: '/#/business' },
        { title: 'Portfolio', url: '/#/portfolio' }
      ]
    }
  },
  name: 'App'
}
</script>
