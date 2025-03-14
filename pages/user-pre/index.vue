<template>
    <div class="preventista-container">
      <!-- Filtros responsivos -->
      <div class="filters-container">
        <v-chip-group v-model="ubicacionSeleccionada" mandatory>
            <v-chip
        v-for="(ubicacion, index) in ubicaciones"
        :key="index"
        :value="ubicacion"
        :class="{
            'chip-seleccionado': ubicacionSeleccionada === ubicacion,
            'chip-no-seleccionado': ubicacionSeleccionada !== ubicacion
        }"
        class="font-weight-medium"
        elevated
        pill
        >
  {{ ubicacion }}
  </v-chip>
  
        </v-chip-group>
      </div>
  
      <!-- Título principal -->
      <h1 class="title-text">Clientes</h1>
      
      <!-- Contenedor de tarjetas -->
      <v-row>
        <!-- Tarjeta individual -->
        <v-col
          v-for="(cliente, index) in clientesFiltrados"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card
            @click="irACompras(cliente)"
            class="cliente-card"
            elevation="2"
          >
            <!-- Barra superior con gradiente -->
            <div class="card-gradient-bar"></div>
  
            <!-- Contenido de la tarjeta -->
            <v-card-text>
              <!-- Sección con el avatar e información -->
              <div class="cliente-header">
                <!-- Avatar con iniciales -->
                <v-avatar color="green darken-1" size="40" class="mr-3">
                  <span class="white--text">{{ getInitials(cliente.nombre) }}</span>
                </v-avatar>
                <!-- Nombre del cliente -->
                <h2 class="cliente-nombre">{{ cliente.nombre }}</h2>
              </div>
              
              <!-- Teléfono con ícono -->
              <div class="cliente-telefono">
                <v-icon small class="mr-2">mdi-phone</v-icon>
                <span>{{ cliente.telefono }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ClientesPreventista',
    layout: 'preventista',
    
    head() {
      return {
        title: "Inicio - Preventista",
        meta: [{ name: "inicio", content: "Inicio - Preventista" }],
      };
    },
        
    data() {
      return {
        ubicacionSeleccionada: 'Todo',
        // Ubicaciones disponibles para el filtro
        ubicaciones: ['Todo', 'Tecamachalco', 'Tepeaca', 'Tuzuapan', 'Acatzingo'],
        
        // Simulación de datos de clientes
        clientes: [
          { nombre: 'Juan Pérez', telefono: '555-1234', ubicacion: 'Tecamachalco' },
          { nombre: 'María López', telefono: '555-5678', ubicacion: 'Tepeaca' },
          { nombre: 'Carlos Gómez', telefono: '555-8765', ubicacion: 'Tuzuapan' },
          { nombre: 'Laura Sánchez', telefono: '555-4321', ubicacion: 'Acatzingo' },
          { nombre: 'Pedro Morales', telefono: '555-7890', ubicacion: 'Tecamachalco' },
          { nombre: 'Lucía Fernández', telefono: '555-2468', ubicacion: 'Tepeaca' },
          { nombre: 'Andrés García', telefono: '555-1357', ubicacion: 'Tuzuapan' },
          { nombre: 'Sofía Martínez', telefono: '555-9753', ubicacion: 'Acatzingo' }
        ]
      };
    },
    
    computed: {
      clientesFiltrados() {
        return this.ubicacionSeleccionada === 'Todo'
          ? this.clientes
          : this.clientes.filter(cliente => cliente.ubicacion === this.ubicacionSeleccionada);
      }
    },
    
    methods: {
      irACompras(cliente) {
        this.$router.push({
          path: '/compras-pre',
          query: { nombre: cliente.nombre, telefono: cliente.telefono }
        });
      },
      
      getInitials(name) {
        return name
          .split(' ')
          .map(n => n[0])
          .join('')
          .slice(0, 2)
          .toUpperCase();
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .preventista-container {
    width: 100%;
    padding: 24px;
  }
  
  .filters-container {
    width: 100%;
    margin-bottom: 24px;
    overflow-x: auto;
    
    @media (min-width: 600px) {
      overflow: visible;
    }
  }
  
  .chip-seleccionado {
  background-color: green !important;
  color: white !important;
  }
  
  .chip-no-seleccionado {
  background-color: white !important;
  color: black !important;
  }
  
  
  .title-text {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.87);
  }
  
  .cliente-card {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
  }
  
  .card-gradient-bar {
    position: absolute;
    top:.0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(to right, #4CAF50, #2E7D32);
  }
  
  .cliente-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding-top: 8px;
  }
  
  .cliente-nombre {
    font-weight: 600;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.87);
  }
  
  .cliente-telefono {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
  }
  </style>