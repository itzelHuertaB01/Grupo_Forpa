<template>
    <v-container>
      <v-card class="pa-5">
        <v-row>
          <v-col cols="12">
            <h3 class="font-weight-bold">Llega entre el {{ estimatedDelivery }}</h3>
            
            <v-stepper non-linear alt-labels class="elevation-0 mt-4">
              <v-stepper-header>
                <v-stepper-step
                  v-for="(step, index) in steps"
                  :key="index"
                  :complete="index < currentStep"
                  :color="index <= currentStep ? 'green' : 'grey'"
                >
                  <span :class="{'font-weight-bold': index === currentStep}">{{ step.title }}</span>
                  <small>{{ step.date }}</small>
                </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-col>
        </v-row>
  
        <v-divider class="my-4"></v-divider>
        
        <v-row>
          <v-col cols="12">
            <h4 class="font-weight-medium">Detalles de seguimiento</h4>
            <v-timeline dense>
              <v-timeline-item
                v-for="(detail, index) in details"
                :key="index"
                :color="index === 0 ? 'green' : 'grey'"
                small
              >
                <template v-slot:opposite>
                  <span class="text-caption">{{ detail.date }}</span>
                </template>
                <v-card class="pa-3">
                  <p class="mb-0">{{ detail.text }}</p>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12" class="text-right">
            <v-btn text color="primary">Ver detalles ▼</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        estimatedDelivery: "24 de Febrero",
        steps: [
          { title: "Pedido confirmado", date: "Lunes, Enero 31 2025" },
          { title: "En preparación", date: "Lunes, Febrero 02 2025" },
          { title: "En camino", date: "" },
          { title: "Entregado", date: "" }
        ],
        details: [
          { date: "Lunes, Febrero 02 2025", text: "Estamos reuniendo los productos de tu pedido." },
          { date: "Lunes, Enero 31 2025", text: "Hemos recibido tu pedido y está en proceso de validación." }
        ],
        currentStep: 1
      };
    }
  };
  </script>
  
  <style scoped>
  .v-stepper-step span {
    font-size: 14px;
  }
  </style>
  