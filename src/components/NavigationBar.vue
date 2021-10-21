<template>
  <v-app-bar flat app bottom>
    <v-bottom-navigation grow fixed>
      <v-btn v-for="item in navItems" :key="item.title" :to="item.route">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<script lang="js">

  export default  {
    name: "Navigation",
    props: [],
    mounted () {

    },
    data () {
      return {
        navItems: [
          { title: 'Home', route: { name: 'home' }, icon: 'mdi-home' },
          { title: 'Create solution', route: { name: 'create-options' }, icon: 'mdi-plus-circle' },
          { title: 'Search', route: { name: 'search' }, icon: 'mdi-magnify' },
          { title: 'Profile', route: { name: 'profile', params: { author:'Jan Janssen'} }, icon: 'mdi-account-circle'}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>
