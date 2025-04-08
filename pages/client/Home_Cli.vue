<template>
  <v-container fluid class="fondo">
    <v-row no-gutters>
      <!-- Chips de marca (búsqueda avanzada) -->
      <v-col cols="12" class="productos-wrapper d-flex flex-wrap">
        <v-chip-group active-class="verde white--text" class="d-flex flex-wrap justify-center">
          <v-chip v-for="(marca, i) in marcas" :key="i" @click="filtrarMarca(marca)"
            :class="{ 'chip-selected': marca === marcaSeleccionada }" class="chip-filtro">
            {{ marca }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <!-- Listado de productos -->
      <v-col :cols="mostrarPedidos ? 8 : 12" class="pedidos-sidebar pr-3 pl-3 transition-width">
        <v-card class="productos-container pa-3" style="max-height: 75vh; overflow-y: auto;">
          <div class="productos-scroll" ref="productosScroll">
            <v-card v-for="(producto, index) in productos" :key="producto.id_producto || index"
              class="producto-card d-flex flex-column pa-3">
              <div class="decoracion-verde"></div>
              <v-row class="producto-info ml-5 align-center" @click="toggleDetalles(index)">
                <v-col cols="10">
                  <strong>{{ producto.descripcion }}</strong>
                  <p>
                    <span class="verde--text font-weight-bold">Marca:</span> {{ producto.marca }} &nbsp;
                    <span class="verde--text font-weight-bold">Clave:</span> {{ producto.clave }} &nbsp;
                    <span class="verde--text font-weight-bold">Código:</span> {{ producto.codigo }}
                  </p>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-end">
                  <v-btn icon class="boton-azul" @click.stop="agregarACarrito(producto)">
                    <v-icon class="white--text">mdi-plus</v-icon>
                  </v-btn>
                  <v-btn icon class="boton-azul ml-2" @click.stop="toggleDetalles(index)">
                    <v-icon class="white--text">
                      {{ producto.mostrarDetalles ? "mdi-chevron-up" : "mdi-chevron-down" }}
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-expand-transition>
                <div v-if="producto.mostrarDetalles" class="producto-detalle pa-0">
                  <v-row class="ma-0 pa-0 pl-10 align-start">
                    <v-col cols="6" class="detalle-col">
                      <p><span class="verde--text font-weight-bold">Descripción:</span> {{ producto.descripcion }}</p>
                      <p><span class="verde--text font-weight-bold">Precio público:</span> ${{ producto.precio_publico_con_IVA }}</p>
                      <p><span class="verde--text font-weight-bold">Precio Mayoreo:</span> ${{ producto.precio_mayoreo_con_IVA }}</p>
                      <p><span class="verde--text font-weight-bold">Clave:</span> {{ producto.clave }}</p>
                    </v-col>
                    <v-col cols="6" class="detalle-col">
                      <p><span class="verde--text font-weight-bold">Marca:</span> {{ producto.marca }} </p>
                      <p><span class="verde--text font-weight-bold">Código:</span> {{ producto.codigo }} </p>
                      <p><span class="verde--text font-weight-bold">Peso:</span> {{ producto.peso_kg }} </p>
                      <p><span class="verde--text font-weight-bold">Unidad:</span> {{ producto.unidad}} </p>
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-card>

            <div v-if="productos.length === 0" class="text-center py-4">
              <span>No se encontraron productos</span>
            </div>
          </div>

          <!-- Paginación de productos -->
          <v-row justify="center" align="center" class="mt-4">
            <v-btn icon @click="paginaActual > 1 && cambiarPagina(paginaActual - 1)">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <div class="d-flex align-center justify-center" style="min-width: 80px;">
              <v-text-field v-model.number="paginaActual" type="number" class="mx-2 text-center"
                style="max-width: 80px; text-align: center;" @keyup.enter="cambiarPagina(paginaActual)"
                @blur="cambiarPagina(paginaActual)" />
              <span>/ {{ totalPaginas }}</span>
            </div>
            <v-btn icon @click="paginaActual < totalPaginas && cambiarPagina(paginaActual + 1)">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </v-col>

      <!-- Columna "Mis Pedidos" -->
      <v-col cols="4" v-if="mostrarPedidos" class="pedidos-sidebar pr-3 pl-3">
        <v-card class="pedidos-card pa-4 d-flex flex-column" style="height: 75vh;">
          <div style="overflow-y: auto; flex: 1;">
            <h2 class="font-weight-bold">Mis Pedidos</h2>
            <div v-for="(item, index) in carritoPaginado" :key="index" class="pedido-item">
              <v-divider></v-divider>
              <strong class="mb-2 d-block">{{ item.descripcion }}</strong>
              <v-row align="center" class="cantidad-container mt-2">
                <div class="cantidad-wrapper">
                  <v-btn icon class="cantidad-btn-outline" @click="modificarCantidad(index + inicioCarrito, -1)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-text-field v-model="item.cantidad" class="cantidad-box" dense solo hide-details
                    background-color="transparent" flat></v-text-field>
                  <v-btn icon class="cantidad-btn-outline" @click="modificarCantidad(index + inicioCarrito, 1)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <span class="precio-dinamico font-weight-bold">
                  ${{ (item.precio * item.cantidad).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }) }}
                </span>
              </v-row>
              <p class="disponibles">+50 disponibles</p>
              <v-btn small class="eliminar-btn" @click="modificarCantidad(index + inicioCarrito, -item.cantidad)">
                Eliminar
              </v-btn>
            </div>
          </div>
          <div>
            <v-divider class="my-2"></v-divider>
            <div class="total-container mb-2">
              <h3 class="font-weight-bold">Total</h3>
              <span class="font-weight-bold precio">
                ${{ totalCarrito.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
              </span>
            </div>
            <v-row justify="center" align="center">
              <v-btn icon @click="paginaCarrito > 1 && cambiarPaginaCarrito(paginaCarrito - 1)">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <div class="d-flex align-center justify-center" style="min-width: 80px;">
                <v-text-field v-model.number="paginaCarrito" type="number" class="mx-2 text-center"
                  style="max-width: 80px; text-align: center;" @keyup.enter="cambiarPaginaCarrito(paginaCarrito)"
                  @blur="cambiarPaginaCarrito(paginaCarrito)" />
                <span>/ {{ totalPaginasCarrito }}</span>
              </div>
              <v-btn icon @click="paginaCarrito < totalPaginasCarrito && cambiarPaginaCarrito(paginaCarrito + 1)">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
            <!-- Botón para encargar el pedido -->
            <v-btn block class="encargar-btn mt-2" @click="encargarPedido">
              Encargar
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mostrarPedidos: false,
      marcas: [
        "Todo",
        "Truper",
        "Expert",
        "Hermex",
        "Fiero",
        "Foset",
        "Klintek",
        "Pretul",
        "Ultracraft",
        "Volteck"
      ],
      productos: [],
      carrito: [],
      marcaSeleccionada: "Todo",
      // Paginación de productos
      paginaActual: 1,
      totalPaginas: 1,
      // Paginación del carrito
      paginaCarrito: 1,
      itemsPorPaginaCarrito: 10
    };
  },
  watch: {
    "$route.query.term"(newVal) {
      this.paginaActual = 1;
      if (newVal && newVal.trim() !== "") {
        this.obtenerProductosBusqueda(newVal.trim());
      } else {
        if (this.marcaSeleccionada === "Todo") {
          this.obtenerProductos();
        } else {
          this.obtenerProductosBusqueda(this.marcaSeleccionada);
        }
      }
    }
  },
  computed: {
    totalCarrito() {
      return this.carrito.reduce((acc, item) => acc + (item.precio_publico_con_IVA || 0) * item.cantidad, 0);
    },
    totalPaginasCarrito() {
      return Math.ceil(this.carrito.length / this.itemsPorPaginaCarrito);
    },
    inicioCarrito() {
      return (this.paginaCarrito - 1) * this.itemsPorPaginaCarrito;
    },
    carritoPaginado() {
      return this.carrito.slice(this.inicioCarrito, this.inicioCarrito + this.itemsPorPaginaCarrito);
    }
  },
  methods: {
    filtrarMarca(marca) {
      this.marcaSeleccionada = marca;
      this.paginaActual = 1;
      this.$router.replace({ path: "/client/Home_Cli" });
      if (marca === "Todo") {
        this.obtenerProductos();
      } else {
        this.obtenerProductosBusqueda(marca);
      }
      this.$nextTick(() => {
        if (this.$refs.productosScroll) {
          this.$refs.productosScroll.scrollTop = 0;
        }
      });
    },

    toggleDetalles(index) {
      this.$set(this.productos[index], "mostrarDetalles", !this.productos[index].mostrarDetalles);
    },

    agregarACarrito(producto) {
      const idx = this.carrito.findIndex((p) => p.clave === producto.clave);
      if (idx !== -1) {
        this.carrito[idx].cantidad++;
        const item = this.carrito.splice(idx, 1)[0];
        this.carrito.unshift(item);
      } else {
        this.carrito.unshift({ ...producto, cantidad: 1 });
      }
      this.mostrarPedidos = true;
    },

    modificarCantidad(index, cantidad) {
      this.carrito[index].cantidad += cantidad;
      if (this.carrito[index].cantidad <= 0) {
        this.carrito.splice(index, 1);
      }
      if (this.carrito.length === 0) {
        this.mostrarPedidos = false;
      }
      if (this.inicioCarrito >= this.carrito.length && this.paginaCarrito > 1) {
        this.paginaCarrito--;
      }
    },

    async obtenerProductos() {
      try {
        const res = await this.$api.getProductos({ page: this.paginaActual, limit: 50 });
        this.productos = res.data.map((p) => ({ ...p, mostrarDetalles: false }));
        const limit = res.limit || 50;
        this.totalPaginas = Math.ceil(res.total / limit);
        this.$nextTick(() => {
          if (this.$refs.productosScroll) {
            this.$refs.productosScroll.scrollTop = 0;
          }
        });
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    },

    async obtenerProductosBusqueda(term) {
      try {
        const res = await this.$api.searchProductos(term, { page: this.paginaActual, limit: 50 });
        this.productos = res.data.map((p) => ({ ...p, mostrarDetalles: false }));
        const limit = res.limit || 50;
        this.totalPaginas = Math.ceil(res.total / limit);
        this.$nextTick(() => {
          if (this.$refs.productosScroll) {
            this.$refs.productosScroll.scrollTop = 0;
          }
        });
      } catch (error) {
        console.error("Error al obtener productos por búsqueda:", error);
      }
    },

    cambiarPagina(pagina) {
      if (pagina < 1 || pagina > this.totalPaginas) return;
      this.paginaActual = pagina;
      const term = this.$route.query.term;
      if (term && term.trim() !== "") {
        this.obtenerProductosBusqueda(term.trim());
      } else if (this.marcaSeleccionada === "Todo") {
        this.obtenerProductos();
      } else {
        this.obtenerProductosBusqueda(this.marcaSeleccionada);
      }
    },

    cambiarPaginaCarrito(pagina) {
      if (pagina >= 1 && pagina <= this.totalPaginasCarrito) {
        this.paginaCarrito = pagina;
      }
    },

    async encargarPedido() {
      if (this.carrito.length === 0) return;

      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("No se encontró userId en localStorage. El usuario debe iniciar sesión.");
        return;
      }

      const direccion = localStorage.getItem("direccion") || "Dirección no definida";
      const metodo_de_pago = "efectivo";
      const fecha_entrega_estimada = new Date(Date.now() + 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
        const fecha_levantamiento_pedido = new Date().toISOString().slice(0, 10);

      try {
        const newOrder = {
          estado: "pendiente",
          total: 0,
          metodo_de_pago,
          fecha_levantamiento_pedido,
          fecha_entrega_estimada,
          direccion,
          id_usuario: userId
        };

        const createOrderResponse = await this.$api.createOrder(newOrder);
        const orderId = createOrderResponse.id;

        for (const item of this.carrito) {
          const productDetail = {
            id_pedido: orderId,
            id_producto: item.id_producto,
            cantidad: item.cantidad
          };
          await this.$api.addProductToOrder(productDetail);
        }

        await this.$axios.$put(`/pedidos/${orderId}`, {
          estado: "pendiente",
          total: this.totalCarrito,
          metodo_de_pago,
          fecha_entrega_estimada,
          direccion
        });

        this.carrito = [];
        this.mostrarPedidos = false;
      } catch (error) {
        console.error("Error al enviar el pedido", error);
      }
    },

  },
  mounted() {
    const term = this.$route.query.term;
    if (term && term.trim() !== "") {
      this.obtenerProductosBusqueda(term.trim());
    } else {
      this.obtenerProductos();
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/home.scss";

.fondo {
  background-color: #f5f5f5;
}

.chip-selected {
  background-color: #2e7d32 !important;
  color: white !important;
}
</style>
