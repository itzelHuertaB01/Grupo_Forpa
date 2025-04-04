<template>
  <v-app>
    <v-container fluid class="d-flex flex-column" style="padding: 10px; background-color: #F3F3F3;">
      <!-- Filtro de pedidos y contador -->
      <v-row class="d-flex align-center" style="margin-bottom: 0;">
        <v-col cols="12" sm="6" class="d-flex align-center">
          <div class="select-container">
            <i class="mdi mdi-tune-variant custom-icon"></i>
            <select v-model="selectedFilter" class="custom-select">
              <option v-for="(filter, index) in filters" :key="index" :value="filter.value">
                {{ filter.text }}
              </option>
            </select>
            <i class="mdi mdi-menu-down custom-icon-right"></i>
          </div>
          <v-divider vertical
            style="height: 40px; border-left: 2px solid #7A7A7A; margin-left: 20px; margin-right: 10px;"></v-divider>
          <span style="font-size: 14px; color: #7A7A7A; font-weight: 500;">
            {{ sortedPurchases.length }} compras
          </span>
        </v-col>
      </v-row>

      <!-- Listado de pedidos -->
      <v-row>
        <v-col v-for="(purchase, index) in sortedPurchases" :key="purchase.id_pedido" cols="12">
          <v-card class="mb-4" outlined
            style="max-width: 1200px; margin-left: auto; margin-right: auto; background-color: #ffffff; border-radius: 16px; height: 200px; padding: 8px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; cursor: pointer;"
            @click="viewOrder(purchase)">
            <!-- Fecha y separación -->
            <v-card-title class="d-flex justify-content-between align-center" style="padding-bottom: 2px;">
              <span style="font-size: 20px; color: #29235C; margin: 0;">
                {{ formatDate(purchase.fecha_entrega_estimada) }}
              </span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle class="text-h6" :style="{ color: purchase.estado === 'Entregado' ? '#247323' : 'orange' }"
              style="margin-top: 2px; color: #29235C; font-size: 12px; padding: 5px; margin-left: 11px;">
              {{ purchase.estado }}
            </v-card-subtitle>
            <!-- Si el pedido está entregado, se muestra la fecha de entrega -->
            <v-card-subtitle v-if="purchase.estado === 'Entregado'" class="text-body-2"
              style="font-weight: bold; color: black; font-size: 12px; padding: 1px; margin-left: 15px;">
              Llegó el {{ formatDate(purchase.fecha_entrega_estimada) }}
            </v-card-subtitle>
            <!-- Información adicional: Dirección, total y método de pago -->
            <v-card-text style="font-size: 14px; overflow-y: auto; padding: 1px; margin-left: 15px;">
              <p style="margin: 0; color: grey;">Dirección: {{ purchase.direccion }}</p>
              <p style="margin: 0; color: grey;">Total: ${{ purchase.total }}</p>
              <p v-if="purchase.metodo_de_pago" style="font-size: 12px; color: #757575; margin: 1;">
                Método de pago: {{ purchase.metodo_de_pago }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Diálogo para mostrar los productos del pedido seleccionado -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <!-- Encabezado fijo del modal -->
          <v-card-title class="modal-header">
            Productos del pedido
            <v-btn icon class="close-button" @click="dialog = false">
              <v-icon class="close-icon">mdi-close</v-icon>
            </v-btn>
          </v-card-title>


          <v-divider></v-divider>
          <v-card-text style="max-height: 400px; overflow-y: auto;">
            <v-list two-line>
              <v-list-item v-for="(product, idx) in orderedProducts" :key="idx" class="striped">
                <v-list-item-content>
                  <v-list-item-title class="bold-text">{{ product.descripcion }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <span class="label">Cantidad:</span> <span class="value">{{ product.cantidad }}</span> -
                    <span class="label">Precio unitario:</span> <span class="value">${{ product.precio_unitario
                    }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="orderedProducts.length === 0">
                <v-list-item-content>
                  <v-list-item-title>No se encontraron productos para este pedido.</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      selectedFilter: 'Todas', // Filtro por defecto
      filters: [
        { text: 'Todas', value: 'Todas', icon: 'mdi-all-inclusive' },
        { text: 'Entregado', value: 'Entregado', icon: 'mdi-checkbox-marked-circle' },
        { text: 'Pendiente', value: 'Pendiente', icon: 'mdi-clock-outline' }
      ],
      // Los pedidos se obtendrán desde el backend
      purchases: [],
      dialog: false,
      selectedProducts: []
    };
  },
  computed: {
    filteredPurchases() {
      if (this.selectedFilter === 'Todas') {
        return this.purchases;
      }
      return this.purchases.filter(purchase => purchase.estado === this.selectedFilter);
    },
    // Ordena los pedidos para que el último aparezca primero (orden descendente por fecha)
    sortedPurchases() {
      return this.filteredPurchases.slice().sort(
        (a, b) => new Date(b.fecha_entrega_estimada) - new Date(a.fecha_entrega_estimada)
      );
    },
    // Ordena los productos (por ejemplo, por id_producto, pero puedes ajustar el criterio)
    orderedProducts() {
      return this.selectedProducts.slice().sort((a, b) => a.id_producto - b.id_producto);
    }
  },
  mounted() {
    // Se obtiene el id del usuario desde localStorage y se consultan sus pedidos
    const userId = localStorage.getItem("userId");
    if (userId) {
      this.fetchPurchases(userId);
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    // Obtiene los pedidos del usuario mediante el endpoint: GET /pedidos/user/:userId
    fetchPurchases(userId) {
      this.$api.getUserOrders(userId)
        .then(response => {
          this.purchases = response;
        })
        .catch(error => {
          console.error("Error al obtener los pedidos:", error);
        });
    },
    // Al hacer clic en un pedido se consultan sus productos mediante GET /pedidos/productos/:idPedido
    viewOrder(purchase) {
      this.$api.getOrderProducts(purchase.id_pedido)
        .then(response => {
          this.selectedProducts = response;
          this.dialog = true;
        })
        .catch(error => {
          console.error("Error al obtener los productos del pedido:", error);
        });
    }
  }
};
</script>

<style scoped>
.v-col {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.v-card-title {
  font-weight: bold;
}

.v-card-subtitle {
  font-size: 16px;
  color: gray;
}

.v-card-text {
  font-size: 12px;
  padding: 0;
}

.select-container {
  position: relative;
  width: 30%;
  display: flex;
  align-items: center;
}

.custom-select {
  padding-left: 30px;
  padding-right: 30px;
  font-size: 14px;
  border-radius: 20px;
  outline: none;
  background-color: #F3F3F3;
  width: 100%;
}

.custom-select option {
  font-size: 14px;
  color: #29235C;
}

.custom-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #29235C;
  pointer-events: none;
}

.custom-icon-right {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #29235C;
  pointer-events: none;
}

/* Encabezado fijo en el modal */
.modal-header {
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 1;
}

/* Alternar colores en la lista de productos */
.striped:nth-child(odd) {
  background-color: #ffffff;
}

.striped:nth-child(even) {
  background-color: #f5f5f5;
}

.bold-text {
  font-weight: bold;
}

/* Estilos para el texto de cantidad y precio unitario */
.label {
  color: #2e7d32;
  font-weight: bold;
}

.value {
  color: #f44336;
  font-weight: bold;
}

.modal-header {
  position: relative;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.close-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.close-icon {
  font-weight: bold;
}

@media (max-width: 600px) {
  .v-col {
    margin-left: 0 !important;
  }

  .v-card {
    width: 100%;
    max-width: 350px;
  }

  .custom-select {
    font-size: 12px;
  }

  .custom-icon-right,
  .custom-icon {
    font-size: 14px;
  }

  .select-container {
    width: 35%;
  }
}

@media (min-width: 601px) {
  .v-card {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
