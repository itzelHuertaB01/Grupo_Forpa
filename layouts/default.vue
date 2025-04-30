<template>
  <v-app>
    <Sidebar v-if="showLayout" :role="userRole" />
    <Navbar v-if="showLayout" :role="userRole" />

    <v-main class="page-wrapper">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";
import Navbar from "~/components/Navbar.vue";

export default {
  components: { Sidebar, Navbar },
  computed: {
    showLayout() {
      return this.$route.path !== "/";
    },
    userRole() {
      const path = this.$route.path.toLowerCase();
      if (path.startsWith("/admin")) return "admin";
      if (path.startsWith("/client")) return "cliente";
      if (path.startsWith("/preventive")) return "preventista";
      return "cliente";
    },
  },
};
</script>

<style scoped>
html,
body {
  background-color: #f3f3f3 !important;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
}

.page-wrapper {
  background-color: #f3f3f3;
  min-height: 100vh;
  width: 100%;
}

.v-main {
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
