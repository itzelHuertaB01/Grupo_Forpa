<template>
  <div>
    <v-app-bar app color="#F3F3F3" elevation="0" class="custom-app-bar">
      <v-container fluid class="pa-0">
        <v-row align="center" justify="space-between" no-gutters class="w-100 mt-2">
          <v-col cols="auto" class="pl-2" v-if="isMobile">
            <v-btn icon @click="drawer = !drawer">
              <v-icon color="#08093F">mdi-menu</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="auto" class="pl-2 text-title">
            <h1 class="font-weight-bold">{{ currentTitle }}</h1>
          </v-col>

          <v-col class="d-flex justify-center flex-grow-1 px-2">
            <v-text-field
              v-model="searchTerm"
              placeholder="Buscar..."
              prepend-inner-icon="mdi-magnify"
              append-icon="mdi-microphone"
              solo
              dense
              hide-details
              class="custom-search"
              @input="searchProducts"
            />
          </v-col>

          <v-col v-if="!isMobile" cols="auto" class="d-flex align-center pr-2">
            <v-menu offset-y left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="custom-notification" v-bind="attrs" v-on="on">
                  <v-badge
                    v-if="notificaciones.length"
                    color="red"
                    :content="notificaciones.length"
                  >
                    <v-icon color="#08093F">mdi-bell</v-icon>
                  </v-badge>
                  <v-icon v-else color="#08093F">mdi-bell</v-icon>
                </v-btn>
              </template>
              <v-card width="350px">
                <v-list style="max-height: 400px; overflow-y: auto">
                  <div
                    v-for="(noti, index) in notificaciones"
                    :key="index"
                    class="notification-item"
                  >
                    <div class="d-flex justify-space-between align-center">
                      <span class="notification-title">{{ noti.titulo }}</span>
                      <small class="text-muted">{{ noti.fecha }}</small>
                    </div>
                    <p class="notification-text">{{ noti.mensaje }}</p>
                    <v-divider v-if="index !== notificaciones.length - 1" />
                  </div>
                </v-list>
              </v-card>
            </v-menu>

            <div class="d-flex align-center ml-4">
              <div class="d-flex flex-column text-right mr-3">
                <span class="text-primary font-weight-medium">
                  {{ clientFullName }}
                </span>
                <small class="text-muted">{{ clientFormattedRole }}</small>
              </div>
              <v-avatar :size="avatarSize" class="grey lighten-2" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      app
      temporary
      class="custom-drawer"
    >
      <div class="user-info">
        <div class="close-button">
          <v-btn icon @click="drawer = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-avatar size="60" class="avatar-overlay mb-2" />
        <div class="user-text">
          <span class="text-primary font-weight-medium">{{ clientFullName }}</span>
          <p class="mb-0">{{ clientFormattedRole }}</p>
        </div>
      </div>

      <v-list>
        <template v-for="item in menuItems">
          <router-link
            v-if="item.route"
            :key="item.route + '-link'"
            :to="item.route"
            class="menu-link"
          >
            <v-list-item
              :class="{ 'active-menu-item': $route.path === item.route }"
              clickable
            >
              <v-list-item-icon>
                <v-badge
                  v-if="item.route === '/notificaciones' && notificaciones.length"
                  color="red"
                  :content="notificaciones.length"
                >
                  <v-icon color="#29235C">{{ item.icon }}</v-icon>
                </v-badge>
                <v-icon v-else color="#29235C">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="menu-text">{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <v-list-item
            v-else-if="item.action === 'logout'"
            :key="item.text + '-logout'"
            class="menu-link"
            clickable
            @click="logout"
          >
            <v-list-item-icon>
              <v-icon color="#29235C">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="menu-text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    role: { type: String, required: true },
  },
  data() {
    return {
      drawer: false,
      searchTerm: "",
      notificaciones: [
        { titulo: "Oferta especial...", mensaje: "...", fecha: "01/03" },
        // recorta por brevedad
      ],
    };
  },
  computed: {
    menuItems() {
      const baseItems = {
        admin: [
          { text: "Inicio", icon: "mdi-home-outline", route: "/admin/Index_Admin" },
          { text: "Usuarios", icon: "mdi-account-outline", route: "/admin/Users_Admin" },
          { text: "Productos", icon: "mdi-shopping-outline", route: "/admin/Orders_Admin" },
          { text: "Catálogos", icon: "mdi-book-open-outline", route: "/admin/UploadFiles_Admin" },
        ],
        preventista: [
          { text: "Inicio", icon: "mdi-home-outline", route: "/preventive/Shopping_Pre" },
          { text: "Notificaciones", icon: "mdi-bell-outline", route: "/preventive/Notifications_Pre" },
          { text: "Ver Pedidos", icon: "mdi-shopping-outline", route: "/preventive/Orders_Pre" },
          { text: "Historial", icon: "mdi-clipboard-text-clock-outline", route: "/preventive/History_Pre" },
          { text: "Catálogo", icon: "mdi-book-open-outline", route: "/preventive/Catalog_Pre" },
          { text: "Ofertas", icon: "mdi-tag-outline", route: "/preventive/Offers_Pre" },
        ],
        cliente: [
          { text: "Inicio", icon: "mdi-home-outline", route: "/client/Home_Cli" },
          { text: "Notificaciones", icon: "mdi-bell-outline", route: "/client/Notifications_Cli" },
          { text: "Ver Pedidos", icon: "mdi-shopping-outline", route: "/client/Orders_Cli" },
          { text: "Historial", icon: "mdi-clipboard-text-clock-outline", route: "/client/History_Cli" },
          { text: "Catálogo", icon: "mdi-book-open-outline", route: "/client/Catalog_Cli" },
          { text: "Ofertas", icon: "mdi-tag-outline", route: "/client/Ofertas_Cli" },
        ],
      };
      return [...(baseItems[this.role] || []), { text: "Salir", icon: "mdi-logout", action: "logout" }];
    },
    currentTitle() {
      const path = this.$route.path;
      const match = this.menuItems.find((item) => item.route && path.startsWith(item.route));
      return match ? match.text : "Inicio";
    },
    avatarSize() {
      return this.$vuetify.breakpoint.smAndDown ? 35 : 45;
    },
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    clientName() {
      return localStorage.getItem("clientName") || "Sin nombre";
    },
    clientRole() {
      return localStorage.getItem("clientRole") || "Cliente";
    },
    clientFullName() {
      return this.clientName.split(" ").map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(" ");
    },
    clientFormattedRole() {
      return this.clientRole.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
    },
  },
  methods: {
    searchProducts() {
      const path = "/client/Home_Cli";
      if (this.searchTerm.trim() !== "") {
        this.$router.replace({ path, query: { term: this.searchTerm.trim() } });
      } else {
        this.$router.replace({ path });
      }
    },
    logout() {
      try {
        this.$api.logout?.();
        localStorage.clear();
        sessionStorage.clear();
        this.$router.push("/");
      } catch (e) {
        console.error("Error al cerrar sesión:", e);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.custom-search {
  width: 100%;
  max-width: none;
  border-radius: 24px;
  margin: 0 50px;
}

.custom-notification {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0e0e0;
  border-radius: 50%;
}

.v-avatar {
  margin-left: 10px;
}

.text-title h1 {
  font-size: 38px;
}

@media (max-width: 960px) {
  .text-title h1 {
    font-size: 28px;
  }

  .custom-search {
    margin: 0 30px;
  }
}

@media (max-width: 600px) {
  .text-title h1 {
    font-size: 18px;
  }

  .custom-search {
    margin: 0 10px;
  }
}

.custom-app-bar {
  background-color: #f3f3f3;
}

.custom-drawer {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-top: 0 !important;
}

.custom-drawer .v-navigation-drawer__content,
.custom-drawer .v-list,
.custom-drawer .v-list-item {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
}

.user-info {
  position: relative;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
  overflow: hidden;
  background: url("/img/fondo_noti.png") no-repeat center top;
  background-size: cover;
  padding-top: 20px;
  margin-bottom: 5px;
}

.avatar-overlay {
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
}

.user-text span {
  font-size: 16px;
  margin-bottom: 2px;
}

.user-text p {
  font-size: 14px;
  margin-top: 0;
}

.menu-text {
  color: #29235c;
  font-weight: bold;
  margin-left: 8px;
}

.active-menu-item {
  border-left: 3px solid #29235c !important;
  margin-left: 5px;
  border-radius: 3px;
}

.active-menu-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 15%;
  bottom: 15%;
  width: 3px;
  display: block;
}

.text-muted {
  color: #757575;
}

.notification-item {
  padding: 12px 16px;
  min-height: 80px;
  white-space: normal;
  word-wrap: break-word;
  background-color: white;
  cursor: default;
  user-select: none;
  pointer-events: none;
}

.notification-title {
  font-size: 16px;
  font-weight: bold;
  white-space: normal;
  word-wrap: break-word;
}

.notification-text {
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
}

.v-list-item {
  pointer-events: auto;
}

.v-list-item:hover {
  background-color: transparent !important;
}

.v-list {
  padding: 0;
}

.v-divider {
  margin: 0;
}
</style>
