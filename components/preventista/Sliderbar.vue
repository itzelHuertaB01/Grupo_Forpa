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
    <div class="logo-container">
      <v-img 
        :src="isCollapsed ? '/img/Logo_min.png' : '/img/Logo.png'" 
        contain 
        height="80"
        class="logo-img"
      ></v-img>
    </div>

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
            <v-icon :class="{ 'selected-icon': isSelected(item.route) }">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title v-if="!isCollapsed" :class="{ 'selected-text': isSelected(item.route) }">
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-spacer></v-spacer>

    <v-list dense>
      <v-list-item to="/logout" class="logout-item">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-if="!isCollapsed">Salir</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-btn 
      icon 
      @click="toggleMenu" 
      class="toggle-btn"
      dark
    >
      <v-icon>{{ isCollapsed ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
    </v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sliderbar",
  data() {
    return {
      isCollapsed: false,
      menuItems: [
        { text: "Inicio", icon: "mdi-home", route: "/user-pre" },
        { text: "Ver Pedidos", icon: "mdi-shopping", route: "/pedidos-pre" },
        { text: "Historial", icon: "mdi-clipboard-text-clock", route: "/historial-pre" },
        { text: "Catálogo", icon: "mdi-book-open", route: "/catalogo-pre" },
        { text: "Ofertas", icon: "mdi-tag", route: "/ofertas-pre" }
      ]
    };
  },
  computed: {
    isLargeScreen() {
      return this.$vuetify.breakpoint.lgAndUp;
    }
  },
  methods: {
    isSelected(route) {
      return this.$route.path === route;
    },
    toggleMenu() {
      this.isCollapsed = !this.isCollapsed;
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