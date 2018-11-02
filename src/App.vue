<template>
  <v-app dark>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app absolute>
      <span style="padding-left: 2%;">Jesse Boogaard &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {}
  },
  name: 'App'
}
</script>
