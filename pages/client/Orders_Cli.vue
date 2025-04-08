<template>
  <v-container fluid class="full-screen">
    <!-- Título de la vista -->
    <v-row>
      <v-col cols="12">
        <h2 class="font-weight-bold text-primary title-text">Seguimiento de tus pedidos</h2>
      </v-col>
    </v-row>

    <!-- Lista de pedidos no entregados -->
    <v-row v-if="filteredOrders.length">
      <v-col v-for="order in filteredOrders" :key="order.id_pedido" cols="12">
        <v-card :class="{'cancelled-card': order.estado === 'cancelado'}" class="pa-4 card-container" outlined>
          <v-row>
            <v-col cols="12">
              <h3 class="font-weight-bold text-primary title-text">
                <span class="delivery-text">
                  Llega entre el {{ formatDate(order.fecha_entrega_estimada) }}
                </span>
              </h3>
            </v-col>
          </v-row>

          <v-divider class="my-2"></v-divider>

          <!-- Encabezado: Fechas y estado -->
          <v-row>
            <v-col cols="6">
              <p><strong>Realizado:</strong> {{ formatDate(order.fecha_levantamiento_pedido) }}</p>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-chip color="primary" text-color="white">
                {{ order.estado.toUpperCase() }}
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="my-2"></v-divider>

          <!-- Timeline de seguimiento -->
          <div class="tracking-container">
            <div v-if="isMobile" class="timeline">
              <div v-for="(step, index) in getTimelineSteps(order)" :key="index" class="timeline-item">
                <div class="timeline-line" :class="{ completed: index < getCurrentStep(order) }"></div>
                <div class="timeline-circle" :class="{ completed: index < getCurrentStep(order) }"></div>
                <div class="timeline-content">
                  <p class="step-title" :class="{ highlight: index <= getCurrentStep(order) }">
                    {{ step.title }}
                  </p>
                  <small class="step-date">{{ step.date || 'Pendiente' }}</small>
                </div>
              </div>
            </div>
            <div v-else class="progress-horizontal">
              <div class="progress-line">
                <div class="progress-line-completed" :style="{ width: getProgressWidth(order) }"></div>
              </div>
              <div class="steps">
                <div v-for="(step, index) in getTimelineSteps(order)" :key="index" class="step">
                  <div class="circle" :class="{ completed: index < getCurrentStep(order) }"></div>
                  <p class="step-title" :class="{ highlight: index <= getCurrentStep(order) }">
                    {{ step.title }}
                  </p>
                  <small class="step-date">{{ step.date || 'Pendiente' }}</small>
                </div>
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
                  <div
                    v-for="(detail, index) in order.showDetails ? getDetails(order) : getDetails(order).slice(0, 2)"
                    :key="index"
                    class="detail-item"
                  >
                    <span class="detail-date">{{ detail.date }}</span>
                    <p class="detail-text">{{ detail.text }}</p>
                  </div>
                </div>
              </v-expand-transition>
            </v-col>
          </v-row>
          <v-row v-if="getDetails(order).length > 2">
            <v-col cols="12" class="text-left">
              <v-btn text color="primary" class="font-weight-bold btn-details" @click="toggleDetails(order)">
                {{ order.showDetails ? 'Ocultar detalles ▲' : 'Ver detalles ▼' }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Mensaje en caso de no haber pedidos pendientes o en camino -->
    <v-row v-else>
      <v-col cols="12">
        <v-alert type="info">No tienes pedidos pendientes o en camino.</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      isMobile: process.client ? window.innerWidth < 600 : false
    }
  },
  computed: {
    // Filtra los pedidos para mostrar solo los que NO están en estado "entregado"
    filteredOrders() {
      return this.orders.filter(order => order.estado !== 'entregado');
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth < 600;
    },
    getPreparationDate(order) {
      if (!order || !order.fecha_levantamiento_pedido) return '';
      let d = new Date(order.fecha_levantamiento_pedido);
      d.setDate(d.getDate() + 1);
      return this.formatDate(d);
    },
    getShippingDate(order) {
      if (!order || !order.fecha_levantamiento_pedido) return '';
      let d = new Date(order.fecha_levantamiento_pedido);
      d.setDate(d.getDate() + 2);
      return this.formatDate(d);
    },
    getTimelineSteps(order) {
      return [
        { title: 'Pedido confirmado', date: order.fecha_levantamiento_pedido ? this.formatDate(order.fecha_levantamiento_pedido) : '' },
        { title: 'En preparación', date: order.fecha_levantamiento_pedido ? this.getPreparationDate(order) : 'Pendiente' },
        { title: 'En camino', date: order.estado === 'enviado' ? this.getShippingDate(order) : 'Pendiente' },
        { title: 'Entregado', date: order.estado === 'entregado' ? this.formatDate(order.fecha_entrega_estimada) : 'Pendiente' }
      ];
    },
    getCurrentStep(order) {
      switch (order.estado) {
        case 'pendiente':
          return 1;
        case 'enviado':
          return 2;
        case 'cancelado':
          return 0;
        case 'entregado':
          return 3;
        default:
          return 0;
      }
    },
    getProgressWidth(order) {
      let step = this.getCurrentStep(order);
      return (step / 3) * 100 + '%';
    },
    getDetails(order) {
      return [
        { date: order.fecha_levantamiento_pedido ? this.formatDate(order.fecha_levantamiento_pedido) : '', text: 'Hemos recibido tu pedido y está en proceso de validación.' },
        { date: order.fecha_levantamiento_pedido ? this.getPreparationDate(order) : 'Pendiente', text: 'Estamos reuniendo los productos de tu pedido.' },
        { date: order.estado === 'enviado' ? this.getShippingDate(order) : 'Pendiente', text: 'Tu pedido ha sido empacado y está listo para ser enviado.' },
        { date: order.estado === 'entregado' ? this.formatDate(order.fecha_entrega_estimada) : 'Pendiente', text: 'Tu paquete ha salido de nuestro almacén.' },
        { date: order.estado === 'entregado' ? this.formatDate(order.fecha_entrega_estimada) : 'Pendiente', text: 'El repartidor tiene tu pedido y está en camino.' }
      ];
    },
    toggleDetails(order) {
      if (order.showDetails === undefined) {
        this.$set(order, 'showDetails', true);
      } else {
        order.showDetails = !order.showDetails;
      }
    },
    fetchOrders() {
      const userId = localStorage.getItem("userId");
      if (!userId) return;
      this.$api.getUserOrders(userId, 'Todas')
        .then(response => {
          // Se asume que el backend retorna los pedidos ordenados descendentemente por fecha.
          // Agregamos la propiedad showDetails a cada pedido para el toggle de detalles.
          this.orders = response.map(order => ({ ...order, showDetails: false }));
        })
        .catch(error => {
          console.error("Error al obtener los pedidos:", error);
        });
    }
  },
  mounted() {
    this.fetchOrders();
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIsMobile);
  }
}
</script>

<style scoped>
.full-screen {
  min-height: 100vh;
  background-color: #f3f3f3;
  padding-top: 20px;
}

.card-container {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 95%;
  margin: auto;
  margin-bottom: 16px;
}

.delivery-text {
  color: #2c3e50;
  font-weight: bold;
}

.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
}

.timeline-line {
  position: absolute;
  width: 3px;
  height: 100%;
  left: 7px;
  top: 16px;
  background-color: #c4c4c4;
}

.timeline-line.completed {
  background-color: #247323;
}

.timeline-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-right: 10px;
  z-index: 2;
  position: relative;
}

.timeline-circle.completed {
  background-color: #247323;
}

.progress-horizontal {
  width: 100%;
  position: relative;
}

.progress-line {
  width: 100%;
  height: 4px;
  background-color: #c4c4c4;
  position: relative;
  overflow: hidden;
}

.progress-line-completed {
  height: 100%;
  background-color: #247323;
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.3s ease-in-out;
}

.steps {
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #c4c4c4;
}

.circle.completed {
  background-color: #247323;
}

.tracking-details {
  max-height: 1000px;
  overflow: hidden;
  transition: all 0.5s ease;
}

.detail-item {
  margin-bottom: 12px;
  padding-left: 10px;
}

.detail-date {
  font-size: 14px;
  font-weight: bold;
  color: #2c3e50;
}

.detail-text {
  margin: 4px 0 0 0;
  color: #555;
  font-size: 14px;
}

.btn-details {
  text-transform: uppercase;
  font-weight: bold;
  color: #2c3e50 !important;
}

/* Tarjeta para pedidos cancelados */
.cancelled-card {
  background-color: #ffe6e6 !important;
}
</style>
