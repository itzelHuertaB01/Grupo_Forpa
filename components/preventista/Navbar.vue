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

          <v-col cols="auto" class="pl-2 text-title" v-if="!isMobile">
            <h1 class="font-weight-bold">{{ currentTitle }}</h1>
          </v-col>


          <v-col class="d-flex justify-center flex-grow-1 px-2">
            <v-text-field
              placeholder="Buscar..."
              prepend-inner-icon="mdi-magnify"
              append-icon="mdi-microphone"
              solo
              dense
              hide-details
              class="custom-search"
            ></v-text-field>
          </v-col>

          <v-col v-if="!isMobile" cols="auto" class="d-flex align-center pr-2">
            <v-menu offset-y left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="custom-notification" v-bind="attrs" v-on="on">
                  <v-badge color="red" :content="notificaciones.length" v-if="notificaciones.length">
                    <v-icon color="#08093F">mdi-bell</v-icon>
                  </v-badge>
                  <v-icon v-else color="#08093F">mdi-bell</v-icon>
                </v-btn>
              </template>
              <v-card width="350px">
                <v-list style="max-height: 400px; overflow-y: auto;">
                  <div v-for="(noti, index) in notificaciones" :key="index" class="notification-item">
                    <div class="d-flex justify-space-between align-center">
                      <span class="notification-title">{{ noti.titulo }}</span>
                      <small class="text-muted">{{ noti.fecha }}</small>
                    </div>
                    <p class="notification-text">{{ noti.mensaje }}</p>
                    <v-divider v-if="index !== notificaciones.length - 1"></v-divider>
                  </div>
                </v-list>
              </v-card>
            </v-menu>

            <div class="d-flex align-center ml-4">
              <div class="d-flex flex-column text-right mr-3">
                <span class="text-primary font-weight-medium">Edgar Emmanuel</span>
                <small class="text-muted">Preventista</small>
              </div>
              <v-avatar :size="avatarSize" class="grey lighten-2">
              </v-avatar>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!--================== Menú móvil =======================-->
    <v-navigation-drawer v-if="isMobile" v-model="drawer" app temporary class="custom-drawer">
      <div class="user-info">
        <div class="close-button">
          <v-btn icon @click="drawer = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-avatar size="60" class="avatar-overlay mb-2">
        </v-avatar>
        <div class="user-text">
          <span class="font-weight-bold d-block">Edgar Emmanuel</span>
          <p class="mb-0">Preventista</p>
        </div>
      </div>
      <v-list>
        <router-link v-for="item in menuItems" :key="item.route" :to="item.route" exact custom v-slot="{ navigate, href, isActive }">
          <v-list-item :href="href" @click="navigate" :class="{'active-menu-item': isActive}" clickable>
            <v-list-item-icon>
              <v-badge v-if="item.route === '/notificaciones' && notificaciones.length" color="red" :content="notificaciones.length">
                <v-icon color="#29235C">{{ item.icon }}</v-icon>
              </v-badge>
              <v-icon v-else color="#29235C">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="menu-text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      notificaciones: [
        {
          titulo: "📢 Oferta especial en Estuche con 50 cuchillas SKA",
          mensaje: "Precio público: $125 | Precio Mayoreo: $90.52. ¡Aprovecha la promoción esta semana!",
          fecha: "01/03"
        },
        {
          titulo: "🔄 Reposición de stock: Martillo de uña",
          mensaje: "Clave: H-UÑA-16 | Código: 100102. ¡Ya está disponible nuevamente en tienda!",
          fecha: "02/03"
        },
        {
          titulo: "⚡ Descuento en Destornilladores de punta plana",
          mensaje: "Clave: DST-PLANA-6 | Código: 100103. Obtén un 15% de descuento en tu compra.",
          fecha: "03/03"
        },
        {
          titulo: "🚀 Últimas piezas disponibles: Llave ajustable 10”",
          mensaje: "Clave: LLAVE-AJ-10 | Código: 100104. ¡Solo quedan 5 unidades en stock!",
          fecha: "04/03"
        },
        {
          titulo: "🛠️ Nueva herramienta en catálogo: Serrucho profesional",
          mensaje: "Clave: SERR-PRO-12 | Código: 100105. ¡Ya disponible en nuestra tienda! Revisa las especificaciones y precios en nuestro catálogo.",
          fecha: "05/03"
        }
      ],
menuItems: [
        { text: "Inicio", icon: "mdi-home", route: "/user-pre" },
        { text: "Notificaciones", icon: "mdi-bell-outline", route: "/notificaciones-pre" },
        { text: "Ver Pedidos", icon: "mdi-shopping", route: "/pedidos-pre" },
        { text: "Historial", icon: "mdi-clipboard-text-clock", route: "/historial-pre" },
        { text: "Catálogo", icon: "mdi-book-open", route: "/catalogo-pre" },
        { text: "Ofertas", icon: "mdi-tag", route: "/ofertas-pre" }
      ]
    };
  },
  computed: {
    currentTitle() {
      return {
        "/user-pre/": "Inicio",
        "/notificaciones-pre": "Notificaciones",
        "/compras-pre": "Compras",
        "/pedidos-pre": "Ver Pedidos",
        "/historial-pre": "Historial",
        "/catalogo-pre": "Catálogo",
        "/ofertas-pre": "Ofertas"
      }[this.$route.path] || "Inicio";
    },
    avatarSize() {
      return this.$vuetify.breakpoint.smAndDown ? 35 : 45;
    },
    isMobile() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
  }
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
  background: #E0E0E0;
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
  background-color: #F3F3F3;
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
  background: url('/img/fondo_noti.png') no-repeat center top;
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
  color: #29235C;
  font-weight: bold;
  margin-left: 8px;
}

.active-menu-item {
  border-left: 3px solid #29235C !important;
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