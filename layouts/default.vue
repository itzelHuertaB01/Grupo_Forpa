<template>
  <v-app class="bg-background">
    <Sidebar v-if="showNavbar"/>
    <Navbar v-if="showNavbar" />

    <v-main class="page-wrapper">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'DefaultLayout',

  components: {
    Sidebar,
    Navbar
  },

  computed: {
    showNavbar() {
      return this.$route.path !== '/'; 
    }
  },

  data() {
    return {
      drawer: false,
      items: [
        { icon: 'mdi-apps', title: 'Home', to: '/' },
        { icon: 'mdi-chart-bubble', title: 'Inspire', to: '/inspire' }
      ]
    };
  }
};
</script>

<style scoped>
html, body {
  background-color: #F3F3F3 !important;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
}

.page-wrapper {
  background-color: #F3F3F3;
  min-height: 100vh;
  width: 100%;
}

.v-main {
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>