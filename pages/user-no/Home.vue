<template>
  <v-container fluid class="fondo">
    <v-row no-gutters>
      <!-- Chips de marca (búsqueda avanzada) -->
      <v-col cols="12" class="productos-wrapper d-flex flex-wrap">
        <v-chip-group active-class="verde white--text" class="d-flex flex-wrap justify-center">
          <v-chip
            v-for="(marca, i) in marcas"
            :key="i"
            @click="filtrarMarca(marca)"
            :class="{'chip-selected': marca === marcaSeleccionada}"
            class="chip-filtro"
          >
            {{ marca }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <!-- Listado de productos -->
      <v-col :cols="mostrarPedidos ? 8 : 12" class="pedidos-sidebar pr-3 pl-3 transition-width">
        <v-card class="productos-container pa-3" style="max-height: 75vh; overflow-y: auto;">
          <div class="productos-scroll" ref="productosScroll">
            <v-card
              v-for="(producto, index) in productos"
              :key="producto.id_producto || index"
              class="producto-card d-flex flex-column pa-3"
            >
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
                      <p>
                        <span class="verde--text font-weight-bold">Descripción:</span>
                        {{ producto.descripcion }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold">Precio:</span>
                        {{ producto.precio }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold">Unidad:</span>
                        {{ producto.unidad }}
                      </p>
                    </v-col>
                    <v-col cols="6" class="detalle-col">
                      <p>
                        <span class="verde--text font-weight-bold">EAN:</span>
                        {{ producto.ean }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold">Precio Mínimo:</span>
                        {{ producto.precio_minimo }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold">Familia:</span>
                        {{ producto.familia }}
                      </p>
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
              <v-text-field
                v-model.number="paginaActual"
                type="number"
                class="mx-2 text-center"
                style="max-width: 80px; text-align: center;"
                @keyup.enter="cambiarPagina(paginaActual)"
                @blur="cambiarPagina(paginaActual)"
              />
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
                  <v-text-field
                    v-model="item.cantidad"
                    class="cantidad-box"
                    dense
                    solo
                    hide-details
                    background-color="transparent"
                    flat
                  ></v-text-field>
                  <v-btn icon class="cantidad-btn-outline" @click="modificarCantidad(index + inicioCarrito, 1)">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <span class="precio-dinamico font-weight-bold">
                  ${{ (item.precio * item.cantidad).toFixed(2) }}
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
              <span class="font-weight-bold precio">${{ totalCarrito.toFixed(2) }}</span>
            </div>
            <v-row justify="center" align="center">
              <v-btn icon @click="paginaCarrito > 1 && cambiarPaginaCarrito(paginaCarrito - 1)">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <div class="d-flex align-center justify-center" style="min-width: 80px;">
                <v-text-field
                  v-model.number="paginaCarrito"
                  type="number"
                  class="mx-2 text-center"
                  style="max-width: 80px; text-align: center;"
                  @keyup.enter="cambiarPaginaCarrito(paginaCarrito)"
                  @blur="cambiarPaginaCarrito(paginaCarrito)"
                />
                <span>/ {{ totalPaginasCarrito }}</span>
              </div>
              <v-btn icon @click="paginaCarrito < totalPaginasCarrito && cambiarPaginaCarrito(paginaCarrito + 1)">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
            <v-btn block class="encargar-btn mt-2">Encargar</v-btn>
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
      // Paginación
      paginaActual: 1,
      totalPaginas: 1,
      // Paginación Carrito
      paginaCarrito: 1,
      itemsPorPaginaCarrito: 10,
    };
  },
  watch: {
    // Cuando cambie el query param "term", hacemos la búsqueda
    "$route.query.term"(newVal) {
      this.paginaActual = 1;
      if (newVal && newVal.trim() !== "") {
        this.obtenerProductosBusqueda(newVal.trim());
      } else {
        // Si no hay término de búsqueda, usamos la marcaSeleccionada
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
      return this.carrito.reduce((acc, item) => acc + (item.precio || 0) * item.cantidad, 0);
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
      // Quitamos la búsqueda si existe
      this.$router.replace({ path: "/home" });
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
      const existe = this.carrito.find((p) => p.clave === producto.clave);
      if (existe) {
        existe.cantidad++;
      } else {
        this.carrito.push({ ...producto, cantidad: 1 });
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
        const res = await this.$api.getProductos({
          page: this.paginaActual,
          limit: 50
        });
        this.productos = res.data.map((p) => ({
          ...p,
          mostrarDetalles: false
        }));
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
        const res = await this.$api.searchProductos(term, {
          page: this.paginaActual,
          limit: 50
        });
        this.productos = res.data.map((p) => ({
          ...p,
          mostrarDetalles: false
        }));
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
    }
  },
  mounted() {
    // Si llega con un query ?term=...
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
