<template>
  <v-container fluid class="fondo">
    <v-row no-gutters>
      <!-- Chips de marca -->
      <v-col cols="12" class="productos-wrapper d-flex flex-wrap">
        <v-chip-group
          active-class="verde white--text"
          class="d-flex flex-wrap justify-center"
        >
          <v-chip
            v-for="(marca, i) in marcas"
            :key="i"
            @click="filtrarMarca(marca)"
            :class="{ 'chip-selected': marca === marcaSeleccionada }"
            class="chip-filtro"
          >
            {{ marca }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <!-- Productos -->
      <v-col
        :cols="isMobile ? 12 : mostrarPedidos ? 8 : 12"
        class="pedidos-sidebar pr-3 pl-3 transition-width"
      >
        <v-card
          class="productos-container pa-3"
          style="max-height: 75vh; overflow-y: auto"
        >
          <div class="productos-scroll" ref="productosScroll">
            <v-card
              v-for="(producto, index) in productos"
              :key="producto.id_producto || index"
              class="producto-card d-flex flex-column pa-3"
            >
              <div class="decoracion-verde"></div>
              <v-row
                class="producto-info ml-5 align-center"
                @click="toggleDetalles(index)"
              >
                <v-col cols="10">
                  <strong>{{ producto.descripcion }}</strong>
                  <p>
                    <span class="verde--text font-weight-bold">Marca:</span>
                    {{ producto.marca }} &nbsp;
                    <span class="verde--text font-weight-bold">Clave:</span>
                    {{ producto.clave }} &nbsp;
                    <span class="verde--text font-weight-bold">Código:</span>
                    {{ producto.codigo }}
                  </p>
                </v-col>
                <v-col cols="2" class="d-flex align-center justify-end">
                  <v-btn
                    icon
                    class="boton-azul"
                    @click.stop="agregarACarrito(producto)"
                  >
                    <v-icon class="white--text">mdi-plus</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    class="boton-azul ml-2"
                    @click.stop="toggleDetalles(index)"
                  >
                    <v-icon class="white--text">
                      {{
                        producto.mostrarDetalles
                          ? "mdi-chevron-up"
                          : "mdi-chevron-down"
                      }}
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <v-expand-transition>
                <div
                  v-if="producto.mostrarDetalles"
                  class="producto-detalle pa-0"
                >
                  <v-row class="ma-0 pa-0 pl-10 align-start">
                    <v-col cols="6">
                      <p>
                        <span class="verde--text font-weight-bold"
                          >Descripción:</span
                        >
                        {{ producto.descripcion }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold"
                          >Precio público:</span
                        >
                        ${{ producto.precio_publico_con_IVA }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold"
                          >Precio Mayoreo:</span
                        >
                        ${{ producto.precio_mayoreo_con_IVA }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold">Clave:</span>
                        {{ producto.clave }}
                      </p>
                    </v-col>
                    <v-col cols="6">
                      <p>
                        <span class="verde--text font-weight-bold">Marca:</span>
                        {{ producto.marca }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold"
                          >Código:</span
                        >
                        {{ producto.codigo }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold">Peso:</span>
                        {{ producto.peso_kg }}
                      </p>
                      <p>
                        <span class="verde--text font-weight-bold"
                          >Unidad:</span
                        >
                        {{ producto.unidad }}
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

          <!-- Paginación -->
          <v-row justify="center" align="center" class="mt-4">
            <v-btn
              icon
              @click="paginaActual > 1 && cambiarPagina(paginaActual - 1)"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <div
              class="d-flex align-center justify-center"
              style="min-width: 80px"
            >
              <v-text-field
                v-model.number="paginaActual"
                type="number"
                class="mx-2 text-center"
                style="max-width: 80px"
                @keyup.enter="cambiarPagina(paginaActual)"
                @blur="cambiarPagina(paginaActual)"
              />
              <span>/ {{ totalPaginas }}</span>
            </div>
            <v-btn
              icon
              @click="
                paginaActual < totalPaginas && cambiarPagina(paginaActual + 1)
              "
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </v-col>

      <!-- Pedidos (solo escritorio) -->
      <v-col
        cols="4"
        v-if="mostrarPedidos && !isMobile"
        class="pedidos-sidebar pr-3 pl-3"
      >
        <v-card
          class="pedidos-card pa-4 d-flex flex-column"
          style="height: 75vh"
        >
          <div style="overflow-y: auto; flex: 1">
            <h2 class="font-weight-bold">Mis Pedidos</h2>
            <div
              v-for="(item, index) in carritoPaginado"
              :key="index"
              class="pedido-item"
            >
              <v-divider></v-divider>
              <strong class="mb-2 d-block">{{ item.descripcion }}</strong>
              <v-row align="center" class="cantidad-container mt-2">
                <div class="cantidad-wrapper">
                  <v-btn
                    icon
                    class="cantidad-btn-outline"
                    @click="modificarCantidad(index + inicioCarrito, -1)"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-text-field
                    v-model="item.cantidad"
                    class="cantidad-box"
                    dense
                    solo
                    hide-details
                    flat
                  />
                  <v-btn
                    icon
                    class="cantidad-btn-outline"
                    @click="modificarCantidad(index + inicioCarrito, 1)"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <span class="precio-dinamico font-weight-bold">
                  ${{
                    (item.precio * item.cantidad).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  }}
                </span>
              </v-row>
              <p class="disponibles">+50 disponibles</p>
              <v-btn
                small
                class="eliminar-btn"
                @click="
                  modificarCantidad(index + inicioCarrito, -item.cantidad)
                "
              >
                Eliminar
              </v-btn>
            </div>
          </div>
          <div>
            <v-divider class="my-2"></v-divider>
            <div class="total-container mb-2">
              <h3 class="font-weight-bold">Total</h3>
              <span class="font-weight-bold precio">
                ${{
                  totalCarrito.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }}
              </span>
            </div>
            <v-row justify="center" align="center">
              <v-btn
                icon
                @click="
                  paginaCarrito > 1 && cambiarPaginaCarrito(paginaCarrito - 1)
                "
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <div
                class="d-flex align-center justify-center"
                style="min-width: 80px"
              >
                <v-text-field
                  v-model.number="paginaCarrito"
                  type="number"
                  class="mx-2 text-center"
                  style="max-width: 80px"
                  @keyup.enter="cambiarPaginaCarrito(paginaCarrito)"
                  @blur="cambiarPaginaCarrito(paginaCarrito)"
                />
                <span>/ {{ totalPaginasCarrito }}</span>
              </div>
              <v-btn
                icon
                @click="
                  paginaCarrito < totalPaginasCarrito &&
                    cambiarPaginaCarrito(paginaCarrito + 1)
                "
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
            <v-btn block class="encargar-btn mt-2" @click="encargarPedido">
              Encargar
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- Botón flotante (móvil) -->
      <v-btn
        v-if="mostrarPedidos && isMobile"
        class="boton-inferior-movil"
        @click="dialog = true"
      >
        Ver Pedidos
      </v-btn>

      <!-- Modal (móvil) -->
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-card-title class="font-weight-bold">Mis Pedidos</v-card-title>
          <v-card-text style="max-height: 60vh; overflow-y: auto">
            <div
              v-for="(item, index) in carrito"
              :key="index"
              class="pedido-item"
            >
              <v-divider></v-divider>
              <strong class="mb-2 d-block">{{ item.descripcion }}</strong>
              <v-row align="center" class="cantidad-container mt-2">
                <div class="cantidad-wrapper">
                  <v-btn
                    icon
                    class="cantidad-btn-outline"
                    @click="modificarCantidad(index, -1)"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                  <v-text-field
                    v-model="item.cantidad"
                    class="cantidad-box"
                    dense
                    solo
                    hide-details
                    flat
                  />
                  <v-btn
                    icon
                    class="cantidad-btn-outline"
                    @click="modificarCantidad(index, 1)"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <span class="precio-dinamico font-weight-bold"
                  >${{ (item.precio * item.cantidad).toFixed(2) }}</span
                >
              </v-row>
              <p class="disponibles">+50 disponibles</p>
              <v-btn
                small
                class="eliminar-btn"
                @click="modificarCantidad(index, -item.cantidad)"
              >
                Eliminar
              </v-btn>
            </div>
            <v-divider class="mt-3"></v-divider>
            <div class="total-container mt-5">
              <h3 class="font-weight-bold">Total</h3>
              <span class="font-weight-bold precio"
                >${{ totalCarrito.toFixed(2) }}</span
              >
            </div>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-row>
              <v-col cols="6">
                <v-btn block class="encargar-btn" @click="dialog = false"
                  >Cerrar</v-btn
                >
              </v-col>
              <v-col cols="6">
                <v-btn block class="encargar-btn" @click="encargarPedido"
                  >Encargar</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
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
        "Volteck",
      ],
      productos: [],
      carrito: [],
      marcaSeleccionada: "Todo",
      // Paginación de productos
      paginaActual: 1,
      totalPaginas: 1,
      // Paginación del carrito
      paginaCarrito: 1,
      itemsPorPaginaCarrito: 10,
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
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    },

    totalCarrito() {
      return this.carrito.reduce(
        (acc, item) => acc + (item.precio_publico_con_IVA || 0) * item.cantidad,
        0
      );
    },
    totalPaginasCarrito() {
      return Math.ceil(this.carrito.length / this.itemsPorPaginaCarrito);
    },
    inicioCarrito() {
      return (this.paginaCarrito - 1) * this.itemsPorPaginaCarrito;
    },
    carritoPaginado() {
      return this.carrito.slice(
        this.inicioCarrito,
        this.inicioCarrito + this.itemsPorPaginaCarrito
      );
    },
  },
  methods: {
    filtrarMarca(marca) {
      this.marcaSeleccionada = marca;
      this.paginaActual = 1;

      if (this.$route.path !== "/client/Home_Cli") {
        this.$router.replace({ path: "/client/Home_Cli" });
      }

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
      this.$set(
        this.productos[index],
        "mostrarDetalles",
        !this.productos[index].mostrarDetalles
      );
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
        const res = await this.$api.getProductos({
          page: this.paginaActual,
          limit: 50,
        });
        this.productos = res.data.map((p) => ({
          ...p,
          mostrarDetalles: false,
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
          limit: 50,
        });
        this.productos = res.data.map((p) => ({
          ...p,
          mostrarDetalles: false,
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
    },

    async encargarPedido() {
      // 1. Validaciones básicas
      if (this.carrito.length === 0) return;
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("El usuario debe iniciar sesión");
        return;
      }
      const direccion =
        localStorage.getItem("direccion") || "Dirección no definida";
      const metodo_de_pago = "efectivo";

      try {
        // 2. Obtener datos del usuario y su localidad
        const userResponse = await this.$api.getUserById(userId);
        const id_localidad = userResponse.id_localidad;

        // 3. Obtener ruta y su día de entrega
        const localidadResponse = await this.$api.getLocalidadById(
          id_localidad
        );
        const id_ruta = localidadResponse.id_ruta;
        const rutaResponse = await this.$api.getRutaById(id_ruta);
        const dia_entrega_raw = rutaResponse.dia_entrega; // e.g. "Miercoles"

        // 4. Normalizar y preparar array de días sin tildes
        const stripAccents = (s) =>
          s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const diasSemana = [
          "domingo",
          "lunes",
          "martes",
          "miercoles",
          "jueves",
          "viernes",
          "sabado",
        ];

        // 5. Calcular días restantes hasta el próximo día de entrega
        const hoy = new Date();
        const hoyDia = hoy.getDay(); // 0..6
        const entregaDia = diasSemana.indexOf(
          stripAccents(dia_entrega_raw).toLowerCase()
        ); // 0..6
        let diasHastaEntrega = (entregaDia - hoyDia + 7) % 7 || 7;

        // 6. Fecha tentativa para esta semana
        const fechaTentativa = new Date(hoy);
        fechaTentativa.setDate(hoy.getDate() + diasHastaEntrega);

        // 7. Comprobar margen de 48 h reales
        const horasDeMargen =
          (fechaTentativa.getTime() - hoy.getTime()) / (1000 * 60 * 60);
        if (horasDeMargen < 48) {
          // mover al siguiente ciclo semanal
          fechaTentativa.setDate(fechaTentativa.getDate() + 7);
        }

        // 8. Formato YYYY-MM-DD (sin desfase UTC)
        const fecha_entrega_estimada = new Date(
          fechaTentativa.getFullYear(),
          fechaTentativa.getMonth(),
          fechaTentativa.getDate()
        )
          .toISOString()
          .slice(0, 10);

        // 9. Crear el pedido
        const newOrder = {
          estado: "enviado",
          total: 0,
          metodo_de_pago,
          fecha_entrega_estimada,
          direccion,
          id_usuario: userId,
        };
        const createOrderResponse = await this.$api.createOrder(newOrder);
        const orderId = createOrderResponse.id;

        // 10. Agregar cada producto al pedido
        for (const item of this.carrito) {
          await this.$api.addProductToOrder({
            id_pedido: orderId,
            id_producto: item.id_producto,
            cantidad: item.cantidad,
          });
        }

        // 11. Actualizar total, por si quieres reafirmar datos
        await this.$axios.$put(`/pedidos/${orderId}`, {
          estado: "enviado",
          total: this.totalCarrito,
          metodo_de_pago,
          fecha_entrega_estimada,
          direccion,
        });

        // 12. Limpiar carrito y estado
        this.carrito = [];
        this.mostrarPedidos = false;
      } catch (error) {
        console.error("Error al enviar el pedido:", error);
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
  },
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

.boton-inferior-movil {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: #2e7d32;
  color: white;
  z-index: 1000;
}
</style>
