<template>
  <div class="order-list fill-height">
    <div class="d-flex align-center mb-6 px-4">
      <v-select v-model="selectedFilter" :items="filterOptions" dense outlined hide-details class="filter-select mr-4"
        prepend-inner-icon="mdi-filter-variant"></v-select>
      <div class="order-count grey--text text--darken-1">{{ totalOrders }} pedidos</div>
    </div>

    <div class="orders-container">
      <div v-for="(dateGroup, index) in groupedOrders" :key="index" class="date-group mb-6">
        <div class="date-header pa-4">
          {{ dateGroup.date }}
          <span v-if="dateGroup.tag" class="date-tag ml-2">{{ dateGroup.tag }}</span>
        </div>

        <v-divider></v-divider>

        <div v-for="order in dateGroup.orders" :key="order.id" class="order-item">
          <div class="order-content">
            <div class="order-left">
              <div class="order-number success--text">{{ order.id }}</div>
              <div class="order-location font-weight-bold">{{ order.location }}</div>
              <div class="product-description">{{ order.product }}</div>
              <div class="order-quantity grey--text">{{ order.quantity }}</div>
            </div>

            <div class="order-center">
              <div class="customer-name">{{ order.customer }}</div>
              <div class="message-btn-container">
                <v-btn text small color="success" class="send-message-btn px-0">
                  <v-icon small left>mdi-email-outline</v-icon>
                  Enviar Mensaje
                </v-btn>
              </div>
            </div>

            <div class="order-right">
              <v-btn color="success" outlined class="mr-3 view-order-btn">
                Ver Pedido
              </v-btn>

              <v-menu offset-y left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn outlined color="light-green lighten-3" class="status-btn" v-bind="attrs" v-on="on">
                    Estado
                    <v-icon right>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(status, i) in statusOptions" :key="i" @click="updateStatus(order.id, status)">
                    <v-list-item-title>{{ status }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <v-divider></v-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  layout: 'admin',
  head() {
    return {
      title: "Inicio - Administrador",
      meta: [{ name: "inicio", content: "Administrador" }],
    };
  },
  data() {
    return {
      selectedFilter: 'Todos',
      filterOptions: ['Todos', 'Pendientes', 'Completados', 'Cancelados'],
      totalOrders: 500,
      statusOptions: ['Pendiente', 'En proceso', 'Completado', 'Cancelado'],
      orders: [
        {
          id: '01565',
          date: '25 de febrero',
          location: 'TUZUAPAN',
          product: 'Estuche con 50 cuchillas SKA',
          quantity: '1 Unidad',
          customer: 'Lizeth Huerta Beristain',
          status: 'Pendiente'
        },
        {
          id: '01566',
          date: '10 de enero',
          location: 'PALMARITO',
          product: 'Estuche con 50 cuchillas SKA',
          quantity: '20 Unidades',
          customer: 'Valeria Vázquez Castillo',
          status: 'Pendiente'
        },
        {
          id: '01567',
          date: '10 de enero',
          location: 'TECAMACHALCO',
          product: 'Estuche con 50 cuchillas SKA',
          quantity: '10 Unidades',
          customer: 'Cristina Escalante Torres',
          status: 'Pendiente'
        },
        {
          id: '01568',
          date: '20 de diciembre de 2024',
          location: 'TEPEACA',
          product: 'Estuche con 50 cuchillas SKA',
          quantity: '10 Unidades',
          customer: 'Willy Martinez Valerio',
          status: 'Pendiente',
        }
      ]
    }
  },

  computed: {
    groupedOrders() {
      // Group orders by date
      const groups = {};

      this.orders.forEach(order => {
        if (!groups[order.date]) {
          groups[order.date] = {
            date: order.date,
            orders: [],
            tag: order.tag || null
          };
        }

        groups[order.date].orders.push(order);
      });

      // Convert to array for v-for
      return Object.values(groups);
    }
  },

  methods: {
    updateStatus(orderId, newStatus) {
      // Find and update the order status
      const orderToUpdate = this.orders.find(order => order.id === orderId);
      if (orderToUpdate) {
        orderToUpdate.status = newStatus;
      }
    }
  }
}
</script>

<style scoped>
.order-list {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-x: hidden;
}

.fill-height {
  height: 100%;
}

.orders-container {
  padding: 0 16px 16px 16px;
  overflow-x: visible;
  width: 100%;
}

.date-group {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
}

.filter-select {
  max-width: 180px;
}

.date-header {
  font-weight: 500;
  font-size: 16px;
  background-color: white;
}

.date-tag {
  font-size: 12px;
  color: #757575;
}

.order-item {
  width: 100%;
}

.order-content {
  display: flex;
  padding: 16px;
  width: 100%;
  flex-wrap: wrap;
}

.order-left {
  flex: 1;
  min-width: 200px;
  padding-right: 16px;
  margin-bottom: 16px;
}

.order-center {
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
}

.order-right {
  flex: 1;
  min-width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
}

.order-number {
  color: #2e7d32;
  margin-bottom: 8px;
}

.order-location {
  margin-bottom: 8px;
}

.product-description {
  margin-bottom: 4px;
}

.customer-name {
  font-weight: 500;
  margin-bottom: 10px;
}

.message-btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.send-message-btn {
  text-transform: none;
  letter-spacing: 0;
}

.view-order-btn {
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: 8px;
}

.status-btn {
  text-transform: none;
  letter-spacing: 0;
  color: #558b2f;
  background-color: #f1f8e9;
}

@media (min-width: 960px) {
  .orders-container {
    padding: 0 24px 24px 24px;
  }

  .order-content {
    flex-wrap: nowrap;
  }

  .order-left,
  .order-center,
  .order-right {
    margin-bottom: 0;
  }

  .order-center {
    text-align: center;
  }

  .view-order-btn {
    margin-bottom: 0;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .orders-container {
    padding: 0 20px 20px 20px;
  }

  .order-content {
    flex-wrap: wrap;
  }

  .order-left {
    flex: 0 0 45%;
  }

  .order-center {
    flex: 0 0 45%;
    text-align: right;
    align-items: flex-end;
  }

  .order-right {
    flex: 0 0 100%;
    justify-content: flex-end;
    margin-top: 16px;
  }

  .view-order-btn,
  .status-btn {
    margin-bottom: 0;
  }
}

@media (max-width: 599px) {
  .orders-container {
    padding: 0 12px 12px 12px;
  }

  .order-content {
    flex-wrap: wrap;
    flex-direction: column;
  }

  .order-left,
  .order-center,
  .order-right {
    flex: 0 0 100%;
    min-width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .order-left {
    margin-bottom: 16px;
  }

  .order-center {
    margin-bottom: 16px;
  }

  .order-right {
    flex-direction: column;
    width: 100%;
  }

  .view-order-btn,
  .status-btn {
    width: 100%;
    margin-right: 0 !important;
  }

  .view-order-btn {
    margin-bottom: 8px;
  }
}
</style>