<template>
    <v-app>
      <v-container fluid class="d-flex flex-column" style="padding: 20px; background-color: #F3F3F3;">
        <v-row>
          <v-col cols="12" sm="6" class="d-flex align-center">
            <v-select
              v-model="selectedFilter"
              :items="filters"
              label="Filtrar por"
              dense
              outlined
              prepend-icon="mdi-filter-outline"
              style="max-width: 200px; font-size: 14px; border-radius: 16px; box-shadow: none;"
            >
            </v-select>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-center justify-start">
            <span style="font-size: 14px; color: #29235C; font-weight: 500;">{{ filteredPurchases.length }} compras</span>
          </v-col>
        </v-row>
          <v-row>
          <v-col v-for="(purchase, index) in filteredPurchases" :key="index" cols="12">
            <v-card
              class="mb-4"
              outlined
              style="max-width: 1200px; margin-left: auto; margin-right: auto; background-color: #ffffff; border-radius: 16px; height: auto; padding: 20px;"
            >
              <!-- Fecha y separación -->
              <v-card-title class="d-flex justify-between align-center" style="padding-bottom: 10px;">
                <div>
                  <span class="text-h6 font-weight-bold">{{ formatDate(purchase.date) }}</span>
                </div>
              </v-card-title>
  
              <v-divider></v-divider>
  
              <!-- Estado como texto sin fondo -->
              <v-card-subtitle class="text-h6" style="color: #29235C; margin-top: 3px;">
                {{ purchase.status }}
              </v-card-subtitle>
  
              <!-- Leyenda de entrega debajo del estado -->
              <v-card-subtitle class="text-body-2" style="color: gray; margin-top: 3px;">
                Llegó el {{ formatDate(purchase.details) }}
              </v-card-subtitle>
    
              <!-- Descripción y unidades -->
              <v-card-text>
                <p>{{ purchase.description }}</p>
                <p>{{ purchase.units }} Unidad(es)</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedFilter: 'Todas', // Default filter value
        filters: [
          { text: 'Todas', value: 'Todas', icon: 'mdi-all-inclusive' },
          { text: 'Entregado', value: 'Entregado', icon: 'mdi-checkbox-marked-circle' },
          { text: 'Pendiente', value: 'Pendiente', icon: 'mdi-clock-outline' }
        ], // Filter options with icons
        purchases: [
          {
            date: '2023-01-23',
            status: 'Entregado',
            description: 'Estuche con 50 cuchillas SKA',
            details: '2023-01-28',
            units: 1,
          },
          {
            date: '2023-01-10',
            status: 'Entregado',
            description: 'Estuche con 50 cuchillas SKA',
            details: '2023-01-15',
            units: 20,
          },
          {
            date: '2025-02-05',
            status: 'Entregado',
            description: 'Estuche con 50 cuchillas SKA',
            details: '2025-02-10',
            units: 1,
          },
          {
            date: '2025-02-18',
            status: 'Entregado',
            description: 'Estuche con 50 cuchillas SKA',
            details: '2025-02-26',
            units: 20,
          },
          {
            date: '2025-03-01',
            status: 'Pendiente',
            description: 'Estuche con 50 cuchillas SKA',
            details: 'Esperando fecha de entrega',
            units: 10,
          },
          {
            date: '2025-03-05',
            status: 'Pendiente',
            description: 'Estuche con 50 cuchillas SKA',
            details: 'Esperando fecha de entrega',
            units: 5,
          },
        ],
      };
    },
    computed: {
      filteredPurchases() {
        if (this.selectedFilter === 'Todas') {
          return this.purchases; // Show all purchases when the filter is "Todas"
        }
        return this.purchases.filter(purchase => purchase.status === this.selectedFilter); // Filter by selected status
      },
    },
    methods: {
      // Método para formatear las fechas
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('es-ES', options);
      }
    },
  };
  </script>
  
  <style scoped>
  .card-no-shadow {
    box-shadow: none !important;
  }
  
  .white-text {
    color: #FFFFFF !important;
  }
  
  .v-col {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  
  .v-card-title {
    font-weight: bold;
  }
  
  .v-chip {
    font-weight: bold;
  }
  
  h1 {
    color: #29235C;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .v-card-subtitle {
    font-size: 16px;
    color: gray;
  }
  
  .v-card-text {
    font-size: 14px;
  }
  
  @media (max-width: 600px) {
    .v-col {
      margin-left: 0 !important;
    }
  
    .v-card {
      width: 100%;
      max-width: 350px;
    }
  }
  
  .v-divider {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  
  @media (min-width: 601px) {
    .v-card {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  </style>
  