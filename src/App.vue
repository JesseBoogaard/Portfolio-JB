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
