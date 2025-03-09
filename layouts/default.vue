<template>
  <v-app>
    <v-main style="height: 100vh; padding: 0; margin: 0;">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      drawer: false,
      items: [
        { icon: 'mdi-apps', title: 'Home', to: '/' },
        { icon: 'mdi-chart-bubble', title: 'Inspire', to: '/inspire' }
      ]
    }
  }
}
</script>

<style scoped>
/* Asegúrate de que v-main ocupe toda la altura de la pantalla */
.v-main {
  height: 100vh;
  padding: 0;
  margin: 0;
}

</style>
