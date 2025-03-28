<template>
  <v-app class="bg-background">
    <!-- Oculta Sidebar y Navbar en rutas específicas -->
    <Sidebar v-if="showLayout" />
    <Navbar v-if="showLayout" />

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
    showLayout() {
      // Rutas donde NO queremos mostrar Sidebar ni Navbar
      const hiddenPaths = ['/', '/403', '/404', '/ErrorOffline'];
      return !hiddenPaths.includes(this.$route.path);
    }
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
