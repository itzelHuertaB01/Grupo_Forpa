<template>
  <v-app-bar app color="#F3F3F3" elevation="0" class="custom-app-bar">
    <v-container fluid class="pa-0">
      <v-row align="center" justify="space-between" no-gutters class="w-100 mt-2">
        
        <!-- Título Dinámico -->
        <v-col cols="auto" class="pl-2" style="font-size: larger;">
          <h1 class="font-weight-bold">{{ currentTitle }}</h1>
        </v-col>

        <!-- Buscador con Micrófono alineado correctamente -->
        <v-col class="d-flex justify-center flex-grow-1 px-2">
          <div class="search-container">
            <v-autocomplete
              v-model="searchQuery"
              :items="searchResults"
              item-text="name"
              item-value="code"
              placeholder="Buscar por nombre o código..."
              prepend-inner-icon="mdi-magnify"
              solo
              dense
              hide-details
              class="custom-search rounded"
              @update:search-input="handleSearch"
              @change="saveToHistory"
            ></v-autocomplete>

            <!-- Botón del Micrófono correctamente alineado -->
            <v-btn icon class="microphone-btn" @click="startVoiceRecognition">
              <v-icon>mdi-microphone</v-icon>
            </v-btn>
          </div>
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
  data() {
    return {
      searchQuery: "",
      searchResults: [],
      searchHistory: JSON.parse(localStorage.getItem("searchHistory")) || [], // Historial de búsqueda
      products: [
        { name: "Cinta de aislar de 18 m x 19 mm, negra, Truper", code: "12500 M-33" },
        { name: "Cinta masking tape de 1\" x 50 m, Truper", code: "12591 MSK-1" },
        { name: "Cinta masking tape de 2\" x 50 m, Truper", code: "12593 MSK-2" },
        { name: "Cinta masking tape de 3/4\" x 50 m, Truper", code: "12590 MSK-3/4" },
        { name: "Cinta de empaque 48 mm x 150 m transparente, Truper", code: "12557 CTR-150" }
      ]
    };
  },
  computed: {
    currentTitle() {
      const titles = {
        "/home": "Inicio",
        "/pedidos": "Ver Pedidos",
        "/historial": "Historial",
        "/catalogo": "Catálogo",
        "/ofertas": "Ofertas"
      };
      return titles[this.$route.path] || "Inicio";
    }
  },
  methods: {
    handleSearch(query) {
      if (!query || query.trim() === "") {
        this.searchResults = [...this.searchHistory]; // Mostrar historial si está vacío
        return;
      }

      const queryLower = query.toLowerCase();

      this.searchResults = this.products
        .filter(product =>
          product.name.toLowerCase().includes(queryLower) ||
          product.code.toLowerCase().includes(queryLower)
        )
        .map(product => ({
          name: `${product.name} (${product.code})`,
          value: product.code
        }));
    },
    saveToHistory() {
      if (this.searchQuery && !this.searchHistory.includes(this.searchQuery)) {
        this.searchHistory.unshift(this.searchQuery);
        if (this.searchHistory.length > 10) this.searchHistory.pop(); // Máximo 10 elementos
        localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
      }
    },
    startVoiceRecognition() {
      if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        alert("Tu navegador no soporta el reconocimiento de voz.");
        return;
      }

      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "es-ES"; // Configurar idioma en español

      recognition.onstart = () => {
        console.log("🎤 Escuchando...");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.searchQuery = transcript; // Asignar el texto dictado al input
        this.handleSearch(transcript); // Realizar la búsqueda automática
      };

      recognition.onerror = (event) => {
        console.error("Error en el reconocimiento de voz: ", event.error);
      };

      recognition.onend = () => {
        console.log("🎤 Finalizando grabación...");
      };

      recognition.start();
    }
  }
};
</script>

<style scoped>
.custom-app-bar {
  box-shadow: none !important;
  border-bottom: none !important;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
}

.custom-search {
  flex-grow: 1;
  border-radius: 24px !important;
}

.microphone-btn {
  position: absolute;
  right: 20px; 
  top: 50%;
  transform: translateY(-50%);
  background: none !important;
  color: #000;
}
</style>
