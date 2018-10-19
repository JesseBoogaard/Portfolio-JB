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
    <v-toolbar app>
      <v-btn icon href="/">
        <v-icon>code</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href='/#/timeline'>
        timeline
      </v-btn>
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
      title: 'Jesse Boogaard'
    }
  },
  name: 'App'
}
</script>
