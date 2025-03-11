<template>
  <v-container class="full-screen">
    <v-card class="pa-6 card-container">
      <v-row>
        <v-col cols="12">
          <h3 class="font-weight-bold text-primary title-text">
            Llega entre el {{ estimatedDelivery }}
          </h3>
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <!-- Línea de progreso -->
      <div class="tracking-container">
        <div class="progress-line">
          <div 
            class="progress-fill" 
            :style="{ width: ((currentStep - 1) / (steps.length - 1.3)) * 100 + '%' }">
          </div>
        </div>
        <div class="steps">
          <div v-for="(step, index) in steps" :key="index" class="step">
            <div class="circle" :class="{ 'active': index < currentStep }"></div>
            <p class="step-title" :class="{ 'font-weight-bold active-step': index === currentStep - 1 }">
              {{ step.title }}
            </p>
            <small class="step-date">{{ step.date || "Pendiente" }}</small>
          </div>
        </div>
      </div>

      <v-divider class="my-4"></v-divider>

      <!-- Detalles de seguimiento -->
      <v-row>
        <v-col cols="12">
          <h4 class="font-weight-medium">Detalles de seguimiento</h4>
          <v-expand-transition>
            <div class="tracking-details">
              <div v-for="(detail, index) in filteredDetails" :key="index" class="detail-item">
                <span class="detail-date">{{ detail.date }}</span>
                <p class="detail-text">{{ detail.text }}</p>
              </div>
            </div>
          </v-expand-transition>
        </v-col>
      </v-row>

      <!-- Botón de detalles -->
      <v-row>
        <v-col cols="12" class="text-left">
          <v-btn text color="primary" class="font-weight-bold btn-details" @click="toggleDetails">
            {{ showAllDetails ? 'OCULTAR DETALLES ▲' : 'VER DETALLES ▼' }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 2,
      estimatedDelivery: "24 de Febrero",
      showAllDetails: false,
      steps: [
        { title: "Pedido confirmado", date: "Lunes, Enero 31 2025" },
        { title: "En preparación", date: "Lunes, Febrero 02 2025" },
        { title: "En camino", date: "Pendiente" },
        { title: "Entregado", date: "Pendiente" }
      ],
      details: [
        { date: "Lunes, Enero 31 2025", text: "Hemos recibido tu pedido y está en proceso de validación." },
        { date: "Lunes, Febrero 02 2025", text: "Estamos reuniendo los productos de tu pedido." },
        { date: "Martes, Febrero 03 2025", text: "Tu pedido ha sido embalado y está listo para el envío." },
        { date: "Miércoles, Febrero 04 2025", text: "El paquete ha salido del almacén y está en camino." },
        { date: "Jueves, Febrero 05 2025", text: "El pedido está en la última etapa de entrega." }
      ]
    };
  },
  computed: {
    filteredDetails() {
      const relevantDetails = this.details.slice(0, this.currentStep + 1);
      return this.showAllDetails ? relevantDetails : relevantDetails.slice(0, 2);
    }
  },
  methods: {
    toggleDetails() {
      this.showAllDetails = !this.showAllDetails;
    }
  }
};
</script>

<style scoped>
.full-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F3F3;
  padding: 20px;
}

.card-container {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: #08093F !important;
}

.title-text {
  font-size: 1.2rem;
}

.tracking-container {
  position: relative;
  width: 100%;
  padding: 10px 0;
}

.progress-line {
  width: 85%;
  height: 4px;
  background-color: #C4C4C4;
  position: relative;
  margin: auto;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #247323;
  transition: width 0.4s ease-in-out;
}

.steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: auto;
  position: relative;
}

.step {
  text-align: center;
  flex: 1;
  position: relative;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #C4C4C4;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border: 2px solid white;
}

.active {
  background-color: #247323;
}

.active-step {
  color: #247323;
}

.btn-details {
  text-transform: uppercase;
  color: #08093F !important;
}
</style>