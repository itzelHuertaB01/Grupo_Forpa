<template>
    <v-app-bar app color="#F3F3F3" elevation="0" class="custom-app-bar">
      <v-container fluid class="pa-0">
        <v-row align="center" justify="space-between" no-gutters class="w-100 mt-2">
          
          <!-- Título Dinámico -->
          <v-col cols="auto" class="pl-2" style="font-size: larger;">
            <h1 class="font-weight-bold">{{ currentTitle }}</h1>
          </v-col>
  
          <!-- Buscador -->
          <v-col class="d-flex justify-center flex-grow-1 px-2">
            <v-text-field
              placeholder="Buscar..."
              prepend-inner-icon="mdi-magnify"
              append-icon="mdi-microphone"
              solo
              dense
              hide-details
              class="custom-search rounded"
            ></v-text-field>
          </v-col>
  
          <!-- Notificación y Perfil -->
          <v-col cols="auto" class="d-flex align-center pr-2">
            <v-btn icon class="custom-notification">
              <v-badge dot color="red">
                <v-icon color="#08093F">mdi-bell</v-icon>
              </v-badge>
            </v-btn>
  
            <div class="d-flex align-center ml-4">
              <div class="d-flex flex-column text-right mr-3">
                <span class="text-primary font-weight-medium">Itzel</span>
                <small class="text-muted">Cliente</small>
              </div>
              <v-avatar size="45" class="grey lighten-2"></v-avatar>
            </div>
          </v-col>
  
        </v-row>
      </v-container>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    computed: {
      currentTitle() {
        const titles = {
          "/home": "Inicio",
          "/pedidos": "Ver Pedidos",
          "/historial": "Historial",
          "/catalogo": "Catálogo"
        };
        return titles[this.$route.path] || "Inicio";
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-app-bar {
    box-shadow: none !important;
    border-bottom: none !important;
  }
  
  .custom-search {
    max-width: 400px;
    text-align: center;
    border-radius: 24px !important;
  }
  
  .custom-notification {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E0E0E0;
    border-radius: 50%;
  }
  
  .w-100 {
    width: 100%;
  }
  </style>
  