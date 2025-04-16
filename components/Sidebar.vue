<template>
  <v-navigation-drawer
    v-if="isLargeScreen"
    app
    :permanent="!isCollapsed"
    :mini-variant="false"
    color="#08093F"
    dark
    :width="isCollapsed ? 100 : 250"
    class="custom-sidebar"
  >
    <!-- Logo -->
    <div class="logo-container">
      <v-img :src="isCollapsed ? '/img/Logo_min.png' : '/img/Logo.png'" contain height="80" class="logo-img" />
    </div>

    <!-- Menú principal -->
    <v-list dense>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.route"
          class="menu-item"
          :class="{ 'selected-item': isSelected(item.route) }"
        >
          <v-list-item-icon>
            <v-icon :class="{ 'selected-icon': isSelected(item.route) }">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-if="!isCollapsed" :class="{ 'selected-text': isSelected(item.route) }">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <!-- Espaciador -->
    <v-spacer></v-spacer>

    <!-- Cerrar sesión -->
    <v-list dense>
      <v-list-item @click="logout" class="logout-item" link>
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-if="!isCollapsed">Salir</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- Botón colapsar menú -->
    <v-btn icon @click="toggleMenu" class="toggle-btn" dark>
      <v-icon>{{ isCollapsed ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    role: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedItem: null,
      isCollapsed: false
    };
  },
  computed: {
    isLargeScreen() {
      return this.$vuetify.breakpoint.lgAndUp;
    },
    menuItems() {
      switch (this.role) {
        case "admin":
          return [
            { text: "Inicio", icon: "mdi-home", route: "/admin/Index_Admin" },
            { text: "Productos", icon: "mdi-shopping", route: "/admin/Orders_Admin" },
            { text: "Usuarios", icon: "mdi-account", route: "/admin/Users_Admin" },
            { text: "Catálogos", icon: "mdi-book-open", route: "/admin/UploadFiles_Admin" },
          ];
        case "cliente":
          return [
            { text: "Inicio", icon: "mdi-home", route: "/client/Home_Cli" },
            { text: "Ver Pedidos", icon: "mdi-shopping", route: "/client/Orders_Cli" },
            { text: "Historial", icon: "mdi-clipboard-text-clock", route: "/client/History_Cli" },
            { text: "Catálogo", icon: "mdi-book-open", route: "/client/Catalog_Cli" },
            { text: "Ofertas", icon: "mdi-tag-outline", route: "/client/Ofertas_Cli" },
          ];
        case "preventista":
          return [
            { text: "Inicio", icon: "mdi-home", route: "/preventive/Shopping_Pre" },
            { text: "Ver Pedidos", icon: "mdi-shopping", route: "/preventive/Orders_Pre" },
            { text: "Historial", icon: "mdi-clipboard-text-clock", route: "/preventive/History_Pre" },
            { text: "Catálogo", icon: "mdi-book-open", route: "/preventive/Catalog_Pre" },
            { text: "Ofertas", icon: "mdi-tag", route: "/preventive/Offers_Pre" },
          ];
        default:
          return [];
      }
    }
  },
  methods: {
    isSelected(route) {
      return this.$route.path.startsWith(route);
    },
    toggleMenu() {
      this.isCollapsed = !this.isCollapsed;
    },
    async logout() {
      try {
        // Llama a tu backend para cerrar sesión
        await this.$api.logout();

        // Limpia el localStorage y sessionStorage
        localStorage.clear();
        sessionStorage.clear();

        // Redirige al login
        this.$router.push("/");
      } catch (err) {
        console.error("Error al cerrar sesión:", err);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.custom-sidebar {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100px;
}

.logo-img {
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
  height: 80px;
}

.menu-item {
  margin-left: 15px;
  padding: 10px 16px;
}

.selected-item {
  background-color: #F3F3F3 !important;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  color: transparent !important;
}

.selected-icon {
  color: #08093F !important;
}

.selected-text {
  color: #08093F !important;
  font-weight: bold;
}

.v-spacer {
  flex-grow: 1;
}

.logout-item {
  margin-left: 15px;
  padding: 10px 16px;
}

.toggle-btn {
  position: absolute;
  bottom: 20px;
  right: 30px;
  background-color: transparent;
  color: white;
  border-radius: 50%;
  z-index: 10;
}
</style>